// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{a}from"./chunk-1bwwmttj.js";import{va}from"./chunk-8fer6cmv.js";import{Ey}from"./chunk-19cvhbkw.js";import{PE}from"./chunk-1j4axej0.js";import{qie,oR}from"./chunk-v87fkm5m.js";import{zcr}from"./chunk-5bk908kr.js";import{KU,vl,Ih,bf,d4t}from"./chunk-2byjyg85.js";import{eAt}from"./chunk-wb09wmfd.js";import{jBe}from"./chunk-5bge1e92.js";var p=new Set([Ey,PE]),T=["subscribe_pr_activity","unsubscribe_pr_activity"];function c(o){return T.some((t)=>o.endsWith(t))}function Mrn(o,t){if(t.length===0)return o;let e=t.map((n)=>[n,va(n)]),r=o.filter((n)=>!e.some(([l,i])=>bf(n,l,i)));return r.length===o.length?o:r}function f(o){return!1}var s=((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-rvbrvgxx.js");function wSr(o){let t=a.CLAUDE_CODE_BRIEF,e=new Set((process.env.CLAUDE_CODE_COORDINATOR_EXTRA_TOOLS??"").split(",").map((r)=>r.trim()).filter(Boolean));return o.filter((r)=>eAt.has(r.name)||c(r.name)||f(r)||jBe(r)||t&&p.has(r.name)||oR(r,e))}function dVe(o,t,e,r){let[n,l]=KU(d4t(vl([...o,...t],"name"),r),Ih),i=[...l.sort(qie),...n.sort(qie)];if(s){if(s.isCoordinatorMode())return wSr(i)}return i}function pVe(o,t){let e=o.length===1?o[0]:void 0;if(e&&zcr(t,e))return[];return o}
export{Mrn,wSr,dVe,pVe};
