// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{Ts}from"./chunk-ys7pgsvn.js";function TL(e,o,t){return ((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-bz9m3m46.js").mcpClientModule().invokeToolRaw(e.client,o,t)}function yhe(e,o,t){return ((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-bz9m3m46.js").mcpClientModule().readResourceRaw(e.client,o,t)}function Din(e,o){return ((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-bz9m3m46.js").mcpClientModule().listToolsRaw(e.client,o)}function lB(e,o,t){((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-bz9m3m46.js").mcpClientModule().onMcpNotification(e,o,t)}function fte(e,o){Ts(e.client).onclose=o}function Cko(e,o){let t=Ts(e.client),n=t.onclose;t.onclose=()=>{n?.(),o()}}function Ako(e,o){return Ts(e.client).notification(o)}function Tko(e,o){Ts(e.client)?.transport?.onmessage?.(o)}
export{TL,yhe,Din,lB,fte,Cko,Ako,Tko};
