// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import"./chunk-b7wdy41p.js";import"./chunk-918t5khf.js";import"./chunk-aywwjcwq.js";import"./chunk-f16c4jnr.js";import"./chunk-yffha6me.js";import{l}from"./chunk-fdatg9ax.js";import"./chunk-0mwsqxme.js";import"./chunk-gf0t3nd9.js";import"./chunk-bpkzpttw.js";import"./chunk-zs0343th.js";import"./chunk-vf73wj1b.js";import{Ike}from"./chunk-jnystawq.js";import{wt,t}from"./chunk-gvn18sr5.js";import"./chunk-0z5rjdcn.js";import"./chunk-ky8zgwyh.js";import"./chunk-z6am4wsr.js";import"./chunk-z9b8syjk.js";import"./chunk-6rzcw8g2.js";import{a}from"./chunk-869zfth6.js";import"./chunk-jppak124.js";import"./chunk-s90w5q15.js";import"./chunk-tzahwj8w.js";import"./chunk-v6ek3j23.js";import"./chunk-4hsn0a4s.js";import"./chunk-z6jq2hwa.js";import"./chunk-pvcr8t0y.js";import"./chunk-h3056rfm.js";import"./chunk-dcpaq2kj.js";import{Lae,Dke}from"./chunk-ghdwe20r.js";import{lQt}from"./chunk-fbtbnqm7.js";import{Jl}from"./chunk-hdjzp1hc.js";import"./chunk-ht3hn07r.js";import"./chunk-hpdq1e8e.js";import"./chunk-40wcwz4f.js";async function d({sessionId:i,sdkUrl:e}){try{let r=a.CLAUDE_SESSION_INGRESS_TOKEN_FILE??Lae;if(!(await Jl(r,Dke))?.trim()){t("[vitals] no session token file on this worker; guest vitals disabled");return}let o=await lQt({sessionId:i,apiBaseUrl:Ike(new URL(e)).origin,tokenFilePath:r,binaryResolution:"search",log:t});if(o)wt(()=>o.stop())}catch(r){t(`[vitals] not started: ${l(r)}`)}}export{d as startHostedWorkerVitalsEmitter};
