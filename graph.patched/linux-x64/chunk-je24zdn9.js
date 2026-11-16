// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{fr}from"./chunk-6816fcvc.js";import{Al}from"./chunk-ne47maj5.js";import{Xht}from"./chunk-p9etzd0t.js";import{pt}from"./chunk-k2zw08bd.js";import{Vrt}from"./chunk-gjqqerpd.js";function Wpr(f,t,i,m){let e=Xht(t);if(e===null||!Vrt(e)||t.some((n)=>n!==e&&n.name===e.name))return;let c=fr(Al,m),r=f.filter((n)=>pt(n,c)),o=r[0]?.mcpInfo;return r.length!==1||i!==void 0&&Object.hasOwn(i,c)||o?.serverName!==e.name||o.toolName!==m||o.scope!==e.config.scope||o.serverType!==e.config.type||o.hiddenFromModel===!0?void 0:r[0]}
export{Wpr};
