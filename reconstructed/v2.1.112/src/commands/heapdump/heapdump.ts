import { performHeapDump } from '../../utils/heapDumpService.js'
import { formatHeapDiagnostics } from '../../utils/heapDiagnostics.js'

export async function call(): Promise<{ type: 'text'; value: string }> {
  const result = await performHeapDump()

  if (!result.success || !result.heapPath || !result.diagPath) {
    return {
      type: 'text',
      value: `Failed to create heap dump: ${result.error}`,
    }
  }

  const lines = [result.heapPath, result.diagPath]
  if (result.diagnostics) {
    lines.push('', formatHeapDiagnostics(result.diagnostics))
  }
  lines.push('', 'Open the .heapsnapshot in Chrome DevTools → Memory → Load to inspect retainers.')

  return {
    type: 'text',
    value: lines.join('\n'),
  }
}
