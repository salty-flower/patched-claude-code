// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import"./chunk-dn762950.js";import"./chunk-j27d47mr.js";import"./chunk-ctt36bn8.js";import"./chunk-fcerdfs3.js";import"./chunk-wkmq9ht0.js";import{l}from"./chunk-m1rt7wpr.js";import"./chunk-jtpfgrzr.js";import"./chunk-xgw72tt1.js";import"./chunk-6kc68p18.js";import"./chunk-x0qpydt2.js";import"./chunk-craerjpn.js";import{dxe}from"./chunk-xb9cceab.js";import{St,t}from"./chunk-bd805sh6.js";import"./chunk-24agvrd9.js";import"./chunk-qch5xj2a.js";import"./chunk-etbngzss.js";import"./chunk-s7bhz6qz.js";import{a}from"./chunk-dp4xqs6t.js";import"./chunk-p9frg3mj.js";import"./chunk-kgp7t7yx.js";import"./chunk-04d4ftnx.js";import"./chunk-7mawjt4q.js";import"./chunk-n1z3wrvm.js";import"./chunk-h6pppnx2.js";import"./chunk-w1n7t02f.js";import"./chunk-3fj60qgx.js";import"./chunk-3yz9zdww.js";import{ise,bxe}from"./chunk-d2sd20y7.js";import{$in}from"./chunk-8nfnvtgb.js";import{Ba}from"./chunk-6g4165br.js";import"./chunk-yngqe5v3.js";import"./chunk-nnawdxg4.js";import"./chunk-svqqgdca.js";import"./chunk-m6z3m7rx.js";import"./chunk-79wfew46.js";async function d({sessionId:i,sdkUrl:e}){try{let r=a.CLAUDE_SESSION_INGRESS_TOKEN_FILE??ise;if(!(await Ba(r,bxe))?.trim()){t("[vitals] no session token file on this worker; guest vitals disabled");return}let o=await $in({sessionId:i,apiBaseUrl:dxe(new URL(e)).origin,tokenFilePath:r,binaryResolution:"search",log:t});if(o)St(()=>o.stop())}catch(r){t(`[vitals] not started: ${l(r)}`)}}export{d as startHostedWorkerVitalsEmitter};
