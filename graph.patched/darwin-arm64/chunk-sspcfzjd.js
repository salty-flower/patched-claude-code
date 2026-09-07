// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import"./chunk-fkz3e4t3.js";import"./chunk-r5q3158s.js";import"./chunk-4rr1ghkj.js";import"./chunk-9g7wf9qr.js";import{MJ}from"./chunk-6pky15m5.js";import"./chunk-zhtwayh2.js";import"./chunk-7wmynp0n.js";import{l}from"./chunk-084v19yj.js";import"./chunk-gnrvsty9.js";import{Tt,t}from"./chunk-5q90j22t.js";import"./chunk-643msr15.js";import"./chunk-j317bre5.js";import"./chunk-c5ajdz5z.js";import"./chunk-3qjd0g3g.js";import"./chunk-h7ha2q61.js";import{a}from"./chunk-dq2s4wjn.js";import"./chunk-f2w14jf7.js";import"./chunk-vtd04czk.js";import"./chunk-m0jywms0.js";import"./chunk-hzsc62cn.js";import"./chunk-rm74k23p.js";import"./chunk-rbvf4vfx.js";import"./chunk-jy0p4wg8.js";import"./chunk-3pft38xm.js";import{qG,UJ}from"./chunk-q3h60esw.js";import{ert}from"./chunk-c9gbvzat.js";import{Bi}from"./chunk-n495pc0t.js";import"./chunk-j9kep6b4.js";import"./chunk-00fsqktf.js";import"./chunk-hv9s9qdn.js";import"./chunk-s37nbkm2.js";async function d({sessionId:i,sdkUrl:e}){try{let r=a.CLAUDE_SESSION_INGRESS_TOKEN_FILE??qG;if(!(await Bi(r,UJ))?.trim()){t("[vitals] no session token file on this worker; guest vitals disabled");return}let o=await ert({sessionId:i,apiBaseUrl:MJ(new URL(e)).origin,tokenFilePath:r,binaryResolution:"search",log:t});if(o)Tt(()=>o.stop())}catch(r){t(`[vitals] not started: ${l(r)}`)}}export{d as startHostedWorkerVitalsEmitter};
