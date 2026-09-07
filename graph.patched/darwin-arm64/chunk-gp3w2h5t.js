// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{xl}from"./chunk-sxccpdbg.js";import{a}from"./chunk-dq2s4wjn.js";import{Vh}from"./chunk-kyxky0qb.js";import{HT}from"./chunk-c8mj69qr.js";import{coe,qk}from"./chunk-3hs7jdtb.js";import{aZn}from"./chunk-fqv2c0zc.js";import{rF,oc,Ch,Gp,X2t}from"./chunk-1692k4g5.js";import{ISt}from"./chunk-2vfkm4wf.js";import{j9t}from"./chunk-339apq7d.js";var p=new Set([Vh,HT]),T=["subscribe_pr_activity","unsubscribe_pr_activity"];function c(o){return T.some((t)=>o.endsWith(t))}function YXt(o,t){if(t.length===0)return o;let e=t.map((n)=>[n,xl(n)]),r=o.filter((n)=>!e.some(([l,i])=>Gp(n,l,i)));return r.length===o.length?o:r}function f(o){return!1}var s=import.meta.require("./chunk-jczajg35.js");function Hlr(o){let t=a.CLAUDE_CODE_BRIEF,e=new Set((process.env.CLAUDE_CODE_COORDINATOR_EXTRA_TOOLS??"").split(",").map((r)=>r.trim()).filter(Boolean));return o.filter((r)=>ISt.has(r.name)||c(r.name)||f(r)||j9t(r)||t&&p.has(r.name)||qk(r,e))}function i6e(o,t,e,r){let[n,l]=rF(X2t(oc([...o,...t],"name"),r),Ch),i=[...l.sort(coe),...n.sort(coe)];if(s){if(s.isCoordinatorMode())return Hlr(i)}return i}function a6e(o,t){let e=o.length===1?o[0]:void 0;if(e&&aZn(t,e))return[];return o}
export{YXt,Hlr,i6e,a6e};
