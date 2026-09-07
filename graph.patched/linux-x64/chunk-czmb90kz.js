// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{Fu,Nf,Xet,axn,sPn}from"./chunk-bj7g1p32.js";import{xe}from"./chunk-mnk1rjxv.js";import{W,Nu,YRn}from"./chunk-1tk5haqn.js";import{vB,LAn,uBe,C7e,zoe}from"./chunk-3e93vkg3.js";import{Mu}from"./chunk-4c106gcs.js";import{za,yvt,_vt,oTe}from"./chunk-qyjj7h0q.js";import{sN}from"./chunk-9p6z7v4m.js";import{dS,Zq}from"./chunk-kaqfcdks.js";import{tAt}from"./chunk-nfmdzyhb.js";import{_T}from"./chunk-gq4w1rkv.js";import{Ybn}from"./chunk-2e7jdyrh.js";import{x3n}from"./chunk-jb297awm.js";import{N$n}from"./chunk-q3yd3sjq.js";import{nB}from"./chunk-7k0k6b98.js";import{createServer as f}from"net";function dnt(e,m,o){return new Promise((n,c)=>{let t=(r)=>{i.close(),c(r)},i=f((r)=>{let a="";r.setEncoding("utf8"),r.on("data",(d)=>{if(a+=d,o&&a.length>8388608){r.destroy();return}let p=a.indexOf(`
`);if(p<0)return;if(o){let s;try{s=W(a.slice(0,p))}catch{s=void 0}if(!s||!_T(s.auth,o)){r.destroy();return}i.close(),n(s);return}i.close();try{n(W(a.slice(0,p)))}catch(s){c(s)}}),r.on("error",o?()=>r.destroy():t)});if(i.on("error",t),m)i.once("listening",()=>{try{m()}catch(r){t(r)}});i.listen(e)})}async function fnt(e,m){let o=await Mu(e.cwd,void 0);Nu(o);let n={originalCwd:o,projectRoot:o,cwd:o};if(e.sessionId)Nf(Fu(e.sessionId),"spare_claim",null,n);else Xet(n);if(za(),zoe(),C7e(),axn(),x3n(),sN({warm_spare_claimed:1}),xe(e.env.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST)){for(let t of Object.keys(process.env))if(yvt(t)||t==="ANTHROPIC_CUSTOM_HEADERS"||_vt(t)||oTe(t))delete process.env[t]}delete process.env.ANTHROPIC_AUTH_TOKEN,delete process.env.ANTHROPIC_API_KEY,delete process.env.CLAUDE_CODE_OAUTH_TOKEN,Object.assign(process.env,e.env),process.argv=[process.argv[0],process.argv[1],...e.argv],YRn(),await N$n(e.argv),sPn(),LAn(),tAt(),nB(),uBe({preservePendingExposures:!0,preserveLoggedExposures:!0}),vB(),Ybn(),Zq(),dS();let{main:c}=await m;await c()}
export{dnt,fnt};
