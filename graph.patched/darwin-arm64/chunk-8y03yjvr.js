// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{tre,Bk}from"./chunk-vb9my8xr.js";import{a}from"./chunk-w3k8bej2.js";import{Ul}from"./chunk-4k4029wq.js";import{lS}from"./chunk-p4ge1s9m.js";import{t0}from"./chunk-t1rb87np.js";import{sht}from"./chunk-2z83fvw5.js";import{pu,K_,rg,E$t}from"./chunk-fy12d89p.js";import{LQn}from"./chunk-9mcb844f.js";import{V6t}from"./chunk-yhdws8bp.js";import{mO}from"./chunk-vrasa60a.js";var p=new Set([lS,t0]),T=["subscribe_pr_activity","unsubscribe_pr_activity"];function c(o){return T.some((t)=>o.endsWith(t))}function VKt(o,t){if(t.length===0)return o;let e=t.map((n)=>[n,Ul(n)]),r=o.filter((n)=>!e.some(([l,i])=>rg(n,l,i)));return r.length===o.length?o:r}function f(o){return!1}var s=import.meta.require("./chunk-qn5m7cx5.js");function Ncr(o){let t=a.CLAUDE_CODE_BRIEF,e=new Set((process.env.CLAUDE_CODE_COORDINATOR_EXTRA_TOOLS??"").split(",").map((r)=>r.trim()).filter(Boolean));return o.filter((r)=>sht.has(r.name)||c(r.name)||f(r)||V6t(r)||t&&p.has(r.name)||Bk(r,e))}function J$e(o,t,e,r){let[n,l]=mO(E$t(pu([...o,...t],"name"),r),K_),i=[...l.sort(tre),...n.sort(tre)];if(s){if(s.isCoordinatorMode())return Ncr(i)}return i}function Q$e(o,t){let e=o.length===1?o[0]:void 0;if(e&&LQn(t,e))return[];return o}
export{VKt,Ncr,J$e,Q$e};
