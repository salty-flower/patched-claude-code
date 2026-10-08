// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{l}from"./chunk-tnh13g2g.js";import{Pl}from"./chunk-k2e8p61g.js";import{t}from"./chunk-b5feae42.js";import{lMe}from"./chunk-9zy54rm4.js";import{Li}from"./chunk-gcyvvtkw.js";import{Tt}from"./chunk-tdmgys2e.js";import{Kn}from"./chunk-fsnz81vy.js";import{ltt}from"./chunk-x536f8wy.js";import{UJe}from"./chunk-nwqfvmza.js";function fNr(e){return`To fix: ${e.webSetupHint?`${e.webSetupHint}, or connect`:"connect"} an account at ${ltt()} \u2014 ${e.rerun} (allow a minute after connecting).`}function gun(e){return`${e.subject} with the GitHub account connected to your Claude account, and none is connected (or the connection expired). ${fNr(e)}`}function hun(e){let r=e.apostrophe??"'",o=`install the app at ${lMe}`,n=e.webSetupHint,i=n&&e.leadWithWebSetup?`${n}, or ${o}`:`${o}${n?`, or ${n}`:""}`;return`Your connected GitHub account can${r}t see ${e.owner}/${e.name} \u2014 usually the Claude GitHub app isn${r}t installed on ${e.owner} or wasn${r}t granted this repo (web-connected accounts need it for private repos), or a different GitHub account is connected. To fix: ${i} \u2014 ${e.rerun}.`}var p=5000,b=2147483647;async function yun(e,r,o=p){let n={verdict:"inconclusive",httpStatus:null};if(Tt()||!Kn())return n;let i=Number.isSafeInteger(o)&&o>0?Math.min(o,b):0;if(i===0)return n;let c=AbortSignal.timeout(i),a=(async()=>{if(await Li(),c.aborted)return n;let{linkedAccountAccess:s,httpStatus:d}=await UJe(e,r,c,{resyncUndetermined:!1});return{verdict:s,httpStatus:d}})(),u=await Pl(a,c,()=>Error("budget expired")).catch((s)=>(t(`linked GitHub account access probe gave up, treating as inconclusive: ${l(s)}`),n));return t(`linked GitHub account access to ${e}/${r}: ${u.verdict} (HTTP ${u.httpStatus??"none"})`),u}
export{fNr,gun,hun,yun};
