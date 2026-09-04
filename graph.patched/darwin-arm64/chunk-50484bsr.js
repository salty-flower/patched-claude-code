// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{Eie,bx}from"./chunk-ajb75vkj.js";import{a}from"./chunk-g2ngvza5.js";import{Bl}from"./chunk-v3s7w1dm.js";import{AL}from"./chunk-0e339jxb.js";import{h_}from"./chunk-1vdcb6bs.js";import{pE}from"./chunk-mjas5xqd.js";import{Gor}from"./chunk-bqyfk5j4.js";import{hc,Jh,sm,u9t}from"./chunk-5e9qk3ys.js";import{mTt}from"./chunk-2f05fs7x.js";import{g4t}from"./chunk-qhtpcz9a.js";var p=new Set([h_,pE]),T=["subscribe_pr_activity","unsubscribe_pr_activity"];function c(o){return T.some((t)=>o.endsWith(t))}function mZt(o,t){if(t.length===0)return o;let e=t.map((n)=>[n,Bl(n)]),r=o.filter((n)=>!e.some(([l,i])=>sm(n,l,i)));return r.length===o.length?o:r}function f(o){return!1}var s=import.meta.require("./chunk-jhsvw76x.js");function Yhr(o){let t=a.CLAUDE_CODE_BRIEF,e=new Set((process.env.CLAUDE_CODE_COORDINATOR_EXTRA_TOOLS??"").split(",").map((r)=>r.trim()).filter(Boolean));return o.filter((r)=>mTt.has(r.name)||c(r.name)||f(r)||g4t(r)||t&&p.has(r.name)||bx(r,e))}function pWe(o,t,e,r){let[n,l]=AL(u9t(hc([...o,...t],"name"),r),Jh),i=[...l.sort(Eie),...n.sort(Eie)];if(s){if(s.isCoordinatorMode())return Yhr(i)}return i}function fWe(o,t){let e=o.length===1?o[0]:void 0;if(e&&Gor(t,e))return[];return o}
export{mZt,Yhr,pWe,fWe};
