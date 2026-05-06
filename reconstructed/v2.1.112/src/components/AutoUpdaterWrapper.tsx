import { c as _c } from "react/compiler-runtime";
import { feature } from 'bun:bundle';
import * as React from 'react';
import type { AutoUpdaterResult } from '../utils/autoUpdater.js';
import { isAutoUpdaterDisabled } from '../utils/config.js';
import { logForDebugging } from '../utils/debug.js';
import { getCurrentInstallationType } from '../utils/doctorDiagnostic.js';
import { AutoUpdater } from './AutoUpdater.js';
import { NativeAutoUpdater } from './NativeAutoUpdater.js';
import { PackageManagerAutoUpdater } from './PackageManagerAutoUpdater.js';

type Props = {
  isUpdating: boolean;
  onChangeIsUpdating: (isUpdating: boolean) => void;
  showSuccessMessage: boolean;
  verbose: boolean;
};
export function AutoUpdaterWrapper(t0) {
  const $ = _c(13);
  const {
    isUpdating,
    onChangeIsUpdating,
    showSuccessMessage,
    verbose
  } = t0;
  const [useNativeInstaller, setUseNativeInstaller] = React.useState(null);
  const [isPackageManager, setIsPackageManager] = React.useState(null);
  let t1;
  let t2;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = () => {
      const checkInstallation = async function checkInstallation() {
        const installationType = await getCurrentInstallationType();
        logForDebugging(`AutoUpdaterWrapper: Installation type: ${installationType}`);
        setUseNativeInstaller(installationType === "native");
        setIsPackageManager(installationType === "package-manager");
      };
      checkInstallation();
    };
    t2 = [];
    $[0] = t1;
    $[1] = t2;
  } else {
    t1 = $[0];
    t2 = $[1];
  }
  React.useEffect(t1, t2);
  if (useNativeInstaller === null || isPackageManager === null) {
    return null;
  }
  if (isPackageManager) {
    let t3;
    if ($[2] !== isUpdating || $[3] !== onChangeIsUpdating || $[4] !== showSuccessMessage || $[5] !== verbose) {
      t3 = <PackageManagerAutoUpdater verbose={verbose} isUpdating={isUpdating} onChangeIsUpdating={onChangeIsUpdating} showSuccessMessage={showSuccessMessage} />;
      $[2] = isUpdating;
      $[3] = onChangeIsUpdating;
      $[4] = showSuccessMessage;
      $[5] = verbose;
      $[6] = t3;
    } else {
      t3 = $[6];
    }
    return t3;
  }
  const Updater = useNativeInstaller ? NativeAutoUpdater : AutoUpdater;
  let t3;
  if ($[7] !== Updater || $[8] !== isUpdating || $[9] !== onChangeIsUpdating || $[10] !== showSuccessMessage || $[11] !== verbose) {
    t3 = <Updater verbose={verbose} isUpdating={isUpdating} onChangeIsUpdating={onChangeIsUpdating} showSuccessMessage={showSuccessMessage} />;
    $[7] = Updater;
    $[8] = isUpdating;
    $[9] = onChangeIsUpdating;
    $[10] = showSuccessMessage;
    $[11] = verbose;
    $[12] = t3;
  } else {
    t3 = $[12];
  }
  return t3;
}
