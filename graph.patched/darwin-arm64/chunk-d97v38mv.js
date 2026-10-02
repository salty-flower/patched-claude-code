// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import"./chunk-ypa64mmn.js";import"./chunk-g5e6pf8s.js";import"./chunk-a7cah040.js";import"./chunk-nynxm73s.js";import"./chunk-g9zw99sb.js";import{l}from"./chunk-hs50vfa7.js";import"./chunk-jm8r4kd0.js";import"./chunk-2j7zyd8v.js";import"./chunk-h1eby6n2.js";import"./chunk-vmffs68f.js";import"./chunk-820d2q3e.js";import{N_e}from"./chunk-fmk5eq99.js";import{yt,t}from"./chunk-3wz0srxw.js";import"./chunk-dard33vx.js";import"./chunk-62dhtzrb.js";import"./chunk-zwbw6dvp.js";import"./chunk-dsp1md5e.js";import"./chunk-sxefq60x.js";import{a}from"./chunk-1fpwxv0g.js";import"./chunk-mpc9nxv5.js";import"./chunk-aykv0zbt.js";import"./chunk-sc069zjc.js";import"./chunk-xs651030.js";import"./chunk-rdhfzq5v.js";import"./chunk-ngfc6f6n.js";import"./chunk-j0n5hmbg.js";import"./chunk-3vg91ev9.js";import"./chunk-dn2273cv.js";import{cre,G_e}from"./chunk-jadxt0j8.js";import{P6t}from"./chunk-2gr9xbrd.js";import{gl}from"./chunk-fh513ghb.js";import"./chunk-99m0p1v3.js";import"./chunk-r1n6vzwg.js";import"./chunk-y7fvkjrx.js";async function d({sessionId:i,sdkUrl:e}){try{let r=a.CLAUDE_SESSION_INGRESS_TOKEN_FILE??cre;if(!(await gl(r,G_e))?.trim()){t("[vitals] no session token file on this worker; guest vitals disabled");return}let o=await P6t({sessionId:i,apiBaseUrl:N_e(new URL(e)).origin,tokenFilePath:r,binaryResolution:"search",log:t});if(o)yt(()=>o.stop())}catch(r){t(`[vitals] not started: ${l(r)}`)}}export{d as startHostedWorkerVitalsEmitter};
