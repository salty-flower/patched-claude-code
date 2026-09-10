// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{a}from"./chunk-dv6tepz3.js";import{Ea}from"./chunk-ysx7ez10.js";import{Cy}from"./chunk-48s4h7y4.js";import{IA}from"./chunk-nh71zkp7.js";import{Zie,cR}from"./chunk-b9rrx1k4.js";import{Tur}from"./chunk-06mxd1fp.js";import{oU,El,Ph,Sf,P4t}from"./chunk-e55d0yhx.js";import{yCt}from"./chunk-0mtkwcqp.js";import{eBe}from"./chunk-08hszdhr.js";var p=new Set([Cy,IA]),T=["subscribe_pr_activity","unsubscribe_pr_activity"];function c(o){return T.some((t)=>o.endsWith(t))}function non(o,t){if(t.length===0)return o;let e=t.map((n)=>[n,Ea(n)]),r=o.filter((n)=>!e.some(([l,i])=>Sf(n,l,i)));return r.length===o.length?o:r}function f(o){return!1}var s=((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-fxvdq5zp.js");function iwr(o){let t=a.CLAUDE_CODE_BRIEF,e=new Set((process.env.CLAUDE_CODE_COORDINATOR_EXTRA_TOOLS??"").split(",").map((r)=>r.trim()).filter(Boolean));return o.filter((r)=>yCt.has(r.name)||c(r.name)||f(r)||eBe(r)||t&&p.has(r.name)||cR(r,e))}function E3e(o,t,e,r){let[n,l]=oU(P4t(El([...o,...t],"name"),r),Ph),i=[...l.sort(Zie),...n.sort(Zie)];if(s){if(s.isCoordinatorMode())return iwr(i)}return i}function A3e(o,t){let e=o.length===1?o[0]:void 0;if(e&&Tur(t,e))return[];return o}
export{non,iwr,E3e,A3e};
