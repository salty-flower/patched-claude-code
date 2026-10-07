// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{f}from"./chunk-2pfss7d0.js";import{Us}from"./chunk-fz1cdajz.js";import{pt}from"./chunk-seb9y51t.js";function _$(e,o,t){return ((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-ta625h42.js").mcpClientModule().invokeToolRaw(e.client,o,t)}function nEe(e,o,t){return ((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-ta625h42.js").mcpClientModule().readResourceRaw(e.client,o,t)}function tEn(e,o){return ((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-ta625h42.js").mcpClientModule().listToolsRaw(e.client,o)}var c=f(()=>pt({}));function pW(e,o,t){((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-ta625h42.js").mcpClientModule().onMcpNotification(e,o,t)}function $se(e,o){Us(e.client).onclose=o}function F3o(e,o){let t=Us(e.client),n=t.onclose;t.onclose=()=>{n?.(),o()}}function $3o(e,o){return Us(e.client).notification(o)}function U3o(e,o){Us(e.client)?.transport?.onmessage?.(o)}
export{_$,nEe,tEn,pW,$se,F3o,$3o,U3o};
