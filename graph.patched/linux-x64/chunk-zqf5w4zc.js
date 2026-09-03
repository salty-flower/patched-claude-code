// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import"./chunk-ycrs8y50.js";import"./chunk-td0fv71w.js";import"./chunk-0sa7g6pk.js";import"./chunk-twjxwmnx.js";import{hie}from"./chunk-rb08vpfw.js";import"./chunk-b1z7jvb2.js";import"./chunk-y7x1gsy0.js";import{l}from"./chunk-xtc2dmbe.js";import"./chunk-mrh5xd2h.js";import{Rt,t}from"./chunk-5nyank6v.js";import"./chunk-pz607n7v.js";import"./chunk-ctshp37x.js";import"./chunk-hfch6q45.js";import"./chunk-ffgkv432.js";import"./chunk-cw80kq1q.js";import{a}from"./chunk-sr28hb79.js";import"./chunk-wv4b4ave.js";import"./chunk-62em4bpm.js";import"./chunk-krz8ngz3.js";import"./chunk-rfwkkcpg.js";import"./chunk-9d3jb7ss.js";import"./chunk-tdsxb2n6.js";import"./chunk-1ce1rf2k.js";import"./chunk-zmhk2tm0.js";import{zq,sQ}from"./chunk-1c73sb2f.js";import{Znt}from"./chunk-sab0k676.js";import{Da}from"./chunk-8qt7d28b.js";import"./chunk-kssh590p.js";import"./chunk-e979sk69.js";import"./chunk-dwwp0b8c.js";async function d({sessionId:i,sdkUrl:e}){try{let r=a.CLAUDE_SESSION_INGRESS_TOKEN_FILE??zq;if(!(await Da(r,sQ))?.trim()){t("[vitals] no session token file on this worker; guest vitals disabled");return}let o=await Znt({sessionId:i,apiBaseUrl:hie(new URL(e)).origin,tokenFilePath:r,binaryResolution:"search",log:t});if(o)Rt(()=>o.stop())}catch(r){t(`[vitals] not started: ${l(r)}`)}}export{d as startHostedWorkerVitalsEmitter};
