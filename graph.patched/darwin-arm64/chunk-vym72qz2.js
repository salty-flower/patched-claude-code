// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{l}from"./chunk-fqsygynq.js";import{hd}from"./chunk-ws170zqm.js";import{t}from"./chunk-f8eqwxpt.js";import{ZOe}from"./chunk-pmxf91wy.js";import{ea}from"./chunk-s46qgfx7.js";import{Rt}from"./chunk-qfs4y3ww.js";import{Vn}from"./chunk-sac2pmqn.js";import{tQe}from"./chunk-ak183zwq.js";import{jYe}from"./chunk-y0b3kvx1.js";function WPr(e){return`To fix: ${e.webSetupHint?`${e.webSetupHint}, or connect`:"connect"} an account at ${tQe()} \u2014 ${e.rerun} (allow a minute after connecting).`}function Vin(e){return`${e.subject} with the GitHub account connected to your Claude account, and none is connected (or the connection expired). ${WPr(e)}`}function qin(e){let r=e.apostrophe??"'",o=`install the app at ${ZOe}`,n=e.webSetupHint,i=n&&e.leadWithWebSetup?`${n}, or ${o}`:`${o}${n?`, or ${n}`:""}`;return`Your connected GitHub account can${r}t see ${e.owner}/${e.name} \u2014 usually the Claude GitHub app isn${r}t installed on ${e.owner} or wasn${r}t granted this repo (web-connected accounts need it for private repos), or a different GitHub account is connected. To fix: ${i} \u2014 ${e.rerun}.`}var p=5000,b=2147483647;async function Kin(e,r,o=p){let n={verdict:"inconclusive",httpStatus:null};if(Rt()||!Vn())return n;let i=Number.isSafeInteger(o)&&o>0?Math.min(o,b):0;if(i===0)return n;let c=AbortSignal.timeout(i),a=(async()=>{if(await ea(),c.aborted)return n;let{linkedAccountAccess:s,httpStatus:d}=await jYe(e,r,c,{resyncUndetermined:!1});return{verdict:s,httpStatus:d}})(),u=await hd(a,c,()=>Error("budget expired")).catch((s)=>(t(`linked GitHub account access probe gave up, treating as inconclusive: ${l(s)}`),n));return t(`linked GitHub account access to ${e}/${r}: ${u.verdict} (HTTP ${u.httpStatus??"none"})`),u}
export{WPr,Vin,qin,Kin};
