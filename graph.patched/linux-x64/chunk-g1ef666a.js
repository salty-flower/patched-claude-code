// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import"./chunk-grpzqw3p.js";import"./chunk-8nra9hkj.js";import"./chunk-dxktn51d.js";import"./chunk-6arex0x2.js";import"./chunk-m3epja3j.js";import{d}from"./chunk-ekgz6skk.js";import"./chunk-wk0rbc8w.js";import"./chunk-h9cj3xp8.js";import"./chunk-2fbnw5gg.js";import"./chunk-jbgr14ef.js";import"./chunk-59xd6a0a.js";import"./chunk-bdj2znsb.js";import{YHe}from"./chunk-7gz0pfve.js";import{yt,t}from"./chunk-n5v91jc3.js";import"./chunk-nvrstjfg.js";import"./chunk-nt1g7asm.js";import"./chunk-jkcb7qdd.js";import"./chunk-tbekftmt.js";import"./chunk-pbkqy204.js";import{a}from"./chunk-cd1a8ced.js";import"./chunk-4ccvyrtz.js";import"./chunk-sr4gfmny.js";import"./chunk-yzndvntb.js";import"./chunk-6vj87cqe.js";import"./chunk-bfmjsynp.js";import"./chunk-17mm48r5.js";import"./chunk-tj5qrgvp.js";import"./chunk-6ta41wqs.js";import"./chunk-bjv5j0w5.js";import{kde,rDe}from"./chunk-9449nkm2.js";import{Jbn}from"./chunk-d9mn7rr8.js";import{cl}from"./chunk-rkrydfvk.js";import"./chunk-kcmb4jzj.js";import"./chunk-adkjcqkd.js";import"./chunk-j53prbhv.js";import"./chunk-3pcxq77r.js";async function _({sessionId:i,sdkUrl:e}){try{let r=a.CLAUDE_SESSION_INGRESS_TOKEN_FILE??kde;if(!(await cl(r,rDe))?.trim()){t("[vitals] no session token file on this worker; guest vitals disabled");return}let o=await Jbn({sessionId:i,apiBaseUrl:YHe(new URL(e)).origin,tokenFilePath:r,binaryResolution:"search",log:t});if(o)yt(()=>o.stop())}catch(r){t(`[vitals] not started: ${d(r)}`)}}export{_ as startHostedWorkerVitalsEmitter};
