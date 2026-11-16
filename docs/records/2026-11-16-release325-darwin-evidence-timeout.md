# Claude Code 2.1.325 Darwin evidence timeout

## Preparation scope versus runtime assertions

The [first release attempt](https://github.com/salty-flower/patched-claude-code/actions/runs/43793521558) stopped because its exact-commit CI failed.
The [Darwin evidence job](https://github.com/salty-flower/patched-claude-code/actions/runs/43793521584/job/133057623302) exceeded the local-prompt-ablation test's 120-second setup budget before either runtime scenario ran.
The same commit's Darwin tool-test job passed both scenarios and all 112 assertions.
No release asset or source tag was published by the failed attempt.

The fixture previously applied its patches to every module before locating the one module it actually executes.
It now uniquely identifies that owner first and applies the patches only there on each platform.
The full graph remains available for static assertions; normal locator verification and rendered patch tests retain graph-wide coverage.
Both platform scenarios, their oracle callbacks, and the setup/scenario deadlines are unchanged.
The rendered Claude Code runtime is unchanged.

## Validation

- Typecheck and Biome pass without warnings.
- Target 2.1.325 passes both runtime scenarios and all 112 assertions under CI-pinned Bun 1.3.13.
- Predecessor 2.1.318 passes both scenarios and all 68 assertions.
- The replacement release attempt uses the same `patch.1` coordinates because the failed attempt published nothing and runtime bytes did not change.

Complete failed-job logs and focused reruns are retained under `dist/release325-failure/`.
