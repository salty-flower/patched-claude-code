// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{l}from"./chunk-shf1fjz2.js";import{bp}from"./chunk-zr6jq9j9.js";import{t}from"./chunk-wvb0gwjm.js";import{sEe}from"./chunk-fvy502kt.js";import{Ci}from"./chunk-twxt3h9y.js";import{xt}from"./chunk-0dpks9t0.js";import{Bn}from"./chunk-m9hfdm3b.js";import{m6e}from"./chunk-se2bpz2y.js";import{eWe}from"./chunk-h3bc7dkc.js";function bXn(e){return`To fix: ${e.webSetupHint?`${e.webSetupHint}, or connect`:"connect"} an account at ${m6e()} \u2014 ${e.rerun} (allow a minute after connecting).`}function Sjt(e){return`${e.subject} with the GitHub account connected to your Claude account, and none is connected (or the connection expired). ${bXn(e)}`}function bjt(e){let r=e.apostrophe??"'",o=`install the app at ${sEe}`,n=e.webSetupHint,i=n&&e.leadWithWebSetup?`${n}, or ${o}`:`${o}${n?`, or ${n}`:""}`;return`Your connected GitHub account can${r}t see ${e.owner}/${e.name} \u2014 usually the Claude GitHub app isn${r}t installed on ${e.owner} or wasn${r}t granted this repo (web-connected accounts need it for private repos), or a different GitHub account is connected. To fix: ${i} \u2014 ${e.rerun}.`}var b=5000,d=2147483647;async function wjt(e,r,o=b){let n={verdict:"inconclusive",httpStatus:null};if(xt()||!Bn())return n;let i=Number.isSafeInteger(o)&&o>0?Math.min(o,d):0;if(i===0)return n;let c=AbortSignal.timeout(i),a=(async()=>{if(await Ci(),c.aborted)return n;let{linkedAccountAccess:s,httpStatus:p}=await eWe(e,r,c);return{verdict:s,httpStatus:p}})(),u=await bp(a,c,()=>Error("budget expired")).catch((s)=>(t(`linked GitHub account access probe gave up, treating as inconclusive: ${l(s)}`),n));return t(`linked GitHub account access to ${e}/${r}: ${u.verdict} (HTTP ${u.httpStatus??"none"})`),u}
export{bXn,Sjt,bjt,wjt};
