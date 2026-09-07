// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{Il}from"./chunk-qyjj7h0q.js";import{a}from"./chunk-td8fcebs.js";import{zh}from"./chunk-pp9fwat1.js";import{Iw}from"./chunk-k45y0n34.js";import{toe,FC}from"./chunk-ns5b1f8h.js";import{EQn}from"./chunk-dvx5jhmp.js";import{KN,sc,Eh,zf,Ijt}from"./chunk-y3swhsrk.js";import{fbt}from"./chunk-rg5vczwj.js";import{Szt}from"./chunk-9yrdpq6e.js";var p=new Set([zh,Iw]),T=["subscribe_pr_activity","unsubscribe_pr_activity"];function c(o){return T.some((t)=>o.endsWith(t))}function TXt(o,t){if(t.length===0)return o;let e=t.map((n)=>[n,Il(n)]),r=o.filter((n)=>!e.some(([l,i])=>zf(n,l,i)));return r.length===o.length?o:r}function f(o){return!1}var s=import.meta.require("./chunk-38yvpt6f.js");function War(o){let t=a.CLAUDE_CODE_BRIEF,e=new Set((process.env.CLAUDE_CODE_COORDINATOR_EXTRA_TOOLS??"").split(",").map((r)=>r.trim()).filter(Boolean));return o.filter((r)=>fbt.has(r.name)||c(r.name)||f(r)||Szt(r)||t&&p.has(r.name)||FC(r,e))}function Yje(o,t,e,r){let[n,l]=KN(Ijt(sc([...o,...t],"name"),r),Eh),i=[...l.sort(toe),...n.sort(toe)];if(s){if(s.isCoordinatorMode())return War(i)}return i}function Xje(o,t){let e=o.length===1?o[0]:void 0;if(e&&EQn(t,e))return[];return o}
export{TXt,War,Yje,Xje};
