// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import"./chunk-mnk1rjxv.js";import"./chunk-3whp6z2x.js";import"./chunk-e1n9j4jc.js";import"./chunk-hpnksvcw.js";import{I7}from"./chunk-nfmdzyhb.js";import"./chunk-bj7g1p32.js";import"./chunk-h9wtyp3p.js";import{l}from"./chunk-7s5qs9ea.js";import"./chunk-vx4qhc14.js";import{At,t}from"./chunk-1tk5haqn.js";import"./chunk-mzzfzvay.js";import"./chunk-hvf4zpd9.js";import"./chunk-9g6v0ehs.js";import"./chunk-3qjd0g3g.js";import"./chunk-efxr56q3.js";import{a}from"./chunk-td8fcebs.js";import"./chunk-f2w14jf7.js";import"./chunk-skkcgpsw.js";import"./chunk-c3bfg9kw.js";import"./chunk-cve7w72k.js";import"./chunk-dbn6fdze.js";import"./chunk-8mc66c3x.js";import"./chunk-q0tfnkyx.js";import"./chunk-4c106gcs.js";import{Dq,P7}from"./chunk-2benbg1m.js";import{mnt}from"./chunk-j34kggdg.js";import{Ui}from"./chunk-3e93vkg3.js";import"./chunk-sqdvc1yq.js";import"./chunk-429awvea.js";import"./chunk-s0y0sg0y.js";import"./chunk-y7bjs1t6.js";async function d({sessionId:i,sdkUrl:e}){try{let r=a.CLAUDE_SESSION_INGRESS_TOKEN_FILE??Dq;if(!(await Ui(r,P7))?.trim()){t("[vitals] no session token file on this worker; guest vitals disabled");return}let o=await mnt({sessionId:i,apiBaseUrl:I7(new URL(e)).origin,tokenFilePath:r,binaryResolution:"search",log:t});if(o)At(()=>o.stop())}catch(r){t(`[vitals] not started: ${l(r)}`)}}export{d as startHostedWorkerVitalsEmitter};
