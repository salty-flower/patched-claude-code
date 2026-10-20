// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import"./chunk-esv3b1gm.js";import"./chunk-bjnpzyk4.js";import"./chunk-kpqr86hf.js";import"./chunk-saccfcs4.js";import"./chunk-ny2cqbmq.js";import{d}from"./chunk-nre716m4.js";import"./chunk-2ckwvz0j.js";import"./chunk-f66mhvm1.js";import"./chunk-cne7d53x.js";import"./chunk-jrcdjayr.js";import"./chunk-r22r6j92.js";import"./chunk-k9hc2wbs.js";import{nHe}from"./chunk-prq01t47.js";import{yt,t}from"./chunk-tdxkq523.js";import"./chunk-pmhx705f.js";import"./chunk-42txhxmf.js";import"./chunk-277zhca1.js";import"./chunk-x352w4g5.js";import"./chunk-4nyg9560.js";import{a}from"./chunk-h422gpw8.js";import"./chunk-4ccvyrtz.js";import"./chunk-dj0gyv94.js";import"./chunk-53e7d9dh.js";import"./chunk-r2k1mk6b.js";import"./chunk-vd15k1r3.js";import"./chunk-x44dqwaw.js";import"./chunk-x1ddy2ab.js";import"./chunk-hf1d5ysc.js";import"./chunk-c2wcenam.js";import{Ide,cHe}from"./chunk-dx8q5svn.js";import{fbn}from"./chunk-5xss5jtf.js";import{ul}from"./chunk-drp9p5tr.js";import"./chunk-nncg5t3b.js";import"./chunk-1q6hgkzj.js";import"./chunk-z4ateaw0.js";import"./chunk-esjx5d0h.js";async function _({sessionId:i,sdkUrl:e}){try{let r=a.CLAUDE_SESSION_INGRESS_TOKEN_FILE??Ide;if(!(await ul(r,cHe))?.trim()){t("[vitals] no session token file on this worker; guest vitals disabled");return}let o=await fbn({sessionId:i,apiBaseUrl:nHe(new URL(e)).origin,tokenFilePath:r,binaryResolution:"search",log:t});if(o)yt(()=>o.stop())}catch(r){t(`[vitals] not started: ${d(r)}`)}}export{_ as startHostedWorkerVitalsEmitter};
