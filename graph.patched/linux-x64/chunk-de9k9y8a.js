// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{l}from"./chunk-cnzbk8gg.js";import{_h}from"./chunk-d3xvzk7s.js";import{t}from"./chunk-847hpqqs.js";import{Ps}from"./chunk-30p0nwys.js";import{kt}from"./chunk-kh3dq6rw.js";import{Fn}from"./chunk-s3hsf7ap.js";import{MOe}from"./chunk-hcsk76yf.js";import{OHe}from"./chunk-v4zgc4qd.js";import{rpe}from"./chunk-mc7b7az9.js";function HAn(e){return`To fix: ${e.webSetupHint?`${e.webSetupHint}, or connect`:"connect"} an account at ${MOe()} \u2014 ${e.rerun} (allow a minute after connecting).`}function rkt(e){return`${e.subject} with the GitHub account connected to your Claude account, and none is connected (or the connection expired). ${HAn(e)}`}function okt(e){let r=e.apostrophe??"'",o=`install the app at ${rpe}`,n=e.webSetupHint,i=n&&e.leadWithWebSetup?`${n}, or ${o}`:`${o}${n?`, or ${n}`:""}`;return`Your connected GitHub account can${r}t see ${e.owner}/${e.name} \u2014 usually the Claude GitHub app isn${r}t installed on ${e.owner} or wasn${r}t granted this repo (web-connected accounts need it for private repos), or a different GitHub account is connected. To fix: ${i} \u2014 ${e.rerun}.`}var b=5000,d=2147483647;async function skt(e,r,o=b){let n={verdict:"inconclusive",httpStatus:null};if(kt()||!Fn())return n;let i=Number.isSafeInteger(o)&&o>0?Math.min(o,d):0;if(i===0)return n;let c=AbortSignal.timeout(i),a=(async()=>{if(await Ps(),c.aborted)return n;let{linkedAccountAccess:s,httpStatus:p}=await OHe(e,r,c);return{verdict:s,httpStatus:p}})(),u=await _h(a,c,()=>Error("budget expired")).catch((s)=>(t(`linked GitHub account access probe gave up, treating as inconclusive: ${l(s)}`),n));return t(`linked GitHub account access to ${e}/${r}: ${u.verdict} (HTTP ${u.httpStatus??"none"})`),u}
export{HAn,rkt,okt,skt};
