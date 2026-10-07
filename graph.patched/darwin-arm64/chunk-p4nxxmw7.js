// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import"./chunk-12mdvf4x.js";import"./chunk-29aedz4e.js";import"./chunk-8mvda08c.js";import"./chunk-ht3pd6g4.js";import"./chunk-hdvxmrfb.js";import{l}from"./chunk-fqsygynq.js";import"./chunk-ws170zqm.js";import"./chunk-5qeme8w3.js";import"./chunk-xbg4a11x.js";import"./chunk-yfyrtrqq.js";import"./chunk-w5vv1884.js";import{NCe}from"./chunk-6pm26t04.js";import{wt,t}from"./chunk-f8eqwxpt.js";import"./chunk-sgznn49v.js";import"./chunk-pey4mmsy.js";import"./chunk-fqzh3zpr.js";import"./chunk-qfs4y3ww.js";import"./chunk-ym46rm1e.js";import{a}from"./chunk-j77txbjn.js";import"./chunk-jppak124.js";import"./chunk-qbf9wv32.js";import"./chunk-e3gw32ew.js";import"./chunk-ev2h864q.js";import"./chunk-wd4jmzs1.js";import"./chunk-egwr9wbg.js";import"./chunk-efx2t2v4.js";import"./chunk-1affnqfa.js";import"./chunk-prs2t84m.js";import{Gae,BCe}from"./chunk-vxnbg770.js";import{CJt}from"./chunk-f8ry2yg3.js";import{Jl}from"./chunk-590ye0ab.js";import"./chunk-dy624h5m.js";import"./chunk-1d5bwndp.js";import"./chunk-pqzrrpbd.js";async function d({sessionId:i,sdkUrl:e}){try{let r=a.CLAUDE_SESSION_INGRESS_TOKEN_FILE??Gae;if(!(await Jl(r,BCe))?.trim()){t("[vitals] no session token file on this worker; guest vitals disabled");return}let o=await CJt({sessionId:i,apiBaseUrl:NCe(new URL(e)).origin,tokenFilePath:r,binaryResolution:"search",log:t});if(o)wt(()=>o.stop())}catch(r){t(`[vitals] not started: ${l(r)}`)}}export{d as startHostedWorkerVitalsEmitter};
