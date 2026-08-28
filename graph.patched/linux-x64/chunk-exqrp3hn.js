// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{_u,fp,OYe,nwn,VEn}from"./chunk-2vv5hpw3.js";import{Pe}from"./chunk-gqqx2ybk.js";import{V,bu,WSn}from"./chunk-akz0cj0f.js";import{P1,Gmn,pPe,h8e,pte}from"./chunk-ns0ekkj0.js";import{jl}from"./chunk-6ypvgjr3.js";import{Yl,Yyt,Xyt,YSe}from"./chunk-a891q37t.js";import{i2}from"./chunk-z3w4y6ds.js";import{hE,V4}from"./chunk-p23he0jn.js";import{Mbt}from"./chunk-sd094199.js";import{II}from"./chunk-pyd16tkx.js";import{Nun}from"./chunk-8nanzg8y.js";import{h4n}from"./chunk-vrsxrte6.js";import{$kn}from"./chunk-3m0f7t9w.js";import{Q3}from"./chunk-qyjydhg6.js";import{createServer as f}from"net";function pXe(e,m,o){return new Promise((n,c)=>{let t=(r)=>{i.close(),c(r)},i=f((r)=>{let a="";r.setEncoding("utf8"),r.on("data",(d)=>{if(a+=d,o&&a.length>8388608){r.destroy();return}let p=a.indexOf(`
`);if(p<0)return;if(o){let s;try{s=V(a.slice(0,p))}catch{s=void 0}if(!s||!II(s.auth,o)){r.destroy();return}i.close(),n(s);return}i.close();try{n(V(a.slice(0,p)))}catch(s){c(s)}}),r.on("error",o?()=>r.destroy():t)});if(i.on("error",t),m)i.once("listening",()=>{try{m()}catch(r){t(r)}});i.listen(e)})}async function fXe(e,m){let o=await jl(e.cwd,void 0);bu(o);let n={originalCwd:o,projectRoot:o,cwd:o};if(e.sessionId)fp(_u(e.sessionId),"spare_claim",null,n);else OYe(n);if(Yl(),pte(),h8e(),nwn(),h4n(),i2({warm_spare_claimed:1}),Pe(e.env.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST)){for(let t of Object.keys(process.env))if(Yyt(t)||t==="ANTHROPIC_CUSTOM_HEADERS"||Xyt(t)||YSe(t))delete process.env[t]}delete process.env.ANTHROPIC_AUTH_TOKEN,delete process.env.ANTHROPIC_API_KEY,delete process.env.CLAUDE_CODE_OAUTH_TOKEN,Object.assign(process.env,e.env),process.argv=[process.argv[0],process.argv[1],...e.argv],WSn(),await $kn(e.argv),VEn(),Gmn(),Mbt(),Q3(),pPe({preservePendingExposures:!0,preserveLoggedExposures:!0}),P1(),Nun(),V4(),hE();let{main:c}=await m;await c()}
export{pXe,fXe};
