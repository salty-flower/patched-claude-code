// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import"./chunk-vpkz5m05.js";import"./chunk-j6bwf1es.js";import"./chunk-n5p9w775.js";import{kte}from"./chunk-7nv8z03d.js";import"./chunk-g4zaymy2.js";import"./chunk-s0y4aasp.js";import"./chunk-0ve316az.js";import{a}from"./chunk-bn8q5mbz.js";import"./chunk-v5t1qnj3.js";import"./chunk-jqgad8sa.js";import{l}from"./chunk-e5bq01yj.js";import{Tt,n}from"./chunk-cmkfpkth.js";import"./chunk-8w8hykva.js";import"./chunk-fnn4jyg7.js";import"./chunk-hp9wjta4.js";import"./chunk-w2hwjymv.js";import"./chunk-s2t7yx8x.js";import"./chunk-3jdapt8v.js";import"./chunk-wx0zfkp2.js";import"./chunk-4p8hs6c2.js";import"./chunk-9qmdhtt2.js";import"./chunk-xv0afvwf.js";import"./chunk-7afycn7k.js";import"./chunk-71nbrcp0.js";import"./chunk-xe7kdqs4.js";import{YB,Rte}from"./chunk-tacdmpjz.js";import{NXe}from"./chunk-vx8n48qj.js";import{Fa}from"./chunk-ghnc2x4f.js";import"./chunk-xajbcgpa.js";import"./chunk-dpbxybt4.js";import"./chunk-8sfg3638.js";import"./chunk-xhxj67xc.js";import"./chunk-9q51f9rr.js";async function d({sessionId:o,sdkUrl:i}){try{let t=a.CLAUDE_SESSION_INGRESS_TOKEN_FILE??YB;if(!(await Fa(t,Rte))?.trim()){n("[vitals] no session token file on this worker; guest vitals disabled");return}let r=await NXe({sessionId:o,apiBaseUrl:kte(new URL(i)).origin,tokenFilePath:t,binaryResolution:"search",log:n});if(r)Tt(()=>r.stop())}catch(t){n(`[vitals] not started: ${l(t)}`)}}export{d as startHostedWorkerVitalsEmitter};
