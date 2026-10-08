// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{E7t}from"./chunk-630hazsp.js";var a=void 0;function u(e){return e.startsWith(E7t)&&!e.slice(E7t.length).includes("__")||a!==void 0&&e===a}function s(e){let o=e.mcpInfo;if(o===void 0)return"unplaced";if(o.accountMemoryServer===!0)return"verified";let n=o.source??(o.serverType==="sdk"?"sdk":void 0);return n===void 0||n==="sdk"?"unplaced":"other_server"}function y(e,o){if(e==="verified"||o==="verified")return"verified";return e==="unplaced"||o==="unplaced"?"unplaced":"other_server"}function $G(e){let o=new Set,n=new WeakMap,d=(r)=>{let c=n.get(r);if(c===void 0){let t=new Map;for(let i of r){let f=s(i);for(let l of[i.name,...i.aliases??[]])t.set(l,y(t.get(l),f))}c=t,n.set(r,c)}return c};return(r)=>{if(o.has(r))return"verified";let c=e(),t=c===void 0?"unplaced":d(c).get(r)??"unplaced";if(t==="verified")o.add(r);return t}}function Ixn(e){return(o)=>e.has(o)?"verified":"unplaced"}function h5(e,o,n){switch(o?.(e)){case"verified":return!0;case"other_server":return n==="history"&&u(e);default:return u(e)}}function ihe(e){return h5(e.name,()=>s(e),"live")}
export{$G,Ixn,h5,ihe};
