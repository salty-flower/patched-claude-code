# Actions Toolchain Availability

## Runner Contract

| Item | Decision |
| --- | --- |
| Runner | Pin `runs-on: ubuntu-24.04`; do not use `ubuntu-latest`. |
| Bun | Install with `oven-sh/setup-bun@v2`, pinned to `bun-version: "1.3.13"`. |
| Missing tool install | Install only `just` with apt. |
| Preinstalled tools | Rely on runner `jq`, `gh`, `git`, `tar`, `curl`, `sha256sum`, `node`, `npm`, and `script(1)`. |
| Guardrail | Print versions in a tool-availability step before any expensive work. |
| Not installed in v1 | `expect`, `tmux`, and `node-pty`; document as fallbacks only. |

## Node 24 Actions

Use `actions/checkout@v6` and `actions/upload-artifact@v6`. Do not rely on
`FORCE_JAVASCRIPT_ACTIONS_TO_NODE24` as the main fix for Node 20 warnings.

## Source Notes

- GitHub-hosted runner docs list `ubuntu-24.04` as a supported Linux runner
  label and warn that `-latest` is only GitHub's latest stable image, not
  necessarily the newest vendor OS
  ([GitHub-hosted runners reference](https://docs.github.com/en/actions/reference/runners/github-hosted-runners)).
- The Ubuntu 24.04 runner image includes jq, Git, GitHub CLI, Node, and npm
  in the published software list
  ([actions/runner-images Ubuntu2404 README](https://github.com/actions/runner-images/blob/main/images/ubuntu/Ubuntu2404-Readme.md)).
- GitHub announced Node 20 deprecation for Actions runners and recommends
  updating workflows to actions that run on Node 24
  ([GitHub Changelog, 2025-09-19](https://github.blog/changelog/2025-09-19-deprecation-of-node-20-on-github-actions-runners/)).
- `actions/checkout` v6 release notes document the current v6 line and Node
  24 support in the v6 series
  ([actions/checkout releases](https://github.com/actions/checkout/releases)).
- `actions/upload-artifact@v6` release notes state that v6 runs on Node.js 24
  ([actions/upload-artifact releases](https://github.com/actions/upload-artifact/releases)).
- `oven-sh/setup-bun@v2` supports an explicit `bun-version` input
  ([setup-bun README](https://github.com/oven-sh/setup-bun)).
