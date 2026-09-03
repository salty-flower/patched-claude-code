// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import"./chunk-5e3knf27.js";import"./chunk-gh3qnpny.js";import"./chunk-2cgtbdj1.js";import"./chunk-88cgz317.js";import{Rie}from"./chunk-pfd7xc5y.js";import"./chunk-hdbxv3pp.js";import"./chunk-ma94d7pd.js";import{l}from"./chunk-pc7b8z35.js";import"./chunk-2avye5sw.js";import{kt,t}from"./chunk-t2jwg94b.js";import"./chunk-2mb81hfz.js";import"./chunk-qkcr56w2.js";import"./chunk-1mtde6n1.js";import"./chunk-ffgkv432.js";import"./chunk-t1t1emvm.js";import{a}from"./chunk-pv906ex9.js";import"./chunk-wv4b4ave.js";import"./chunk-kzyd0fd4.js";import"./chunk-wpdwa7yz.js";import"./chunk-yxmvvxaq.js";import"./chunk-k3mxj323.js";import"./chunk-qw2xqmjm.js";import"./chunk-dqgnfptc.js";import"./chunk-0s8h31st.js";import{eq,fQ}from"./chunk-0g5fhtke.js";import{Prt}from"./chunk-7d0kg9p6.js";import{Da}from"./chunk-h6md7820.js";import"./chunk-1ghtgc3m.js";import"./chunk-bpk2rz0h.js";import"./chunk-gjjv0be0.js";async function d({sessionId:i,sdkUrl:e}){try{let r=a.CLAUDE_SESSION_INGRESS_TOKEN_FILE??eq;if(!(await Da(r,fQ))?.trim()){t("[vitals] no session token file on this worker; guest vitals disabled");return}let o=await Prt({sessionId:i,apiBaseUrl:Rie(new URL(e)).origin,tokenFilePath:r,binaryResolution:"search",log:t});if(o)kt(()=>o.stop())}catch(r){t(`[vitals] not started: ${l(r)}`)}}export{d as startHostedWorkerVitalsEmitter};
