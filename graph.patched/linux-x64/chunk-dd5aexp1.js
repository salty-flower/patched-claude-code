// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{d}from"./chunk-w7m8nded.js";import{ya}from"./chunk-r2xfgg0x.js";import{t}from"./chunk-cwsn6mdf.js";import{nBe}from"./chunk-6mtv34pd.js";import{fa}from"./chunk-k16gymf7.js";import{Ct}from"./chunk-9pt2nr7j.js";import{Xn}from"./chunk-kmgwwaz2.js";import{Sdt}from"./chunk-s1wsy1xf.js";import{Fit}from"./chunk-38nf1dnm.js";function x8r(e){return`To fix: ${e.webSetupHint?`${e.webSetupHint}, or connect`:"connect"} an account at ${Sdt()} \u2014 ${e.rerun} (allow a minute after connecting).`}function JTn(e){return`${e.subject} with the GitHub account connected to your Claude account, and none is connected (or the connection expired). ${x8r(e)}`}function QTn(e){let r=e.apostrophe??"'",o=`install the app at ${nBe}`,n=e.webSetupHint,i=n&&e.leadWithWebSetup?`${n}, or ${o}`:`${o}${n?`, or ${n}`:""}`;return`Your connected GitHub account can${r}t see ${e.owner}/${e.name} \u2014 usually the Claude GitHub app isn${r}t installed on ${e.owner} or wasn${r}t granted this repo (web-connected accounts need it for private repos), or a different GitHub account is connected. To fix: ${i} \u2014 ${e.rerun}.`}var b=5000,l=2147483647;async function ZTn(e,r,o=b){let n={verdict:"inconclusive",httpStatus:null};if(Ct()||!Xn())return n;let i=Number.isSafeInteger(o)&&o>0?Math.min(o,l):0;if(i===0)return n;let c=AbortSignal.timeout(i),a=(async()=>{if(await fa(),c.aborted)return n;let{linkedAccountAccess:s,httpStatus:p}=await Fit(e,r,c,{resyncUndetermined:!1});return{verdict:s,httpStatus:p}})(),u=await ya(a,c,()=>Error("budget expired")).catch((s)=>(t(`linked GitHub account access probe gave up, treating as inconclusive: ${d(s)}`),n));return t(`linked GitHub account access to ${e}/${r}: ${u.verdict} (HTTP ${u.httpStatus??"none"})`),u}
export{x8r,JTn,QTn,ZTn};
