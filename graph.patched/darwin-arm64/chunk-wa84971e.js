// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import"./chunk-nfna65jh.js";import"./chunk-fdxhcr6b.js";import"./chunk-4bw62nzm.js";import"./chunk-k1419ccf.js";import"./chunk-76anb6yt.js";import{l}from"./chunk-886tf6ja.js";import"./chunk-yjc18bey.js";import"./chunk-ae84tp6z.js";import"./chunk-nqc6v990.js";import"./chunk-5b8s3gnd.js";import"./chunk-qb086kpj.js";import{yxe}from"./chunk-c0aaqg7t.js";import{St,t}from"./chunk-gyf58rwf.js";import"./chunk-tat46164.js";import"./chunk-ax7r0qj7.js";import"./chunk-gsnbskq4.js";import"./chunk-phz47asr.js";import{a}from"./chunk-yvnhkg35.js";import"./chunk-p9frg3mj.js";import"./chunk-4nygtnjw.js";import"./chunk-2hb5361r.js";import"./chunk-qr9z1wer.js";import"./chunk-1t033v1j.js";import"./chunk-1tsh4em7.js";import"./chunk-wh2vcbh8.js";import"./chunk-nca5bd28.js";import"./chunk-f606a53w.js";import{fse,Cxe}from"./chunk-d7wfeeft.js";import{Jin}from"./chunk-nwtxjypf.js";import{ja}from"./chunk-64ag51qf.js";import"./chunk-0hm793yn.js";import"./chunk-nkvcn1t9.js";import"./chunk-2zhybd9r.js";import"./chunk-xaes9ysz.js";import"./chunk-wsz2wsez.js";async function d({sessionId:i,sdkUrl:e}){try{let r=a.CLAUDE_SESSION_INGRESS_TOKEN_FILE??fse;if(!(await ja(r,Cxe))?.trim()){t("[vitals] no session token file on this worker; guest vitals disabled");return}let o=await Jin({sessionId:i,apiBaseUrl:yxe(new URL(e)).origin,tokenFilePath:r,binaryResolution:"search",log:t});if(o)St(()=>o.stop())}catch(r){t(`[vitals] not started: ${l(r)}`)}}export{d as startHostedWorkerVitalsEmitter};
