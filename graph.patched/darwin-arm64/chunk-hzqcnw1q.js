// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{tr}from"./chunk-s0ve5p66.js";import{Cl}from"./chunk-5eewsfgr.js";import{Yht}from"./chunk-qevbb3mv.js";import{mt}from"./chunk-954kbre8.js";import{Jrt}from"./chunk-xezcmyha.js";function pmr(f,t,i,m){let e=Yht(t);if(e===null||!Jrt(e)||t.some((n)=>n!==e&&n.name===e.name))return;let c=tr(Cl,m),r=f.filter((n)=>mt(n,c)),o=r[0]?.mcpInfo;return r.length!==1||i!==void 0&&Object.hasOwn(i,c)||o?.serverName!==e.name||o.toolName!==m||o.scope!==e.config.scope||o.serverType!==e.config.type||o.hiddenFromModel===!0?void 0:r[0]}
export{pmr};
