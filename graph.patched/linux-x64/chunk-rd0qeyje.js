// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import{pm,Bf,znt,IPn,xDn}from"./chunk-k6vqz9fa.js";import{xe}from"./chunk-8a7jwk3w.js";import{V,Ku,_Pn}from"./chunk-mh9y4c2z.js";import{QB,Zkn,D1e,SZe,Ose}from"./chunk-32f2qmtc.js";import{Vu}from"./chunk-55s6k4f0.js";import{Za,bTt,STt,nCe}from"./chunk-v7vff0yy.js";import{TN}from"./chunk-j6rfmzxq.js";import{vS,MK}from"./chunk-7fpmaq7k.js";import{gkt}from"./chunk-9ep9p4b1.js";import{DT}from"./chunk-s10h1zk9.js";import{BSn}from"./chunk-ehvhmexj.js";import{lXn}from"./chunk-zs5zpeb0.js";import{mNn}from"./chunk-45tpwnhw.js";import{HB}from"./chunk-c2n88j77.js";import{createServer as f}from"net";function sot(e,m,o){return new Promise((n,c)=>{let t=(r)=>{i.close(),c(r)},i=f((r)=>{let a="";r.setEncoding("utf8"),r.on("data",(d)=>{if(a+=d,o&&a.length>8388608){r.destroy();return}let p=a.indexOf(`
`);if(p<0)return;if(o){let s;try{s=V(a.slice(0,p))}catch{s=void 0}if(!s||!DT(s.auth,o)){r.destroy();return}i.close(),n(s);return}i.close();try{n(V(a.slice(0,p)))}catch(s){c(s)}}),r.on("error",o?()=>r.destroy():t)});if(i.on("error",t),m)i.once("listening",()=>{try{m()}catch(r){t(r)}});i.listen(e)})}async function iot(e,m){let o=await Vu(e.cwd,void 0);Ku(o);let n={originalCwd:o,projectRoot:o,cwd:o};if(e.sessionId)Bf(pm(e.sessionId),"spare_claim",null,n);else znt(n);if(Za(),Ose(),SZe(),IPn(),lXn(),TN({warm_spare_claimed:1}),xe(e.env.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST)){for(let t of Object.keys(process.env))if(bTt(t)||t==="ANTHROPIC_CUSTOM_HEADERS"||STt(t)||nCe(t))delete process.env[t]}delete process.env.ANTHROPIC_AUTH_TOKEN,delete process.env.ANTHROPIC_API_KEY,delete process.env.CLAUDE_CODE_OAUTH_TOKEN,Object.assign(process.env,e.env),process.argv=[process.argv[0],process.argv[1],...e.argv],_Pn(),await mNn(e.argv),xDn(),Zkn(),gkt(),HB(),D1e({preservePendingExposures:!0,preserveLoggedExposures:!0}),QB(),BSn(),MK(),vS();let{main:c}=await m;await c()}
export{sot,iot};
