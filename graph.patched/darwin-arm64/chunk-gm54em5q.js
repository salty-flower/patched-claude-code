// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{koe,ax}from"./chunk-5cn3fpmq.js";import{a}from"./chunk-pv906ex9.js";import{sc}from"./chunk-tgbc60ar.js";import{dL}from"./chunk-3yv85b0k.js";import{d_}from"./chunk-2q2nc49z.js";import{Zw}from"./chunk-gy3td9bv.js";import{jc,zh,om,K6t}from"./chunk-darxmw8c.js";import{ubt}from"./chunk-rmhn6c3w.js";import{Etr}from"./chunk-htp9pxxe.js";import{K3t}from"./chunk-80z15e3z.js";var p=new Set([d_,Zw]),T=["subscribe_pr_activity","unsubscribe_pr_activity"];function c(o){return T.some((t)=>o.endsWith(t))}function YYt(o,t){if(t.length===0)return o;let e=t.map((n)=>[n,sc(n)]),r=o.filter((n)=>!e.some(([l,i])=>om(n,l,i)));return r.length===o.length?o:r}function f(o){return!1}var s=import.meta.require("./chunk-r0wd49h7.js");function yfr(o){let t=a.CLAUDE_CODE_BRIEF,e=new Set((process.env.CLAUDE_CODE_COORDINATOR_EXTRA_TOOLS??"").split(",").map((r)=>r.trim()).filter(Boolean));return o.filter((r)=>ubt.has(r.name)||c(r.name)||f(r)||K3t(r)||t&&p.has(r.name)||ax(r,e))}function I6e(o,t,e,r){let[n,l]=dL(K6t(jc([...o,...t],"name"),r),zh),i=[...l.sort(koe),...n.sort(koe)];if(s){if(s.isCoordinatorMode())return yfr(i)}return i}function P6e(o,t){let e=o.length===1?o[0]:void 0;if(e&&Etr(t,e))return[];return o}
export{YYt,yfr,I6e,P6e};
