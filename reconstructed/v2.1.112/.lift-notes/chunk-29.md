# Chunk 29 Lift Notes

## Files
- `src/components/Markdown.tsx`
- `src/components/MarkdownTable.tsx`
- `src/components/Message.tsx`
- `src/components/MessageModel.tsx`
- `src/components/MessageResponse.tsx`

## Method Summary
- **MarkdownTable.tsx**: verbatim (all decls jac=cos=1)
- **MessageModel.tsx**: verbatim (all decls jac=cos=1)
- **MessageResponse.tsx**: verbatim (all decls jac=cos=1)
- **Markdown.tsx**: diff-and-patch — one drifted decl (jac=0.75) plus removal of `useMemo`/`use no memo` in StreamingMarkdown
- **Message.tsx**: diff-and-patch — two drifted decls (jac=0.978, 0.963), compiler cache size increased from 94→95 slots, `messageUuid` prop threaded through AssistantMessageBlock and AttachmentMessage, removal of `feature("CONNECTOR_TEXT")` guard and `isConnectorTextBlock` branch in AssistantMessageBlock

---

## Markdown.tsx

### Alignment
- decl [6996575,6996638) jac=1 cos=1 → `hasMarkdownSyntax`
- decl [6996638,6996924) jac=1 cos=1 → `cachedLexer`
- decl [6996924,6997287) jac=1 cos=1 → `Markdown`
- decl [6997287,6997526) jac=1 cos=1 → `MarkdownWithHighlight`
- decl [6997526,6998098) jac=0.75 cos=0.999 → `MarkdownBody` (drifted)
- decl [6998098,6998567) jac=1 cos=1 → `StreamingMarkdown`
- No v112 match for [6996511,6996575), [6998567,6998590), [6998590,6998717)

### Changes from v88 → v112
1. **MarkdownBody**: Added `blockquote` branch in the token loop. v112 minified shows:
   ```
   else if(X.type==="blockquote")J(),O.push(SM.default.createElement(hqY,{key:O.length,token:X,theme:A,highlight:Y,dimColor:z}));
   ```
   This is a new component `MarkdownBlockquote` (minified name `hqY`).

2. **MarkdownBody**: Non-table content trimming changed from `.trim()` to `.replace(/^\n+/,"").trimEnd()`.
   - v88: `H.trim()`
   - v112: `H.replace(/^\n+/,"").trimEnd()`

3. **StreamingMarkdown**: Removed `'use no memo'` directive and `useMemo` call. The React Compiler now handles memoization via `_c` cache. The v112 minified no longer contains `useMemo` import or the `'use no memo'` string.

### TODOs
- `MarkdownBlockquote` component (minified `hqY`) is unresolved. v112_min.js byte range [8387871, 8388590) references it but the component definition is not in this slice.

---

## MarkdownTable.tsx

### Alignment
- All decls jac=cos=1. Verbatim lift.

### Changes
- None detected. The v112 minified uses renamed minified identifiers but structure is identical.

---

## Message.tsx

### Alignment
- decl [8303666,8308036) jac=0.978 cos=1 → `MessageImpl` (drifted)
- decl [8308036,8309091) jac=1 cos=1 → `UserMessage`
- decl [8309091,8311226) jac=0.963 cos=1 → `AssistantMessageBlock` (drifted)
- decl [8311226,8311373) jac=1 cos=1 → `hasThinkingContent`
- decl [8311373,8311793) jac=1 cos=1 → `areMessagePropsEqual`
- No v112 match for [8303618,8303666), [8311793,8311803), [8311803,8311981)

### Changes from v88 → v112
1. **MessageImpl cache size**: 94 → 95 slots (`_c(95)`). The extra slot is for `message.uuid` in the attachment branch.

2. **AttachmentMessage**: Now receives `messageUuid={message.uuid}` prop. v112 minified:
   ```
   N9.createElement(xjK,{addMargin:A,attachment:_.attachment,verbose:$,isTranscriptMode:W,messageUuid:_.uuid})
   ```

3. **AssistantMessageBlock lambda**: Now passes `messageUuid={message.uuid}` to each `AssistantMessageBlock`. v112 minified:
   ```
   N9.createElement($KY,{key:x,param:C,...,messageUuid:_.uuid})
   ```

4. **AssistantMessageBlock function**: Cache size 45 → 48 slots (`_c(48)`). New prop `messageUuid` destructured from t0. The `messageUuid` prop is passed down to:
   - `AssistantToolUseMessage`
   - `AssistantTextMessage`

5. **Removed `feature("CONNECTOR_TEXT")` guard**: The v88 source has:
   ```tsx
   if (feature("CONNECTOR_TEXT")) {
     if (isConnectorTextBlock(param)) { ... }
   }
   ```
   This entire branch is absent from v112 minified. The v112 `AssistantMessageBlock` goes straight to `switch(param.type)`.

6. **Component name mapping** (minified → source, inferred from structure):
   - v88: `JUz` → `AssistantMessageBlock`
   - v112: `$KY` → `AssistantMessageBlock`
   - v88: `HUz` → `UserMessage`
   - v112: `wKY` → `UserMessage`
   - v88: `jUz` → `MessageImpl`
   - v112: `OKY` → `MessageImpl`

### TODOs
- None — all symbols are resolvable from imports or local definitions.

---

## MessageModel.tsx

### Alignment
- All decls jac=cos=1. Verbatim lift.

### Changes
- None detected.

---

## MessageResponse.tsx

### Alignment
- All decls jac=cos=1. Verbatim lift.

### Changes
- None detected. Minified identifiers renamed but structure identical.

---

## Symbol Mapping (v88 → v112 minified names)

| Source symbol | v88 min | v112 min |
|---|---|---|
| `Markdown` | `AO` | `xw` |
| `MarkdownWithHighlight` | `NMz` | `LqY` |
| `MarkdownBody` | `kF1` | `c77` |
| `StreamingMarkdown` | `fx4` | `e2K` |
| `hasMarkdownSyntax` | `kMz` | `EqY` |
| `cachedLexer` | `VMz` | `yqY` |
| `MarkdownTable` | `Wx4` | `s2K` |
| `wrapText` | `ta6` | `VK8` |
| `MessageImpl` | `jUz` | `OKY` |
| `UserMessage` | `HUz` | `wKY` |
| `AssistantMessageBlock` | `JUz` | `$KY` |
| `hasThinkingContent` | `hr1` | `yq7` |
| `areMessagePropsEqual` | `MUz` | `jKY` |
| `MessageModel` | `DhK` | `adK` |
| `_temp` (hasText) | `n0Y` | `yLK` / `GUY` |
| `MessageResponse` | `s8` | `_1` |
| `MessageResponseProvider` | `NG_` | `Am_` |
