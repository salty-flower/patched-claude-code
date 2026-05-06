import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { useInterval } from 'usehooks-ts';
import { useUpdateNotification } from '../hooks/useUpdateNotification.js';
import { Box, Text } from '../ink.js';
import { type AutoUpdaterResult, getLatestVersion, getMaxVersion, type InstallStatus, installGlobalPackage, shouldSkipVersion } from '../utils/autoUpdater.js';
import { getGlobalConfig, isAutoUpdaterDisabled } from '../utils/config.js';
import { logForDebugging } from '../utils/debug.js';
import { getCurrentInstallationType } from '../utils/doctorDiagnostic.js';
import { installOrUpdateClaudePackage, localInstallationExists } from '../utils/localInstaller.js';
import { removeInstalledSymlink } from '../utils/nativeInstaller/index.js';
import { gt, gte } from '../utils/semver.js';
import { getInitialSettings } from '../utils/settings/settings.js';

// TODO(lift): verify Redux store integration pattern at byte ~12264026
const useAppSelector = (selector: (state: any) => any) => selector({ autoUpdaterResult: null });
const useAppDispatch = () => (updater: any) => {};

type Props = {
  isUpdating: boolean;
  onChangeIsUpdating: (isUpdating: boolean) => void;
  showSuccessMessage: boolean;
  verbose: boolean;
};
export function AutoUpdater({
  isUpdating,
  onChangeIsUpdating,
  showSuccessMessage,
  verbose
}: Props): React.ReactNode {
  const autoUpdaterResult = useAppSelector((state: any) => state.autoUpdaterResult);
  const dispatch = useAppDispatch();
  const [versions, setVersions] = useState<{
    global?: string | null;
    latest?: string | null;
  }>({});
  const [hasLocalInstall, setHasLocalInstall] = useState(false);
  const updateSemver = useUpdateNotification(autoUpdaterResult?.version);
  useEffect(() => {
    void localInstallationExists().then(setHasLocalInstall);
  }, []);

  // Track latest isUpdating value in a ref so the memoized checkForUpdates
  // callback always sees the current value. Without this, the 30-minute
  // interval fires with a stale closure where isUpdating is false, allowing
  // a concurrent installGlobalPackage() to run while one is already in
  // progress.
  const isUpdatingRef = useRef(isUpdating);
  isUpdatingRef.current = isUpdating;
  const checkForUpdates = React.useCallback(async () => {
    if (isUpdatingRef.current) {
      return;
    }
    if ("production" === 'test' || "production" === 'development') {
      logForDebugging('AutoUpdater: Skipping update check in test/dev environment');
      return;
    }
    const currentVersion = "2.1.112";
    const channel = getInitialSettings()?.autoUpdatesChannel ?? 'latest';
    let latestVersion = await getLatestVersion(channel);
    const maxVersion = await getMaxVersion();
    if (maxVersion && latestVersion && gt(latestVersion, maxVersion)) {
      logForDebugging(`AutoUpdater: maxVersion ${maxVersion} is set, capping update from ${latestVersion} to ${maxVersion}`);
      if (gte(currentVersion, maxVersion)) {
        logForDebugging(`AutoUpdater: current version ${currentVersion} is already at or above maxVersion ${maxVersion}, skipping update`);
        setVersions({
          global: currentVersion,
          latest: latestVersion
        });
        return;
      }
      latestVersion = maxVersion;
    }
    setVersions({
      global: currentVersion,
      latest: latestVersion
    });

    // Check if update needed and perform update
    if (currentVersion && latestVersion && !gte(currentVersion, latestVersion) && !shouldSkipVersion(latestVersion)) {
      const startTime = Date.now();
      onChangeIsUpdating(true);

      // Remove native installer symlink since we're using JS-based updates
      // But only if user hasn't migrated to native installation
      const config = getGlobalConfig();
      if (config.installMethod !== 'native' && !process.env.DISABLE_INSTALLATION_CHECKS) {
        await removeInstalledSymlink();
      }

      // Detect actual running installation type
      const installationType = await getCurrentInstallationType();
      logForDebugging(`AutoUpdater: Detected installation type: ${installationType}`);

      // Skip update for development builds
      if (installationType === 'development') {
        logForDebugging('AutoUpdater: Cannot auto-update development build');
        onChangeIsUpdating(false);
        return;
      }

      // Choose the appropriate update method based on what's actually running
      let installStatus: InstallStatus;
      let updateMethod: 'local' | 'global';
      if (installationType === 'npm-local') {
        // Use local update for local installations
        logForDebugging('AutoUpdater: Using local update method');
        updateMethod = 'local';
        installStatus = await installOrUpdateClaudePackage(channel);
      } else if (installationType === 'npm-global') {
        // Use global update for global installations
        logForDebugging('AutoUpdater: Using global update method');
        updateMethod = 'global';
        installStatus = await installGlobalPackage();
      } else if (installationType === 'native') {
        // This shouldn't happen - native should use NativeAutoUpdater
        logForDebugging('AutoUpdater: Unexpected native installation in non-native updater');
        onChangeIsUpdating(false);
        return;
      } else {
        // Fallback to config-based detection for unknown types
        logForDebugging(`AutoUpdater: Unknown installation type, falling back to config`);
        const isMigrated = config.installMethod === 'local';
        updateMethod = isMigrated ? 'local' : 'global';
        if (isMigrated) {
          installStatus = await installOrUpdateClaudePackage(channel);
        } else {
          installStatus = await installGlobalPackage();
        }
      }
      onChangeIsUpdating(false);
      if (installStatus === 'success') {
        logEvent('tengu_auto_updater_success', {
          fromVersion: currentVersion,
          toVersion: latestVersion,
          durationMs: Date.now() - startTime,
          wasMigrated: updateMethod === 'local',
          installationType
        });
      } else {
        logEvent('tengu_auto_updater_fail', {
          fromVersion: currentVersion,
          attemptedVersion: latestVersion,
          status: installStatus,
          durationMs: Date.now() - startTime,
          wasMigrated: updateMethod === 'local',
          installationType
        });
      }
      dispatch((prev: any) => {
        const existing = prev.autoUpdaterResult;
        if (existing?.version === latestVersion && existing?.status === installStatus) {
          return prev;
        }
        return { ...prev, autoUpdaterResult: { version: latestVersion, status: installStatus } };
      });
    }
    // isUpdating intentionally omitted from deps; we read isUpdatingRef
    // instead so the guard is always current without changing callback
    // identity (which would re-trigger the initial-check useEffect below).
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // biome-ignore lint/correctness/useExhaustiveDependencies: isUpdating read via ref
  }, [dispatch]);

  // Initial check
  useEffect(() => {
    void checkForUpdates();
  }, [checkForUpdates]);

  // Check every 30 minutes
  useInterval(checkForUpdates, 30 * 60 * 1000);
  if (!autoUpdaterResult?.version && (!versions.global || !versions.latest)) {
    return null;
  }
  if (!autoUpdaterResult?.version && !isUpdating) {
    return null;
  }
  return <Box flexDirection="row" gap={1}>
      {verbose && <Text dimColor wrap="truncate">
          globalVersion: {versions.global} &middot; latestVersion:{' '}
          {versions.latest}
        </Text>}
      {isUpdating ? <>
          <Box>
            <Text color="text" dimColor wrap="truncate">
              Auto-updating&hellip;
            </Text>
          </Box>
        </> : autoUpdaterResult?.status === 'success' && showSuccessMessage && updateSemver && <Text color="success" wrap="truncate">
            &check; Update installed &middot; Restart to apply
          </Text>}
      {(autoUpdaterResult?.status === 'install_failed' || autoUpdaterResult?.status === 'no_permissions') && <Text color="error" wrap="truncate">
          &times; Auto-update failed &middot; Try <Text bold>claude doctor</Text> or{' '}
          <Text bold>
            {hasLocalInstall ? `cd ~/.claude/local && npm update @anthropic-ai/claude-code` : `npm i -g @anthropic-ai/claude-code`}
          </Text>
        </Text>}
    </Box>;
}

// TODO(lift): logEvent import at byte ~12264026
function logEvent(name: string, payload: Record<string, unknown>) {
  // Placeholder — actual implementation imported from analytics
}
