// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{a}from"./chunk-bn8q5mbz.js";import{_l}from"./chunk-2694tw3t.js";import{k_}from"./chunk-pp925av2.js";import{J0}from"./chunk-m7fp9j7m.js";import{Fpt}from"./chunk-8zcq0330.js";import{Mee}from"./chunk-p24f2xe3.js";import{Nc,uy,Tm,qLt}from"./chunk-j5h9ds58.js";import{a8n}from"./chunk-dsq3dn3b.js";import{GFt}from"./chunk-b02cy57a.js";import{qB}from"./chunk-p7kxsn0n.js";var p=new Set([k_,J0]),T=["subscribe_pr_activity","unsubscribe_pr_activity"];function c(o){return T.some((t)=>o.endsWith(t))}function CWt(o,t){if(t.length===0)return o;let e=t.map((n)=>[n,_l(n)]),r=o.filter((n)=>!e.some(([l,i])=>Tm(n,l,i)));return r.length===o.length?o:r}function f(o){return!1}var s=import.meta.require("./chunk-9brvxezf.js");function Vtr(o){let t=a.CLAUDE_CODE_BRIEF,e=new Set((process.env.CLAUDE_CODE_COORDINATOR_EXTRA_TOOLS??"").split(",").map((r)=>r.trim()).filter(Boolean));return o.filter((r)=>Fpt.has(r.name)||c(r.name)||f(r)||GFt(r)||t&&p.has(r.name)||e.has(r.name))}function iNe(o,t,e,r){let[n,l]=qB(qLt(Nc([...o,...t],"name"),r),uy),i=[...l.sort(Mee),...n.sort(Mee)];if(s){if(s.isCoordinatorMode())return Vtr(i)}return i}function sNe(o,t){let e=o.length===1?o[0]:void 0;if(e&&a8n(t,e))return[];return o}
export{CWt,Vtr,iNe,sNe};
