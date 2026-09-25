// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import"./chunk-w9w461gr.js";import"./chunk-6cqmwr9m.js";import"./chunk-s8xs8s76.js";import"./chunk-37kdx3dg.js";import"./chunk-gas689jj.js";import{l}from"./chunk-shf1fjz2.js";import"./chunk-zr6jq9j9.js";import"./chunk-w13amena.js";import"./chunk-4cwgnmh9.js";import"./chunk-v9aeg87c.js";import{vme}from"./chunk-emn764wn.js";import{ht,t}from"./chunk-wvb0gwjm.js";import"./chunk-81r5kx3r.js";import"./chunk-j370x2tz.js";import"./chunk-0dpks9t0.js";import"./chunk-1y7zyxh8.js";import"./chunk-njn6k74e.js";import{a}from"./chunk-3a4khaz5.js";import"./chunk-vzqvvnm0.js";import"./chunk-9cfndpw0.js";import"./chunk-ymkzysdh.js";import"./chunk-zb872eas.js";import"./chunk-shk8jjt1.js";import"./chunk-9vnajd7a.js";import"./chunk-3eeg3qvv.js";import"./chunk-97rwyxer.js";import"./chunk-742ky2cp.js";import{LZ,Tme}from"./chunk-7x4fz860.js";import{JNt}from"./chunk-7btfj17z.js";import{ul}from"./chunk-wjcvdctc.js";import"./chunk-1f8ahewx.js";import"./chunk-q41x5swz.js";import"./chunk-aeqtw871.js";async function d({sessionId:i,sdkUrl:e}){try{let r=a.CLAUDE_SESSION_INGRESS_TOKEN_FILE??LZ;if(!(await ul(r,Tme))?.trim()){t("[vitals] no session token file on this worker; guest vitals disabled");return}let o=await JNt({sessionId:i,apiBaseUrl:vme(new URL(e)).origin,tokenFilePath:r,binaryResolution:"search",log:t});if(o)ht(()=>o.stop())}catch(r){t(`[vitals] not started: ${l(r)}`)}}export{d as startHostedWorkerVitalsEmitter};
