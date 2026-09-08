// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import"./chunk-207999qb.js";import"./chunk-510m1t2d.js";import"./chunk-5ndhfaq9.js";import"./chunk-9g2q4bjq.js";import{bQ}from"./chunk-wk0e3dz4.js";import"./chunk-2x3q7cfh.js";import"./chunk-h62vxw7j.js";import{l}from"./chunk-h4f48kbj.js";import"./chunk-w76kejwn.js";import{Et,n}from"./chunk-38sny42z.js";import"./chunk-z5vtnzjg.js";import"./chunk-1wezmyx2.js";import"./chunk-27ncq5fr.js";import"./chunk-78nzsrc6.js";import"./chunk-3g334xwq.js";import{a}from"./chunk-zqr5ctyf.js";import"./chunk-0d0nn4ae.js";import"./chunk-an83zrbx.js";import"./chunk-0vqzb8ad.js";import"./chunk-rsr7cnyv.js";import"./chunk-h64ek850.js";import"./chunk-twnwwsbr.js";import"./chunk-fx8qr1md.js";import"./chunk-mkmy4cx2.js";import{Rq,AQ}from"./chunk-7rf7w8yf.js";import{Kot}from"./chunk-t1eaahr7.js";import{Wi}from"./chunk-419zdfz3.js";import"./chunk-a7cfts2d.js";import"./chunk-qng0dgw4.js";import"./chunk-8crev50p.js";import"./chunk-13kdp2ag.js";async function d({sessionId:o,sdkUrl:i}){try{let t=a.CLAUDE_SESSION_INGRESS_TOKEN_FILE??Rq;if(!(await Wi(t,AQ))?.trim()){n("[vitals] no session token file on this worker; guest vitals disabled");return}let r=await Kot({sessionId:o,apiBaseUrl:bQ(new URL(i)).origin,tokenFilePath:t,binaryResolution:"search",log:n});if(r)Et(()=>r.stop())}catch(t){n(`[vitals] not started: ${l(t)}`)}}export{d as startHostedWorkerVitalsEmitter};
