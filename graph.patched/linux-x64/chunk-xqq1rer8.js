// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{l}from"./chunk-5g6j8x8p.js";import{xl}from"./chunk-670y7hd9.js";import{t}from"./chunk-p46wpkfz.js";import{YHe}from"./chunk-f25p6k3h.js";import{Di}from"./chunk-cxjvwxsa.js";import{Ct}from"./chunk-3s94kw4m.js";import{Kn}from"./chunk-942093b7.js";import{ett}from"./chunk-w4zhc38k.js";import{OQe}from"./chunk-g263vvvn.js";function FLr(e){return`To fix: ${e.webSetupHint?`${e.webSetupHint}, or connect`:"connect"} an account at ${ett()} \u2014 ${e.rerun} (allow a minute after connecting).`}function Xdn(e){return`${e.subject} with the GitHub account connected to your Claude account, and none is connected (or the connection expired). ${FLr(e)}`}function Jdn(e){let r=e.apostrophe??"'",o=`install the app at ${YHe}`,n=e.webSetupHint,i=n&&e.leadWithWebSetup?`${n}, or ${o}`:`${o}${n?`, or ${n}`:""}`;return`Your connected GitHub account can${r}t see ${e.owner}/${e.name} \u2014 usually the Claude GitHub app isn${r}t installed on ${e.owner} or wasn${r}t granted this repo (web-connected accounts need it for private repos), or a different GitHub account is connected. To fix: ${i} \u2014 ${e.rerun}.`}var p=5000,b=2147483647;async function Qdn(e,r,o=p){let n={verdict:"inconclusive",httpStatus:null};if(Ct()||!Kn())return n;let i=Number.isSafeInteger(o)&&o>0?Math.min(o,b):0;if(i===0)return n;let c=AbortSignal.timeout(i),a=(async()=>{if(await Di(),c.aborted)return n;let{linkedAccountAccess:s,httpStatus:d}=await OQe(e,r,c,{resyncUndetermined:!1});return{verdict:s,httpStatus:d}})(),u=await xl(a,c,()=>Error("budget expired")).catch((s)=>(t(`linked GitHub account access probe gave up, treating as inconclusive: ${l(s)}`),n));return t(`linked GitHub account access to ${e}/${r}: ${u.verdict} (HTTP ${u.httpStatus??"none"})`),u}
export{FLr,Xdn,Jdn,Qdn};
