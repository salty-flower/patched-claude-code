// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{Gu,Wf,uQe,ICn,vRn}from"./chunk-30zk17wm.js";import{Me}from"./chunk-7s3c5qqq.js";import{q,zu,yCn}from"./chunk-d0cr5d2v.js";import{cB,QSn,sOe,FYe,Dre}from"./chunk-1e5y3pjf.js";import{El}from"./chunk-vv42w3zb.js";import{Ic,owt,iwt,KAe}from"./chunk-kc505vjh.js";import{nz}from"./chunk-0xn3mw8z.js";import{uA,QV}from"./chunk-bt08ja64.js";import{jwt}from"./chunk-rv365wnb.js";import{iT}from"./chunk-ts4ymrjf.js";import{whn}from"./chunk-2w0h3pr7.js";import{S5n}from"./chunk-y11rpjdz.js";import{hLn}from"./chunk-1cc7brdd.js";import{e5}from"./chunk-jerw32n8.js";import{createServer as f}from"net";function CZe(e,m,o){return new Promise((n,c)=>{let t=(r)=>{i.close(),c(r)},i=f((r)=>{let a="";r.setEncoding("utf8"),r.on("data",(d)=>{if(a+=d,o&&a.length>8388608){r.destroy();return}let p=a.indexOf(`
`);if(p<0)return;if(o){let s;try{s=q(a.slice(0,p))}catch{s=void 0}if(!s||!iT(s.auth,o)){r.destroy();return}i.close(),n(s);return}i.close();try{n(q(a.slice(0,p)))}catch(s){c(s)}}),r.on("error",o?()=>r.destroy():t)});if(i.on("error",t),m)i.once("listening",()=>{try{m()}catch(r){t(r)}});i.listen(e)})}async function IZe(e,m){let o=await El(e.cwd,void 0);zu(o);let n={originalCwd:o,projectRoot:o,cwd:o};if(e.sessionId)Wf(Gu(e.sessionId),"spare_claim",null,n);else uQe(n);if(Ic(),Dre(),FYe(),ICn(),S5n(),nz({warm_spare_claimed:1}),Me(e.env.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST)){for(let t of Object.keys(process.env))if(owt(t)||t==="ANTHROPIC_CUSTOM_HEADERS"||iwt(t)||KAe(t))delete process.env[t]}delete process.env.ANTHROPIC_AUTH_TOKEN,delete process.env.ANTHROPIC_API_KEY,delete process.env.CLAUDE_CODE_OAUTH_TOKEN,Object.assign(process.env,e.env),process.argv=[process.argv[0],process.argv[1],...e.argv],yCn(),await hLn(e.argv),vRn(),QSn(),jwt(),e5(),sOe({preservePendingExposures:!0,preserveLoggedExposures:!0}),cB(),whn(),QV(),uA();let{main:c}=await m;await c()}
export{CZe,IZe};
