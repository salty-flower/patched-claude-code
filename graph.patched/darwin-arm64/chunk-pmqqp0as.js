// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import"./chunk-h4q6j5r2.js";import"./chunk-p3vjhzt0.js";import"./chunk-ty218y69.js";import"./chunk-2b9rpf69.js";import{KQ}from"./chunk-7736psqb.js";import"./chunk-yhfssb7x.js";import"./chunk-0xdcm8sp.js";import{l}from"./chunk-dsb06hq9.js";import"./chunk-g1553wr3.js";import{vt,t}from"./chunk-84crg0gy.js";import"./chunk-8nmvz1t1.js";import"./chunk-y5gt0775.js";import"./chunk-jx9d5yeb.js";import"./chunk-55w4bsdv.js";import"./chunk-rk5fkewn.js";import{a}from"./chunk-g2ngvza5.js";import"./chunk-ck0tqv1m.js";import"./chunk-v5cr82c7.js";import"./chunk-tfyzvdvk.js";import"./chunk-zjdr02g2.js";import"./chunk-dmh8g72f.js";import"./chunk-pdyrv9q9.js";import"./chunk-9wz4jqcb.js";import"./chunk-h9sag63s.js";import{Oq,YQ}from"./chunk-z72ykb7t.js";import{Not}from"./chunk-sy9z4b1n.js";import{Fa}from"./chunk-vtwn1md5.js";import"./chunk-sa53evyh.js";import"./chunk-c77g0aqc.js";import"./chunk-fgjq2155.js";async function d({sessionId:i,sdkUrl:e}){try{let r=a.CLAUDE_SESSION_INGRESS_TOKEN_FILE??Oq;if(!(await Fa(r,YQ))?.trim()){t("[vitals] no session token file on this worker; guest vitals disabled");return}let o=await Not({sessionId:i,apiBaseUrl:KQ(new URL(e)).origin,tokenFilePath:r,binaryResolution:"search",log:t});if(o)vt(()=>o.stop())}catch(r){t(`[vitals] not started: ${l(r)}`)}}export{d as startHostedWorkerVitalsEmitter};
