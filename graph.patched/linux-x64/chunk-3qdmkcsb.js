// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import"./chunk-d8qjp6nk.js";import"./chunk-xg0fb0fx.js";import"./chunk-1k8htemc.js";import"./chunk-kse90n8m.js";import{tee}from"./chunk-nf00mahq.js";import"./chunk-6n7yk222.js";import"./chunk-mtqrv1h8.js";import{l}from"./chunk-59zxrwfh.js";import"./chunk-0rpkhv24.js";import{Ct,t}from"./chunk-cmg3b5hg.js";import"./chunk-c413mrzf.js";import"./chunk-p9k2m8jj.js";import"./chunk-vp9rx3bq.js";import"./chunk-xenybawd.js";import{a}from"./chunk-1bwwmttj.js";import"./chunk-4thwge0q.js";import"./chunk-nx6yj2w6.js";import"./chunk-t5df5mky.js";import"./chunk-03bbjp25.js";import"./chunk-np2nmzg7.js";import"./chunk-4g3h89r1.js";import"./chunk-2j94m3ye.js";import"./chunk-v365e4sa.js";import{Q4,lee}from"./chunk-mbvr1efr.js";import{vlt}from"./chunk-t7b64gpd.js";import{Qi}from"./chunk-ce4ppmnp.js";import"./chunk-2320rhap.js";import"./chunk-mvtzn48h.js";import"./chunk-mf44bs0z.js";import"./chunk-5md0kwdx.js";async function d({sessionId:i,sdkUrl:e}){try{let r=a.CLAUDE_SESSION_INGRESS_TOKEN_FILE??Q4;if(!(await Qi(r,lee))?.trim()){t("[vitals] no session token file on this worker; guest vitals disabled");return}let o=await vlt({sessionId:i,apiBaseUrl:tee(new URL(e)).origin,tokenFilePath:r,binaryResolution:"search",log:t});if(o)Ct(()=>o.stop())}catch(r){t(`[vitals] not started: ${l(r)}`)}}export{d as startHostedWorkerVitalsEmitter};
