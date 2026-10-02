// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import"./chunk-b1a55n2g.js";import"./chunk-fkak21hw.js";import"./chunk-bxhyh54r.js";import"./chunk-k3gp1qmc.js";import"./chunk-aap6zsd0.js";import{l}from"./chunk-vqpmen5t.js";import"./chunk-dmpcy5p5.js";import"./chunk-actz3rxp.js";import"./chunk-v34cw0y6.js";import"./chunk-vtytg7jt.js";import"./chunk-kn03s03j.js";import{P_e}from"./chunk-5d5c7e2g.js";import{_t,t}from"./chunk-055ns4k8.js";import"./chunk-jsyn1gcs.js";import"./chunk-rg63yke9.js";import"./chunk-hjabkkf1.js";import"./chunk-z10rc4tf.js";import"./chunk-qs4mqgaa.js";import{a}from"./chunk-5054mktj.js";import"./chunk-mpc9nxv5.js";import"./chunk-gn6mgw10.js";import"./chunk-dpwtsz9f.js";import"./chunk-39a74rgt.js";import"./chunk-agdg3czn.js";import"./chunk-5cmjjb37.js";import"./chunk-nsz480sc.js";import"./chunk-bgchm1w8.js";import"./chunk-g768q95w.js";import{Zne,D_e}from"./chunk-6vskt3q5.js";import{g2t}from"./chunk-tbf45kar.js";import{ml}from"./chunk-vd01jhy3.js";import"./chunk-2wxbpvj0.js";import"./chunk-n12wgbvr.js";import"./chunk-w7hspz3v.js";async function d({sessionId:i,sdkUrl:e}){try{let r=a.CLAUDE_SESSION_INGRESS_TOKEN_FILE??Zne;if(!(await ml(r,D_e))?.trim()){t("[vitals] no session token file on this worker; guest vitals disabled");return}let o=await g2t({sessionId:i,apiBaseUrl:P_e(new URL(e)).origin,tokenFilePath:r,binaryResolution:"search",log:t});if(o)_t(()=>o.stop())}catch(r){t(`[vitals] not started: ${l(r)}`)}}export{d as startHostedWorkerVitalsEmitter};
