// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{a}from"./chunk-g0kfvhx3.js";import{_l}from"./chunk-a891q37t.js";import{Hb}from"./chunk-hdxkjmp1.js";import{Y0}from"./chunk-5pf2r3ta.js";import{fpt}from"./chunk-cc17q8y4.js";import{Lee}from"./chunk-tm6zne0x.js";import{$c,cy,Em,GMt}from"./chunk-hrvkymct.js";import{o8n}from"./chunk-zbp1935s.js";import{bNt}from"./chunk-1ycwqn62.js";import{UU}from"./chunk-zpq01mh4.js";var p=new Set([Hb,Y0]),T=["subscribe_pr_activity","unsubscribe_pr_activity"];function c(o){return T.some((t)=>o.endsWith(t))}function w3t(o,t){if(t.length===0)return o;let e=t.map((n)=>[n,_l(n)]),r=o.filter((n)=>!e.some(([l,i])=>Em(n,l,i)));return r.length===o.length?o:r}function f(o){return!1}var s=import.meta.require("./chunk-796twzk2.js");function $tr(o){let t=a.CLAUDE_CODE_BRIEF,e=new Set((process.env.CLAUDE_CODE_COORDINATOR_EXTRA_TOOLS??"").split(",").map((r)=>r.trim()).filter(Boolean));return o.filter((r)=>fpt.has(r.name)||c(r.name)||f(r)||bNt(r)||t&&p.has(r.name)||e.has(r.name))}function o1e(o,t,e,r){let[n,l]=UU(GMt($c([...o,...t],"name"),r),cy),i=[...l.sort(Lee),...n.sort(Lee)];if(s){if(s.isCoordinatorMode())return $tr(i)}return i}function i1e(o,t){let e=o.length===1?o[0]:void 0;if(e&&o8n(t,e))return[];return o}
export{w3t,$tr,o1e,i1e};
