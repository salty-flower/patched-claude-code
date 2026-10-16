// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import"./chunk-bfqfmbd0.js";import"./chunk-rs6p8dg3.js";import"./chunk-eqmywwjn.js";import"./chunk-qeqy4res.js";import"./chunk-fr28a3he.js";import{d}from"./chunk-w7m8nded.js";import"./chunk-r2xfgg0x.js";import"./chunk-pzq28dp7.js";import"./chunk-c61xdsy8.js";import"./chunk-8fqmxv14.js";import"./chunk-wrm9spc9.js";import{wMe}from"./chunk-zkbf0zdp.js";import{bt,t}from"./chunk-cwsn6mdf.js";import"./chunk-xc4b32zy.js";import"./chunk-b9getfsf.js";import"./chunk-9pt2nr7j.js";import"./chunk-63mtweh2.js";import{a}from"./chunk-xwn0mfnc.js";import"./chunk-73603qq3.js";import"./chunk-h723y8sa.js";import"./chunk-rhe3yjtx.js";import"./chunk-30b5ph10.js";import"./chunk-70f8b1fa.js";import"./chunk-eveykdxw.js";import"./chunk-brkdb8k6.js";import"./chunk-sbc6y92x.js";import"./chunk-wz19y5sy.js";import{mle,xMe}from"./chunk-5vywp25k.js";import{Rgn}from"./chunk-d3b4bs8w.js";import{ol}from"./chunk-yfyzz0k6.js";import"./chunk-yhkfehzg.js";import"./chunk-e0thntkh.js";import"./chunk-y6e2zv6a.js";import"./chunk-8dm571cw.js";import"./chunk-29rv67gt.js";async function _({sessionId:i,sdkUrl:e}){try{let r=a.CLAUDE_SESSION_INGRESS_TOKEN_FILE??mle;if(!(await ol(r,xMe))?.trim()){t("[vitals] no session token file on this worker; guest vitals disabled");return}let o=await Rgn({sessionId:i,apiBaseUrl:wMe(new URL(e)).origin,tokenFilePath:r,binaryResolution:"search",log:t});if(o)bt(()=>o.stop())}catch(r){t(`[vitals] not started: ${d(r)}`)}}export{_ as startHostedWorkerVitalsEmitter};
