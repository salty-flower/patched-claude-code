// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import"./chunk-3k7pa7mk.js";import"./chunk-awrvr02y.js";import"./chunk-3kadfzjs.js";import"./chunk-jww0ztav.js";import{jZ}from"./chunk-hndhb8as.js";import"./chunk-cet8na02.js";import"./chunk-wmtek349.js";import{l}from"./chunk-wkyng8j1.js";import"./chunk-jxvdfgn0.js";import{Et,t}from"./chunk-w930ag8r.js";import"./chunk-fz55wskw.js";import"./chunk-0v0wzs89.js";import"./chunk-e0gvmsm3.js";import"./chunk-7tpgnqqk.js";import"./chunk-w6n61axt.js";import{a}from"./chunk-qymratxs.js";import"./chunk-554z0m6d.js";import"./chunk-mx473n83.js";import"./chunk-qc0xda2j.js";import"./chunk-2rwvzqjc.js";import"./chunk-2e3zzta4.js";import"./chunk-2kk5r9ez.js";import"./chunk-1rwk4zv5.js";import"./chunk-v6bnm6m1.js";import{z4,VZ}from"./chunk-93ete5jm.js";import{tat}from"./chunk-00m6fqwk.js";import{qi}from"./chunk-vryy7b5x.js";import"./chunk-c7cjjpnh.js";import"./chunk-m13zrw5b.js";import"./chunk-5c50n20w.js";import"./chunk-5dnafksn.js";async function d({sessionId:i,sdkUrl:e}){try{let r=a.CLAUDE_SESSION_INGRESS_TOKEN_FILE??z4;if(!(await qi(r,VZ))?.trim()){t("[vitals] no session token file on this worker; guest vitals disabled");return}let o=await tat({sessionId:i,apiBaseUrl:jZ(new URL(e)).origin,tokenFilePath:r,binaryResolution:"search",log:t});if(o)Et(()=>o.stop())}catch(r){t(`[vitals] not started: ${l(r)}`)}}export{d as startHostedWorkerVitalsEmitter};
