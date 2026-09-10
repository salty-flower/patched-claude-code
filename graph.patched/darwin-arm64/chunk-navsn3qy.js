// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{Dm,nf,pst,RNn,x1n}from"./chunk-cet8na02.js";import{Pe}from"./chunk-3k7pa7mk.js";import{q,id,hNn}from"./chunk-w930ag8r.js";import{uB,Q0n,oje,dnt,hae}from"./chunk-vryy7b5x.js";import{rd}from"./chunk-v6bnm6m1.js";import{nl,wHt,EHt,lHe}from"./chunk-1qb0n0qf.js";import{B1}from"./chunk-6qn08fa6.js";import{tw,dq}from"./chunk-ydfa467f.js";import{pxt}from"./chunk-hndhb8as.js";import{uR}from"./chunk-as958m82.js";import{Hvn}from"./chunk-510v83w9.js";import{Ker}from"./chunk-mkrn2rh1.js";import{A2n}from"./chunk-xrkkp1ng.js";import{NU}from"./chunk-116emam7.js";import{createServer as f}from"net";function Xit(e,m,o){return new Promise((n,c)=>{let t=(r)=>{i.close(),c(r)},i=f((r)=>{let a="";r.setEncoding("utf8"),r.on("data",(d)=>{if(a+=d,o&&a.length>8388608){r.destroy();return}let p=a.indexOf(`
`);if(p<0)return;if(o){let s;try{s=q(a.slice(0,p))}catch{s=void 0}if(!s||!uR(s.auth,o)){r.destroy();return}i.close(),n(s);return}i.close();try{n(q(a.slice(0,p)))}catch(s){c(s)}}),r.on("error",o?()=>r.destroy():t)});if(i.on("error",t),m)i.once("listening",()=>{try{m()}catch(r){t(r)}});i.listen(e)})}async function Jit(e,m){let o=await rd(e.cwd,void 0);id(o);let n={originalCwd:o,projectRoot:o,cwd:o};if(e.sessionId)nf(Dm(e.sessionId),"spare_claim",null,n);else pst(n);if(nl(),hae(),dnt(),RNn(),Ker(),B1({warm_spare_claimed:1}),Pe(e.env.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST)){for(let t of Object.keys(process.env))if(wHt(t)||t==="ANTHROPIC_CUSTOM_HEADERS"||EHt(t)||lHe(t))delete process.env[t]}delete process.env.ANTHROPIC_AUTH_TOKEN,delete process.env.ANTHROPIC_API_KEY,delete process.env.CLAUDE_CODE_OAUTH_TOKEN,Object.assign(process.env,e.env),process.argv=[process.argv[0],process.argv[1],...e.argv],hNn(),await A2n(e.argv),x1n(),Q0n(),pxt(),NU(),oje({preservePendingExposures:!0,preserveLoggedExposures:!0}),uB(),Hvn(),dq(),tw();let{main:c}=await m;await c()}
export{Xit,Jit};
