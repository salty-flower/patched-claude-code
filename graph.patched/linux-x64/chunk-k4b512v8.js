// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{x}from"./chunk-5g6j8x8p.js";import{k$n,pQ}from"./chunk-5zqw5ss6.js";import{f}from"./chunk-ras5x31x.js";import{Ys}from"./chunk-q9b5rs3e.js";import{ht}from"./chunk-w8db6ytr.js";function pae(e){return pQ({serverName:e.name})?new x(k$n,"hosted desktop reached past its tools"):void 0}function n(e){let o=pae(e);return o&&Promise.reject(o)}function nU(e,o,t){return n(e)??((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-fw94rtj6.js").mcpClientModule().invokeToolRaw(e.client,o,t)}function JEe(e,o,t){return n(e)??((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-fw94rtj6.js").mcpClientModule().readResourceRaw(e.client,o,t)}function kAn(e,o){return n(e)??((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-fw94rtj6.js").mcpClientModule().listToolsRaw(e.client,o)}var m=f(()=>ht({}));function fG(e,o,t){((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-fw94rtj6.js").mcpClientModule().onMcpNotification(e,o,t)}function fae(e,o){Ys(e.client).onclose=o}function y7o(e,o){let t=Ys(e.client),r=t.onclose;t.onclose=()=>{r?.(),o()}}function _7o(e,o){return n(e)??Ys(e.client).notification(o)}function b7o(e,o){Ys(e.client)?.transport?.onmessage?.(o)}
export{pae,nU,JEe,kAn,fG,fae,y7o,_7o,b7o};
