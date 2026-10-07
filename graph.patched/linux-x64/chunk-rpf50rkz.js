// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{l}from"./chunk-fdatg9ax.js";import{hd}from"./chunk-0mwsqxme.js";import{t}from"./chunk-gvn18sr5.js";import{BOe}from"./chunk-14bxfmn3.js";import{ea}from"./chunk-m0sj7y8g.js";import{Rt}from"./chunk-z9b8syjk.js";import{qn}from"./chunk-9dnqpecd.js";import{VQe}from"./chunk-d1wyxgsc.js";import{H9e}from"./chunk-9wqh5j7s.js";function gPr(e){return`To fix: ${e.webSetupHint?`${e.webSetupHint}, or connect`:"connect"} an account at ${VQe()} \u2014 ${e.rerun} (allow a minute after connecting).`}function Cin(e){return`${e.subject} with the GitHub account connected to your Claude account, and none is connected (or the connection expired). ${gPr(e)}`}function Rin(e){let r=e.apostrophe??"'",o=`install the app at ${BOe}`,n=e.webSetupHint,i=n&&e.leadWithWebSetup?`${n}, or ${o}`:`${o}${n?`, or ${n}`:""}`;return`Your connected GitHub account can${r}t see ${e.owner}/${e.name} \u2014 usually the Claude GitHub app isn${r}t installed on ${e.owner} or wasn${r}t granted this repo (web-connected accounts need it for private repos), or a different GitHub account is connected. To fix: ${i} \u2014 ${e.rerun}.`}var p=5000,b=2147483647;async function xin(e,r,o=p){let n={verdict:"inconclusive",httpStatus:null};if(Rt()||!qn())return n;let i=Number.isSafeInteger(o)&&o>0?Math.min(o,b):0;if(i===0)return n;let c=AbortSignal.timeout(i),a=(async()=>{if(await ea(),c.aborted)return n;let{linkedAccountAccess:s,httpStatus:d}=await H9e(e,r,c,{resyncUndetermined:!1});return{verdict:s,httpStatus:d}})(),u=await hd(a,c,()=>Error("budget expired")).catch((s)=>(t(`linked GitHub account access probe gave up, treating as inconclusive: ${l(s)}`),n));return t(`linked GitHub account access to ${e}/${r}: ${u.verdict} (HTTP ${u.httpStatus??"none"})`),u}
export{gPr,Cin,Rin,xin};
