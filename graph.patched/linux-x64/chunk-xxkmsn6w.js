// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import"./chunk-gqqx2ybk.js";import"./chunk-xj8gnzar.js";import"./chunk-kvgzj9kk.js";import{_te}from"./chunk-yvh97n7n.js";import"./chunk-2vv5hpw3.js";import"./chunk-s0y4aasp.js";import"./chunk-k69qdkv1.js";import{a}from"./chunk-g0kfvhx3.js";import"./chunk-hjxpwbhy.js";import"./chunk-gt4btdxr.js";import{l}from"./chunk-7h2h1m4y.js";import{Et,n}from"./chunk-akz0cj0f.js";import"./chunk-qkpfba5t.js";import"./chunk-m09j9ze8.js";import"./chunk-2h7wbm8s.js";import"./chunk-6ce4s97h.js";import"./chunk-s2t7yx8x.js";import"./chunk-cvykgfry.js";import"./chunk-v1ap59a1.js";import"./chunk-j0kxfsn8.js";import"./chunk-ey3r955r.js";import"./chunk-2t5hwcdv.js";import"./chunk-cdpc3se3.js";import"./chunk-6ypvgjr3.js";import"./chunk-n6st122x.js";import{qU,Ate}from"./chunk-tfd4rw1n.js";import{hXe}from"./chunk-ccyqjf5f.js";import{Na}from"./chunk-ns0ekkj0.js";import"./chunk-cj0zmg6k.js";import"./chunk-qfwvs04s.js";import"./chunk-vt29yvxx.js";import"./chunk-f58mzqmc.js";import"./chunk-9q51f9rr.js";async function d({sessionId:o,sdkUrl:i}){try{let t=a.CLAUDE_SESSION_INGRESS_TOKEN_FILE??qU;if(!(await Na(t,Ate))?.trim()){n("[vitals] no session token file on this worker; guest vitals disabled");return}let r=await hXe({sessionId:o,apiBaseUrl:_te(new URL(i)).origin,tokenFilePath:t,binaryResolution:"search",log:n});if(r)Et(()=>r.stop())}catch(t){n(`[vitals] not started: ${l(t)}`)}}export{d as startHostedWorkerVitalsEmitter};
