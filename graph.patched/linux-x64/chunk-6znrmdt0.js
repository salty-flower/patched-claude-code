// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import"./chunk-txfrkyzp.js";import"./chunk-gj513b2z.js";import"./chunk-qztrb7e5.js";import"./chunk-d3xvzk7s.js";import"./chunk-k4wnp212.js";import"./chunk-40wq8hf6.js";import{mse}from"./chunk-b8169sgj.js";import{l}from"./chunk-cnzbk8gg.js";import"./chunk-p9tbyvzw.js";import{Tt,t}from"./chunk-847hpqqs.js";import"./chunk-hdk9febf.js";import"./chunk-kh3dq6rw.js";import"./chunk-67jj8qay.js";import"./chunk-q3f1bdx8.js";import{a}from"./chunk-q2vrcqny.js";import"./chunk-1cx6bcw0.js";import"./chunk-5a4y4a7y.js";import"./chunk-61g2sn1g.js";import"./chunk-g0d6a50p.js";import"./chunk-vd2nxbng.js";import"./chunk-zf4yx99n.js";import"./chunk-9dhpqtz5.js";import"./chunk-4knvtbyn.js";import{L8,vse}from"./chunk-wt9yf8j5.js";import{Ubt}from"./chunk-gkpkm4x2.js";import{Oa}from"./chunk-30p0nwys.js";import"./chunk-8zbt0spj.js";import"./chunk-gyh40pz1.js";import"./chunk-s44v6gm9.js";async function d({sessionId:i,sdkUrl:e}){try{let r=a.CLAUDE_SESSION_INGRESS_TOKEN_FILE??L8;if(!(await Oa(r,vse))?.trim()){t("[vitals] no session token file on this worker; guest vitals disabled");return}let o=await Ubt({sessionId:i,apiBaseUrl:mse(new URL(e)).origin,tokenFilePath:r,binaryResolution:"search",log:t});if(o)Tt(()=>o.stop())}catch(r){t(`[vitals] not started: ${l(r)}`)}}export{d as startHostedWorkerVitalsEmitter};
