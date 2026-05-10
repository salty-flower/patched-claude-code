import { expect, test } from "bun:test"
import { parseArgs } from "../patch/render-patched"

test("render-patched defaults to self-verifying direct CLI use", () => {
  expect(parseArgs(["2.1.133"])).toEqual({ version: "2.1.133" })
})

test("render-patched accepts an explicit skip-verify mode for dependency-verified callers", () => {
  expect(parseArgs(["2.1.133", "--skip-verify"])).toEqual({ version: "2.1.133", skipVerify: true })
})
