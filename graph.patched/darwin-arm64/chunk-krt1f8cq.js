// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import"./chunk-drh3s4e9.js";import"./chunk-63vja5td.js";import"./chunk-vd0a9d2s.js";import"./chunk-a48152q4.js";import"./chunk-eak61y8v.js";import{l}from"./chunk-tnh13g2g.js";import"./chunk-k2e8p61g.js";import"./chunk-9exgg8sx.js";import"./chunk-ce4b81xm.js";import"./chunk-y208484s.js";import"./chunk-3qfs0gea.js";import{VAe}from"./chunk-630hazsp.js";import{bt,t}from"./chunk-b5feae42.js";import"./chunk-xaschh52.js";import"./chunk-cy0s0eq1.js";import"./chunk-v2r1tbj3.js";import"./chunk-tdmgys2e.js";import"./chunk-dqm3tjsh.js";import{a}from"./chunk-70qqbqq4.js";import"./chunk-7dchs7vj.js";import"./chunk-ne43gjnt.js";import"./chunk-hz0a4zf6.js";import"./chunk-7194gg2b.js";import"./chunk-f51x0gch.js";import"./chunk-ebsg4v3f.js";import"./chunk-htsd57mk.js";import"./chunk-pzha2ryw.js";import"./chunk-j1zwmk4n.js";import{lre,JAe}from"./chunk-1x0mmdxb.js";import{Htn}from"./chunk-2hvwyhf5.js";import{Aa}from"./chunk-kbn00z3m.js";import"./chunk-20vgjjee.js";import"./chunk-d3pfyxhw.js";import"./chunk-s07g171s.js";async function d({sessionId:i,sdkUrl:e}){try{let r=a.CLAUDE_SESSION_INGRESS_TOKEN_FILE??lre;if(!(await Aa(r,JAe))?.trim()){t("[vitals] no session token file on this worker; guest vitals disabled");return}let o=await Htn({sessionId:i,apiBaseUrl:VAe(new URL(e)).origin,tokenFilePath:r,binaryResolution:"search",log:t});if(o)bt(()=>o.stop())}catch(r){t(`[vitals] not started: ${l(r)}`)}}export{d as startHostedWorkerVitalsEmitter};
