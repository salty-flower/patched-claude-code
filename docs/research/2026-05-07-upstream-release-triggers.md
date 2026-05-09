# Upstream Release Triggers

## Trigger Split

| Channel | Observable | Policy |
| --- | --- | --- |
| npm | `https://registry.npmjs.org/@anthropic-ai%2fclaude-code` `dist-tags.latest` | Poll on schedule; npm hooks are not a dependency. |
| Native downloads | `https://downloads.claude.ai/claude-code-releases/latest` plus `<version>/manifest.json` | Poll on schedule; verify platform checksums before extraction. |
| GitHub releases | Existing `claude-code-<version>-patch.<n>` releases | Treat full releases as handled and prereleases as promotion candidates. |

## Polling Policy

- Use scheduled GitHub Actions plus `workflow_dispatch`; do not run an
  external watcher.
- Poll four times per day at `01:55`, `19:55`, `21:55`, and `23:55` UTC.
  npm publish metadata is clustered around `17:00-23:00` UTC with a smaller
  `00:00-01:00` UTC tail, so the schedule favors active hours instead of a
  flat six-hour cadence.
- Publish `patch.1` as a prerelease when either npm latest or direct latest has
  a newer unhandled version.
- Promote only when npm latest and direct latest converge and
  `just platform-audit` reports no Linux/Darwin structural extracted-JS drift.
- If both channels converge but platform audit fails, update the prerelease
  notes with the blocking audit output and fail the workflow.

## Source Notes

- npm hooks are retired for this use case: GitHub's npm changelog says npm
  hooks services are deprecated and may no longer function, including API
  endpoints and the `npm hook` command
  ([GitHub Changelog, 2024-07-16](https://github.blog/changelog/2024-07-16-sunset-notice-npm-hooks-api-endpoints/)).
- The direct release endpoint exposes plain channel objects and per-version
  manifests. Polling those objects keeps the workflow independent of private
  bucket notification plumbing.
- Promotion uses the GitHub Releases API because `prerelease=false` and
  `make_latest=true` are explicit update fields
  ([GitHub REST Releases API](https://docs.github.com/en/rest/releases/releases?apiVersion=2022-11-28#update-a-release)).
- Public scheduled-release examples exist in repos such as Stripe's OpenAPI
  workflow history, where release/publish workflows are run by automation
  ([stripe/openapi Actions](https://github.com/stripe/openapi/actions)).
