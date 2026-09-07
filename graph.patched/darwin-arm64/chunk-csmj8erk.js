// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{ju,Np,ptt,U0n,FPn}from"./chunk-zhtwayh2.js";import{Ie}from"./chunk-fkz3e4t3.js";import{G,Bu,k0n}from"./chunk-5q90j22t.js";import{D$,oCn,T$e,jJe,Qoe}from"./chunk-n495pc0t.js";import{Nu}from"./chunk-3pft38xm.js";import{qa,DCt,LCt,pRe}from"./chunk-sxccpdbg.js";import{f1}from"./chunk-0masdjfa.js";import{pb,uq}from"./chunk-r2ztspyj.js";import{SAt}from"./chunk-6pky15m5.js";import{ER}from"./chunk-31b8gaj2.js";import{Abn}from"./chunk-6ab5jtzk.js";import{c8n}from"./chunk-7js82y71.js";import{mMn}from"./chunk-cwmyjsvk.js";import{d$}from"./chunk-k5tqyvpa.js";import{createServer as f}from"net";function Cnt(e,m,o){return new Promise((n,c)=>{let t=(r)=>{i.close(),c(r)},i=f((r)=>{let a="";r.setEncoding("utf8"),r.on("data",(d)=>{if(a+=d,o&&a.length>8388608){r.destroy();return}let p=a.indexOf(`
`);if(p<0)return;if(o){let s;try{s=G(a.slice(0,p))}catch{s=void 0}if(!s||!ER(s.auth,o)){r.destroy();return}i.close(),n(s);return}i.close();try{n(G(a.slice(0,p)))}catch(s){c(s)}}),r.on("error",o?()=>r.destroy():t)});if(i.on("error",t),m)i.once("listening",()=>{try{m()}catch(r){t(r)}});i.listen(e)})}async function vnt(e,m){let o=await Nu(e.cwd,void 0);Bu(o);let n={originalCwd:o,projectRoot:o,cwd:o};if(e.sessionId)Np(ju(e.sessionId),"spare_claim",null,n);else ptt(n);if(qa(),Qoe(),jJe(),U0n(),c8n(),f1({warm_spare_claimed:1}),Ie(e.env.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST)){for(let t of Object.keys(process.env))if(DCt(t)||t==="ANTHROPIC_CUSTOM_HEADERS"||LCt(t)||pRe(t))delete process.env[t]}delete process.env.ANTHROPIC_AUTH_TOKEN,delete process.env.ANTHROPIC_API_KEY,delete process.env.CLAUDE_CODE_OAUTH_TOKEN,Object.assign(process.env,e.env),process.argv=[process.argv[0],process.argv[1],...e.argv],k0n(),await mMn(e.argv),FPn(),oCn(),SAt(),d$(),T$e({preservePendingExposures:!0,preserveLoggedExposures:!0}),D$(),Abn(),uq(),pb();let{main:c}=await m;await c()}
export{Cnt,vnt};
