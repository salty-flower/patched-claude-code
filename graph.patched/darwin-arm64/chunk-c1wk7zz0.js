// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{a}from"./chunk-qymratxs.js";import{ya}from"./chunk-1qb0n0qf.js";import{Sy}from"./chunk-jh9jc98c.js";import{_A}from"./chunk-d7xqqjds.js";import{yie,Yk}from"./chunk-4sa61azs.js";import{mar}from"./chunk-f2pbqezq.js";import{N$,Ol,Eh,gf,R3t}from"./chunk-tavwd3sq.js";import{IAt}from"./chunk-gv4rx3xv.js";import{H$e}from"./chunk-9w0hcxvy.js";var p=new Set([Sy,_A]),T=["subscribe_pr_activity","unsubscribe_pr_activity"];function c(o){return T.some((t)=>o.endsWith(t))}function Ktn(o,t){if(t.length===0)return o;let e=t.map((n)=>[n,ya(n)]),r=o.filter((n)=>!e.some(([l,i])=>gf(n,l,i)));return r.length===o.length?o:r}function f(o){return!1}var s=((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-3j7swk5d.js");function cyr(o){let t=a.CLAUDE_CODE_BRIEF,e=new Set((process.env.CLAUDE_CODE_COORDINATOR_EXTRA_TOOLS??"").split(",").map((r)=>r.trim()).filter(Boolean));return o.filter((r)=>IAt.has(r.name)||c(r.name)||f(r)||H$e(r)||t&&p.has(r.name)||Yk(r,e))}function Jze(o,t,e,r){let[n,l]=N$(R3t(Ol([...o,...t],"name"),r),Eh),i=[...l.sort(yie),...n.sort(yie)];if(s){if(s.isCoordinatorMode())return cyr(i)}return i}function Qze(o,t){let e=o.length===1?o[0]:void 0;if(e&&mar(t,e))return[];return o}
export{Ktn,cyr,Jze,Qze};
