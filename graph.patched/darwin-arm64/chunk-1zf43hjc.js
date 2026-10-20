// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{d}from"./chunk-nre716m4.js";import{Fi}from"./chunk-2ckwvz0j.js";import{t}from"./chunk-tdxkq523.js";import{Mje}from"./chunk-jpy8f64h.js";import{ba}from"./chunk-bvn0epzr.js";import{Ct}from"./chunk-277zhca1.js";import{Xn}from"./chunk-gsezw0ay.js";import{tft}from"./chunk-38vk48sj.js";import{b5e}from"./chunk-na9nw575.js";function uro(e){return`To fix: ${e.webSetupHint?`${e.webSetupHint}, or connect`:"connect"} an account at ${tft()} \u2014 ${e.rerun} (allow a minute after connecting).`}function BPn(e){return`${e.subject} with the GitHub account connected to your Claude account, and none is connected (or the connection expired). ${uro(e)}`}function jPn(e){let r=e.apostrophe??"'",o=`install the app at ${Mje}`,n=e.webSetupHint,i=n&&e.leadWithWebSetup?`${n}, or ${o}`:`${o}${n?`, or ${n}`:""}`;return`Your connected GitHub account can${r}t see ${e.owner}/${e.name} \u2014 usually the Claude GitHub app isn${r}t installed on ${e.owner} or wasn${r}t granted this repo (web-connected accounts need it for private repos), or a different GitHub account is connected. To fix: ${i} \u2014 ${e.rerun}.`}var b=5000,l=2147483647;async function WPn(e,r,o=b){let n={verdict:"inconclusive",httpStatus:null};if(Ct()||!Xn())return n;let i=Number.isSafeInteger(o)&&o>0?Math.min(o,l):0;if(i===0)return n;let c=AbortSignal.timeout(i),a=(async()=>{if(await ba(),c.aborted)return n;let{linkedAccountAccess:s,httpStatus:p}=await b5e(e,r,c,{resyncUndetermined:!1});return{verdict:s,httpStatus:p}})(),u=await Fi(a,c,()=>Error("budget expired")).catch((s)=>(t(`linked GitHub account access probe gave up, treating as inconclusive: ${d(s)}`),n));return t(`linked GitHub account access to ${e}/${r}: ${u.verdict} (HTTP ${u.httpStatus??"none"})`),u}
export{uro,BPn,jPn,WPn};
