// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import"./chunk-a7esebzw.js";import"./chunk-rfvh2b8a.js";import"./chunk-qsnhycbm.js";import"./chunk-wchdjfbm.js";import{DZ}from"./chunk-fq2q5808.js";import"./chunk-t8q7n4ta.js";import"./chunk-m3k3498d.js";import{l}from"./chunk-vfrpernt.js";import"./chunk-vkfaczp9.js";import{kt,t}from"./chunk-fy3j7rz0.js";import"./chunk-xdb7bs7g.js";import"./chunk-xj9n0xxp.js";import"./chunk-jvycdhmw.js";import"./chunk-7tpgnqqk.js";import"./chunk-9f6zczff.js";import{a}from"./chunk-9fmxymtw.js";import"./chunk-554z0m6d.js";import"./chunk-74qghvre.js";import"./chunk-dzyeyv65.js";import"./chunk-rkvsjmym.js";import"./chunk-me2q8h8a.js";import"./chunk-ckb6ttfs.js";import"./chunk-pwwpvrmd.js";import"./chunk-dm1d67j0.js";import{H4,BZ}from"./chunk-xp524m8z.js";import{Fit}from"./chunk-4ph3p3ek.js";import{Vi}from"./chunk-btbsn9s4.js";import"./chunk-bx9qrqzr.js";import"./chunk-q2svqtr6.js";import"./chunk-bs8xfxpn.js";import"./chunk-k9qk789z.js";async function d({sessionId:i,sdkUrl:e}){try{let r=a.CLAUDE_SESSION_INGRESS_TOKEN_FILE??H4;if(!(await Vi(r,BZ))?.trim()){t("[vitals] no session token file on this worker; guest vitals disabled");return}let o=await Fit({sessionId:i,apiBaseUrl:DZ(new URL(e)).origin,tokenFilePath:r,binaryResolution:"search",log:t});if(o)kt(()=>o.stop())}catch(r){t(`[vitals] not started: ${l(r)}`)}}export{d as startHostedWorkerVitalsEmitter};
