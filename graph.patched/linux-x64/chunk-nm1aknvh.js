// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{Fm,pf,pat,xUn,I1n}from"./chunk-6n7yk222.js";import{He}from"./chunk-d8qjp6nk.js";import{V,ld,hUn}from"./chunk-cmg3b5hg.js";import{A1,rMn,_ze,Hrt,Xae}from"./chunk-ce4ppmnp.js";import{sd}from"./chunk-v365e4sa.js";import{il,t0t,n0t,PPe}from"./chunk-8fer6cmv.js";import{nU}from"./chunk-teade921.js";import{bR}from"./chunk-kk3j6egn.js";import{iw,t3}from"./chunk-7wydher3.js";import{OIt}from"./chunk-nf00mahq.js";import{MCn}from"./chunk-1zd16ad4.js";import{Orr}from"./chunk-dc3f32b6.js";import{$zn}from"./chunk-gka5g5v1.js";import{ZB}from"./chunk-ehsk7vqg.js";import{createServer as f}from"net";function ylt(e,m,o){return new Promise((n,c)=>{let t=(r)=>{i.close(),c(r)},i=f((r)=>{let a="";r.setEncoding("utf8"),r.on("data",(d)=>{if(a+=d,o&&a.length>8388608){r.destroy();return}let p=a.indexOf(`
`);if(p<0)return;if(o){let s;try{s=V(a.slice(0,p))}catch{s=void 0}if(!s||!bR(s.auth,o)){r.destroy();return}i.close(),n(s);return}i.close();try{n(V(a.slice(0,p)))}catch(s){c(s)}}),r.on("error",o?()=>r.destroy():t)});if(i.on("error",t),m)i.once("listening",()=>{try{m()}catch(r){t(r)}});i.listen(e)})}async function _lt(e,m){let o=await sd(e.cwd,void 0);ld(o);let n={originalCwd:o,projectRoot:o,cwd:o};if(e.sessionId)pf(Fm(e.sessionId),"spare_claim",null,n);else pat(n);if(il(),Xae(),Hrt(),xUn(),Orr(),nU({warm_spare_claimed:1}),He(e.env.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST)){for(let t of Object.keys(process.env))if(t0t(t)||t==="ANTHROPIC_CUSTOM_HEADERS"||n0t(t)||PPe(t))delete process.env[t]}delete process.env.ANTHROPIC_AUTH_TOKEN,delete process.env.ANTHROPIC_API_KEY,delete process.env.CLAUDE_CODE_OAUTH_TOKEN,Object.assign(process.env,e.env),process.argv=[process.argv[0],process.argv[1],...e.argv],hUn(),await $zn(e.argv),I1n(),rMn(),OIt(),ZB(),_ze({preservePendingExposures:!0,preserveLoggedExposures:!0}),A1(),MCn(),t3(),iw();let{main:c}=await m;await c()}
export{ylt,_lt};
