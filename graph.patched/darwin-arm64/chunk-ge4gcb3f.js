// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{l}from"./chunk-hs50vfa7.js";import{Ap}from"./chunk-jm8r4kd0.js";import{t}from"./chunk-3wz0srxw.js";import{JAe}from"./chunk-thwdrjzh.js";import{Ci}from"./chunk-er6f56rj.js";import{Ct}from"./chunk-zwbw6dvp.js";import{Gn}from"./chunk-ntsbwr3d.js";import{L3e}from"./chunk-gavmxd3c.js";import{vqe}from"./chunk-59zy4j10.js";function Icr(e){return`To fix: ${e.webSetupHint?`${e.webSetupHint}, or connect`:"connect"} an account at ${L3e()} \u2014 ${e.rerun} (allow a minute after connecting).`}function C4t(e){return`${e.subject} with the GitHub account connected to your Claude account, and none is connected (or the connection expired). ${Icr(e)}`}function A4t(e){let r=e.apostrophe??"'",o=`install the app at ${JAe}`,n=e.webSetupHint,i=n&&e.leadWithWebSetup?`${n}, or ${o}`:`${o}${n?`, or ${n}`:""}`;return`Your connected GitHub account can${r}t see ${e.owner}/${e.name} \u2014 usually the Claude GitHub app isn${r}t installed on ${e.owner} or wasn${r}t granted this repo (web-connected accounts need it for private repos), or a different GitHub account is connected. To fix: ${i} \u2014 ${e.rerun}.`}var p=5000,b=2147483647;async function T4t(e,r,o=p){let n={verdict:"inconclusive",httpStatus:null};if(Ct()||!Gn())return n;let i=Number.isSafeInteger(o)&&o>0?Math.min(o,b):0;if(i===0)return n;let c=AbortSignal.timeout(i),a=(async()=>{if(await Ci(),c.aborted)return n;let{linkedAccountAccess:s,httpStatus:d}=await vqe(e,r,c,{resyncUndetermined:!1});return{verdict:s,httpStatus:d}})(),u=await Ap(a,c,()=>Error("budget expired")).catch((s)=>(t(`linked GitHub account access probe gave up, treating as inconclusive: ${l(s)}`),n));return t(`linked GitHub account access to ${e}/${r}: ${u.verdict} (HTTP ${u.httpStatus??"none"})`),u}
export{Icr,C4t,A4t,T4t};
