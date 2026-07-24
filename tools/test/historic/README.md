# Historical Runtime Tests

## Scope

Tests here preserve behavior for targets outside the current CI matrix. The
default runner is intentionally non-recursive and does not collect them.

Run a historical test only with its staged upstream bundle:

```sh
TARGET_VERSION=2.1.215 bun test tools/test/historic/ultracode-opus46-max-runtime.test.ts
```
