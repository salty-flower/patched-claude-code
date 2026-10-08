// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{x}from"./chunk-tnh13g2g.js";import{LFn,hJ}from"./chunk-5g70wphz.js";import{f}from"./chunk-y575z4xw.js";import{Ys}from"./chunk-vkhymtsv.js";import{ht}from"./chunk-hcyr0654.js";function _ae(e){return hJ({serverName:e.name})?new x(LFn,"hosted desktop reached past its tools"):void 0}function n(e){let o=_ae(e);return o&&Promise.reject(o)}function p1(e,o,t){return n(e)??((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-v2tfe2cy.js").mcpClientModule().invokeToolRaw(e.client,o,t)}function oke(e,o,t){return n(e)??((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-v2tfe2cy.js").mcpClientModule().readResourceRaw(e.client,o,t)}function jAn(e,o){return n(e)??((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-v2tfe2cy.js").mcpClientModule().listToolsRaw(e.client,o)}var m=f(()=>ht({}));function kG(e,o,t){((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-v2tfe2cy.js").mcpClientModule().onMcpNotification(e,o,t)}function Sae(e,o){Ys(e.client).onclose=o}function tZo(e,o){let t=Ys(e.client),r=t.onclose;t.onclose=()=>{r?.(),o()}}function nZo(e,o){return n(e)??Ys(e.client).notification(o)}function rZo(e,o){Ys(e.client)?.transport?.onmessage?.(o)}
export{_ae,p1,oke,jAn,kG,Sae,tZo,nZo,rZo};
