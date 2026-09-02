// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import"./chunk-7s3c5qqq.js";import"./chunk-rv2kd9jf.js";import"./chunk-sgsf5yd5.js";import"./chunk-jpen6jwm.js";import{jre}from"./chunk-7vzd1b8s.js";import"./chunk-30zk17wm.js";import"./chunk-asme1eq2.js";import"./chunk-w8ppmegc.js";import{a}from"./chunk-m9gbfvns.js";import"./chunk-d7ejrssq.js";import"./chunk-r1b219q3.js";import{l}from"./chunk-efckqwp7.js";import{kt,n}from"./chunk-d0cr5d2v.js";import"./chunk-bvdq8tnt.js";import"./chunk-764j5mtt.js";import"./chunk-ma4xtxwv.js";import"./chunk-gbq6xyrq.js";import"./chunk-yqfv1yd3.js";import"./chunk-ykrbqs98.js";import"./chunk-q2grjtpb.js";import"./chunk-qd43z1g9.js";import"./chunk-1ttwv9fk.js";import"./chunk-jw46j330.js";import"./chunk-vv42w3zb.js";import{G2,qre}from"./chunk-t1dbt8zk.js";import{xZe}from"./chunk-6sj2x2j1.js";import{tl}from"./chunk-1e5y3pjf.js";import"./chunk-qh4ma7bm.js";import"./chunk-zm2aajcr.js";import"./chunk-7ntmrqet.js";import"./chunk-edxkqkcr.js";import"./chunk-6c8t6gsc.js";import"./chunk-er188mb2.js";async function d({sessionId:o,sdkUrl:i}){try{let t=a.CLAUDE_SESSION_INGRESS_TOKEN_FILE??G2;if(!(await tl(t,qre))?.trim()){n("[vitals] no session token file on this worker; guest vitals disabled");return}let r=await xZe({sessionId:o,apiBaseUrl:jre(new URL(i)).origin,tokenFilePath:t,binaryResolution:"search",log:n});if(r)kt(()=>r.stop())}catch(t){n(`[vitals] not started: ${l(t)}`)}}export{d as startHostedWorkerVitalsEmitter};
