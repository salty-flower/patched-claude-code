import { expect, test } from "bun:test"
import assert from "node:assert/strict"
import { Terminal } from "@xterm/headless"
import { emptyPrompt } from "./helpers/pty-input"
import { thinkingSummaryCancelReady } from "./helpers/thinking-summary-cancel-ready"

const marker = "C2-7F2"

test("split cancellation redraw waits for retained body and composer, not just erased live label", async () => {
  const terminal = new Terminal({ allowProposedApi: true, cols: 80, rows: 24 })
  const write = (text: string) => new Promise<void>((resolve) => terminal.write(text, resolve))
  const screen = () => {
    const buffer = terminal.buffer.active
    return Array.from(
      { length: buffer.length },
      (_, index) => buffer.getLine(index)?.translateToString(true) ?? "",
    ).join("\n")
  }
  const ready = () => {
    const buffer = terminal.buffer.active
    return emptyPrompt(
      (buffer.getLine(buffer.baseY + buffer.cursorY)?.translateToString(true) ?? "").replaceAll("\u00a0", " "),
    )
  }
  try {
    await write("\x1b[5;1H∴ Summary\x1b[6;1HC2-7F2 pending signed-arrival\x1b[23;1H❯ ")
    expect(thinkingSummaryCancelReady(true, ready(), screen(), marker)).toBe(false)
    // A real PTY read may split here: live label/body erased, redraw cursor in history.
    await write("\x1b[5;1H\x1b[2K\x1b[6;1H\x1b[2K⏺ ANCHOR-1-7F2")
    expect(!screen().includes("∴ Summary")).toBe(true) // Old gate falsely passes.
    expect(thinkingSummaryCancelReady(true, ready(), screen(), marker)).toBe(false)
    await write("\x1b[8;1H∴ C2-7F2 pending signed-arrival")
    expect(thinkingSummaryCancelReady(true, ready(), screen(), marker)).toBe(false)
    await write("\x1b[23;3H")
    expect(thinkingSummaryCancelReady(false, ready(), screen(), marker)).toBe(false)
    expect(thinkingSummaryCancelReady(true, ready(), screen(), marker)).toBe(true)
    assert.equal(screen().split(marker).length - 1, 1)
  } finally {
    terminal.dispose()
  }
})

test("permanently missing retained body never satisfies completion gate", () => {
  expect(thinkingSummaryCancelReady(true, true, "⏺ ANCHOR-1-7F2\n❯ ", marker)).toBe(false)
})

test("completion gate does not mask duplicates from the strict downstream assertion", () => {
  const screen = `∴ ${marker} pending\n∴ ${marker} pending\n❯ `
  expect(thinkingSummaryCancelReady(true, true, screen, marker)).toBe(true)
  expect(() => assert.equal(screen.split(marker).length - 1, 1)).toThrow()
})
