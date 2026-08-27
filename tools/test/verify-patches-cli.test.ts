import { expect, test } from "bun:test"
import { parseArgs } from "../patch/verify-patches"

test("verify-patches accepts compact skip output", () => {
  expect(parseArgs(["patches/example.toml", "--against", "staging/2.1.246/cli.js", "--quiet-skips"])).toEqual({
    patches: ["patches/example.toml"],
    target: "staging/2.1.246/cli.js",
    quietSkips: true,
  })
})
