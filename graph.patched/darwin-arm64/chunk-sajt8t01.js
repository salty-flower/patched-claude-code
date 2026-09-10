// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import"./chunk-8yfx63va.js";import"./chunk-0yrss36a.js";import"./chunk-g6gcsnnp.js";import"./chunk-3rs4ng0x.js";import{lee}from"./chunk-hfzdv02p.js";import"./chunk-sgyvc67j.js";import"./chunk-95e36pja.js";import{l}from"./chunk-rgs4nrpq.js";import"./chunk-am8gnetv.js";import{At,t}from"./chunk-wbbe5mtc.js";import"./chunk-kr797g3g.js";import"./chunk-2rebt4am.js";import"./chunk-vp9rx3bq.js";import"./chunk-2c9ntqb3.js";import{a}from"./chunk-dv6tepz3.js";import"./chunk-4thwge0q.js";import"./chunk-z0p50v56.js";import"./chunk-a25t2bvk.js";import"./chunk-8hm57jxw.js";import"./chunk-knxbj6dd.js";import"./chunk-c30w2k35.js";import"./chunk-2q7a31tc.js";import"./chunk-2dxb0egv.js";import{uq,gee}from"./chunk-q8p2ywk2.js";import{Dlt}from"./chunk-dmhsvs1d.js";import{Qi}from"./chunk-e02s7cks.js";import"./chunk-r0enmq3q.js";import"./chunk-pe85fsd6.js";import"./chunk-k42b8hsk.js";import"./chunk-10wetekf.js";async function d({sessionId:i,sdkUrl:e}){try{let r=a.CLAUDE_SESSION_INGRESS_TOKEN_FILE??uq;if(!(await Qi(r,gee))?.trim()){t("[vitals] no session token file on this worker; guest vitals disabled");return}let o=await Dlt({sessionId:i,apiBaseUrl:lee(new URL(e)).origin,tokenFilePath:r,binaryResolution:"search",log:t});if(o)At(()=>o.stop())}catch(r){t(`[vitals] not started: ${l(r)}`)}}export{d as startHostedWorkerVitalsEmitter};
