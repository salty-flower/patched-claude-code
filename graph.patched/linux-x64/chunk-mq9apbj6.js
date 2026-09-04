// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import"./chunk-jdw11prg.js";import"./chunk-1mrhsd7s.js";import"./chunk-kn2qhfka.js";import"./chunk-m7w5m1w6.js";import{UQ}from"./chunk-b3pxzdmn.js";import"./chunk-x1rrg5j2.js";import"./chunk-56nvyfje.js";import{l}from"./chunk-058caznt.js";import"./chunk-97tbrkcc.js";import{Ct,t}from"./chunk-fzpv8ev5.js";import"./chunk-xmrr4sh8.js";import"./chunk-ras23w04.js";import"./chunk-6rkpsn9e.js";import"./chunk-55w4bsdv.js";import"./chunk-9fysw8jv.js";import{a}from"./chunk-m92n5xra.js";import"./chunk-ck0tqv1m.js";import"./chunk-9f9fskgc.js";import"./chunk-spz20jb6.js";import"./chunk-616tsvrd.js";import"./chunk-5dw4kvcq.js";import"./chunk-bx79h7g8.js";import"./chunk-ye42pw2j.js";import"./chunk-vdqz95a3.js";import{AK,GQ}from"./chunk-pwdby7t2.js";import{Xot}from"./chunk-xya0hy39.js";import{Na}from"./chunk-x722nt0q.js";import"./chunk-nc8ww32a.js";import"./chunk-my1n9ey3.js";import"./chunk-v10h0yg2.js";async function d({sessionId:i,sdkUrl:e}){try{let r=a.CLAUDE_SESSION_INGRESS_TOKEN_FILE??AK;if(!(await Na(r,GQ))?.trim()){t("[vitals] no session token file on this worker; guest vitals disabled");return}let o=await Xot({sessionId:i,apiBaseUrl:UQ(new URL(e)).origin,tokenFilePath:r,binaryResolution:"search",log:t});if(o)Ct(()=>o.stop())}catch(r){t(`[vitals] not started: ${l(r)}`)}}export{d as startHostedWorkerVitalsEmitter};
