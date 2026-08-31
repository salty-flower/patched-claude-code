// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{Qne,FC}from"./chunk-aqwdkmxp.js";import{a}from"./chunk-m9gbfvns.js";import{Ul}from"./chunk-kc505vjh.js";import{lb}from"./chunk-4kxavepq.js";import{ZC}from"./chunk-kqhtgdqq.js";import{wht}from"./chunk-vdmasa91.js";import{fu,qy,rg,EBt}from"./chunk-h6btyxas.js";import{wQn}from"./chunk-t0yzptsk.js";import{L2t}from"./chunk-vgmjbtyf.js";import{fD}from"./chunk-peh5tvnh.js";var p=new Set([lb,ZC]),T=["subscribe_pr_activity","unsubscribe_pr_activity"];function c(o){return T.some((t)=>o.endsWith(t))}function W3t(o,t){if(t.length===0)return o;let e=t.map((n)=>[n,Ul(n)]),r=o.filter((n)=>!e.some(([l,i])=>rg(n,l,i)));return r.length===o.length?o:r}function f(o){return!1}var s=import.meta.require("./chunk-jxev94j3.js");function Lcr(o){let t=a.CLAUDE_CODE_BRIEF,e=new Set((process.env.CLAUDE_CODE_COORDINATOR_EXTRA_TOOLS??"").split(",").map((r)=>r.trim()).filter(Boolean));return o.filter((r)=>wht.has(r.name)||c(r.name)||f(r)||L2t(r)||t&&p.has(r.name)||FC(r,e))}function YBe(o,t,e,r){let[n,l]=fD(EBt(fu([...o,...t],"name"),r),qy),i=[...l.sort(Qne),...n.sort(Qne)];if(s){if(s.isCoordinatorMode())return Lcr(i)}return i}function XBe(o,t){let e=o.length===1?o[0]:void 0;if(e&&wQn(t,e))return[];return o}
export{W3t,Lcr,YBe,XBe};
