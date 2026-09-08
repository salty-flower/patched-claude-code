// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import"./chunk-8a7jwk3w.js";import"./chunk-r8601mcq.js";import"./chunk-jmxayrtv.js";import"./chunk-1p8thh7t.js";import{hQ}from"./chunk-9ep9p4b1.js";import"./chunk-k6vqz9fa.js";import"./chunk-m3vzz9tz.js";import{l}from"./chunk-06whp1c5.js";import"./chunk-1m0n2kwr.js";import{Et,n}from"./chunk-mh9y4c2z.js";import"./chunk-w8jp0t25.js";import"./chunk-kqpqzcmv.js";import"./chunk-r1xh498w.js";import"./chunk-78nzsrc6.js";import"./chunk-yqdggex4.js";import{a}from"./chunk-bxegdt3f.js";import"./chunk-0d0nn4ae.js";import"./chunk-y9tkdj4c.js";import"./chunk-9c9242q9.js";import"./chunk-j44ptfw0.js";import"./chunk-v916jarm.js";import"./chunk-kxdybkam.js";import"./chunk-k9hc9pe5.js";import"./chunk-55s6k4f0.js";import{hK,_Q}from"./chunk-3ec9hd6z.js";import{lot}from"./chunk-y5rqr5a1.js";import{Gi}from"./chunk-32f2qmtc.js";import"./chunk-pb41yc27.js";import"./chunk-rpnwkr8a.js";import"./chunk-aedbr8zd.js";import"./chunk-vmja0gjy.js";async function d({sessionId:o,sdkUrl:i}){try{let t=a.CLAUDE_SESSION_INGRESS_TOKEN_FILE??hK;if(!(await Gi(t,_Q))?.trim()){n("[vitals] no session token file on this worker; guest vitals disabled");return}let r=await lot({sessionId:o,apiBaseUrl:hQ(new URL(i)).origin,tokenFilePath:t,binaryResolution:"search",log:n});if(r)Et(()=>r.stop())}catch(t){n(`[vitals] not started: ${l(t)}`)}}export{d as startHostedWorkerVitalsEmitter};
