// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{d}from"./chunk-wkh5syvr.js";import{ya}from"./chunk-54xe5s81.js";import{t}from"./chunk-bnfhb7sj.js";import{p1e}from"./chunk-01xbr7dc.js";import{fa}from"./chunk-1901fdh6.js";import{Tt}from"./chunk-e666gr8q.js";import{Xn}from"./chunk-nvk7bh0e.js";import{Rdt}from"./chunk-gdffys70.js";import{qit}from"./chunk-996thspe.js";function oYr(e){return`To fix: ${e.webSetupHint?`${e.webSetupHint}, or connect`:"connect"} an account at ${Rdt()} \u2014 ${e.rerun} (allow a minute after connecting).`}function hAn(e){return`${e.subject} with the GitHub account connected to your Claude account, and none is connected (or the connection expired). ${oYr(e)}`}function yAn(e){let r=e.apostrophe??"'",o=`install the app at ${p1e}`,n=e.webSetupHint,i=n&&e.leadWithWebSetup?`${n}, or ${o}`:`${o}${n?`, or ${n}`:""}`;return`Your connected GitHub account can${r}t see ${e.owner}/${e.name} \u2014 usually the Claude GitHub app isn${r}t installed on ${e.owner} or wasn${r}t granted this repo (web-connected accounts need it for private repos), or a different GitHub account is connected. To fix: ${i} \u2014 ${e.rerun}.`}var b=5000,l=2147483647;async function _An(e,r,o=b){let n={verdict:"inconclusive",httpStatus:null};if(Tt()||!Xn())return n;let i=Number.isSafeInteger(o)&&o>0?Math.min(o,l):0;if(i===0)return n;let c=AbortSignal.timeout(i),a=(async()=>{if(await fa(),c.aborted)return n;let{linkedAccountAccess:s,httpStatus:p}=await qit(e,r,c,{resyncUndetermined:!1});return{verdict:s,httpStatus:p}})(),u=await ya(a,c,()=>Error("budget expired")).catch((s)=>(t(`linked GitHub account access probe gave up, treating as inconclusive: ${d(s)}`),n));return t(`linked GitHub account access to ${e}/${r}: ${u.verdict} (HTTP ${u.httpStatus??"none"})`),u}
export{oYr,hAn,yAn,_An};
