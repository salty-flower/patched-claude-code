// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{f}from"./chunk-wp37h1qm.js";import{Us}from"./chunk-4tjy05rb.js";import{pt}from"./chunk-6kgnb6mn.js";function lF(e,o,t){return ((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-mp1vy66m.js").mcpClientModule().invokeToolRaw(e.client,o,t)}function Xwe(e,o,t){return ((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-mp1vy66m.js").mcpClientModule().readResourceRaw(e.client,o,t)}function $wn(e,o){return ((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-mp1vy66m.js").mcpClientModule().listToolsRaw(e.client,o)}var c=f(()=>pt({}));function nz(e,o,t){((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-mp1vy66m.js").mcpClientModule().onMcpNotification(e,o,t)}function Mse(e,o){Us(e.client).onclose=o}function t3o(e,o){let t=Us(e.client),n=t.onclose;t.onclose=()=>{n?.(),o()}}function n3o(e,o){return Us(e.client).notification(o)}function r3o(e,o){Us(e.client)?.transport?.onmessage?.(o)}
export{lF,Xwe,$wn,nz,Mse,t3o,n3o,r3o};
