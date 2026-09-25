// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{Ss}from"./chunk-sp41cw56.js";function K$(e,o,t){return ((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-11kaw44p.js").mcpClientModule().invokeToolRaw(e.client,o,t)}function ype(e,o,t){return ((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-11kaw44p.js").mcpClientModule().readResourceRaw(e.client,o,t)}function CJt(e,o){return ((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-11kaw44p.js").mcpClientModule().listToolsRaw(e.client,o)}function QM(e,o,t){((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-11kaw44p.js").mcpClientModule().onMcpNotification(e,o,t)}function YJ(e,o){Ss(e.client).onclose=o}function Odo(e,o){let t=Ss(e.client),n=t.onclose;t.onclose=()=>{n?.(),o()}}function Ddo(e,o){return Ss(e.client).notification(o)}function Ldo(e,o){Ss(e.client)?.transport?.onmessage?.(o)}
export{K$,ype,CJt,QM,YJ,Odo,Ddo,Ldo};
