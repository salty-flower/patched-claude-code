// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{Gu,qp,mQe,Mkn,PHn}from"./chunk-38213y7h.js";import{Me}from"./chunk-5b2g0bc6.js";import{V,qu,Akn}from"./chunk-ynzt0fm1.js";import{d$,Zbn,lNe,B7e,Nre}from"./chunk-bsdtxcdc.js";import{El}from"./chunk-4ngx0mjr.js";import{Hc,iTt,sTt,YAe}from"./chunk-4k4029wq.js";import{ij}from"./chunk-b8r6yeec.js";import{dA,t4}from"./chunk-pxjm7v8m.js";import{WTt}from"./chunk-t08x6k34.js";import{aR}from"./chunk-q9hnzper.js";import{Chn}from"./chunk-f63318j1.js";import{CVn}from"./chunk-vrz04qwg.js";import{wIn}from"./chunk-7e9rfdsh.js";import{rV}from"./chunk-vx6zh8vh.js";import{createServer as f}from"net";function xZe(e,m,o){return new Promise((n,c)=>{let t=(r)=>{i.close(),c(r)},i=f((r)=>{let a="";r.setEncoding("utf8"),r.on("data",(d)=>{if(a+=d,o&&a.length>8388608){r.destroy();return}let p=a.indexOf(`
`);if(p<0)return;if(o){let s;try{s=V(a.slice(0,p))}catch{s=void 0}if(!s||!aR(s.auth,o)){r.destroy();return}i.close(),n(s);return}i.close();try{n(V(a.slice(0,p)))}catch(s){c(s)}}),r.on("error",o?()=>r.destroy():t)});if(i.on("error",t),m)i.once("listening",()=>{try{m()}catch(r){t(r)}});i.listen(e)})}async function IZe(e,m){let o=await El(e.cwd,void 0);qu(o);let n={originalCwd:o,projectRoot:o,cwd:o};if(e.sessionId)qp(Gu(e.sessionId),"spare_claim",null,n);else mQe(n);if(Hc(),Nre(),B7e(),Mkn(),CVn(),ij({warm_spare_claimed:1}),Me(e.env.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST)){for(let t of Object.keys(process.env))if(iTt(t)||t==="ANTHROPIC_CUSTOM_HEADERS"||sTt(t)||YAe(t))delete process.env[t]}delete process.env.ANTHROPIC_AUTH_TOKEN,delete process.env.ANTHROPIC_API_KEY,delete process.env.CLAUDE_CODE_OAUTH_TOKEN,Object.assign(process.env,e.env),process.argv=[process.argv[0],process.argv[1],...e.argv],Akn(),await wIn(e.argv),PHn(),Zbn(),WTt(),rV(),lNe({preservePendingExposures:!0,preserveLoggedExposures:!0}),d$(),Chn(),t4(),dA();let{main:c}=await m;await c()}
export{xZe,IZe};
