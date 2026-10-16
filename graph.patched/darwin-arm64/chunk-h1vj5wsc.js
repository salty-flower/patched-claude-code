// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import"./chunk-bkygtq8f.js";import"./chunk-3mdayxq0.js";import"./chunk-xzypj06m.js";import"./chunk-278j353c.js";import"./chunk-dnq93t1z.js";import{d}from"./chunk-wkh5syvr.js";import"./chunk-54xe5s81.js";import"./chunk-r0a9v21k.js";import"./chunk-6dw7xt0q.js";import"./chunk-hbbqggzw.js";import"./chunk-gafqfm7x.js";import{R0e}from"./chunk-718k5xe7.js";import{St,t}from"./chunk-bnfhb7sj.js";import"./chunk-6bcyaxwk.js";import"./chunk-btnsqe7h.js";import"./chunk-e666gr8q.js";import"./chunk-yh19hj71.js";import{a}from"./chunk-k4g6y57j.js";import"./chunk-73603qq3.js";import"./chunk-52pf9qag.js";import"./chunk-n1esck2w.js";import"./chunk-xqs3dvj3.js";import"./chunk-44kx210g.js";import"./chunk-8zhg89kk.js";import"./chunk-ye9nkzrb.js";import"./chunk-mn5cr59w.js";import"./chunk-wrzcmmn0.js";import{wle,L0e}from"./chunk-3c05e83r.js";import{Ggn}from"./chunk-2jftw7t7.js";import{sl}from"./chunk-7nqmd82e.js";import"./chunk-zds0nx71.js";import"./chunk-js1hm3rq.js";import"./chunk-jr1px7r3.js";import"./chunk-c1a9wnpp.js";import"./chunk-760c7t99.js";async function _({sessionId:i,sdkUrl:e}){try{let r=a.CLAUDE_SESSION_INGRESS_TOKEN_FILE??wle;if(!(await sl(r,L0e))?.trim()){t("[vitals] no session token file on this worker; guest vitals disabled");return}let o=await Ggn({sessionId:i,apiBaseUrl:R0e(new URL(e)).origin,tokenFilePath:r,binaryResolution:"search",log:t});if(o)St(()=>o.stop())}catch(r){t(`[vitals] not started: ${d(r)}`)}}export{_ as startHostedWorkerVitalsEmitter};
