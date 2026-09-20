// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import"./chunk-sgamszzq.js";import"./chunk-vx7e38ke.js";import"./chunk-n93bke93.js";import"./chunk-q2h0fawe.js";import"./chunk-jxdnn2j1.js";import"./chunk-tq3ft6e6.js";import{Sse}from"./chunk-vwjr2pkc.js";import{l}from"./chunk-qq9jq5dz.js";import"./chunk-k6smmjsm.js";import{Ct,t}from"./chunk-qmm87fyw.js";import"./chunk-pfxvy4ay.js";import"./chunk-vzm3bfp5.js";import"./chunk-67jj8qay.js";import"./chunk-7greh2d8.js";import{a}from"./chunk-wkhfcbsj.js";import"./chunk-1cx6bcw0.js";import"./chunk-jxv3x25k.js";import"./chunk-4akrhkry.js";import"./chunk-033exrv9.js";import"./chunk-83fmeatd.js";import"./chunk-n21rqdv9.js";import"./chunk-hxqyqnkp.js";import"./chunk-rffpe63a.js";import{z5,Ase}from"./chunk-brxrr15j.js";import{QSt}from"./chunk-e4hacnmx.js";import{Oa}from"./chunk-g4c6ggz4.js";import"./chunk-8g5d5rrv.js";import"./chunk-jm8tf5gf.js";import"./chunk-686wm7s6.js";async function d({sessionId:i,sdkUrl:e}){try{let r=a.CLAUDE_SESSION_INGRESS_TOKEN_FILE??z5;if(!(await Oa(r,Ase))?.trim()){t("[vitals] no session token file on this worker; guest vitals disabled");return}let o=await QSt({sessionId:i,apiBaseUrl:Sse(new URL(e)).origin,tokenFilePath:r,binaryResolution:"search",log:t});if(o)Ct(()=>o.stop())}catch(r){t(`[vitals] not started: ${l(r)}`)}}export{d as startHostedWorkerVitalsEmitter};
