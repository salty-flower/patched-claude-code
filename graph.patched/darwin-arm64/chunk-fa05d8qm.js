// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{Su,fp,Q7e,uwn,tEn}from"./chunk-g4zaymy2.js";import{De}from"./chunk-vpkz5m05.js";import{V,bu,Zvn}from"./chunk-cmkfpkth.js";import{MN,qmn,fDe,h8e,gte}from"./chunk-ghnc2x4f.js";import{jl}from"./chunk-71nbrcp0.js";import{Yl,Yyt,Xyt,Xve}from"./chunk-2694tw3t.js";import{lU}from"./chunk-1m3qd9sr.js";import{gT,X4}from"./chunk-evkw8tw9.js";import{L_t}from"./chunk-gsnfhe7n.js";import{DI}from"./chunk-50n50vap.js";import{Uun}from"./chunk-zts1rcga.js";import{S4n}from"./chunk-zkk7jnw6.js";import{jCn}from"./chunk-xn98dpct.js";import{tz}from"./chunk-gmgsae35.js";import{createServer as f}from"net";function fXe(e,m,o){return new Promise((n,c)=>{let t=(r)=>{i.close(),c(r)},i=f((r)=>{let a="";r.setEncoding("utf8"),r.on("data",(d)=>{if(a+=d,o&&a.length>8388608){r.destroy();return}let p=a.indexOf(`
`);if(p<0)return;if(o){let s;try{s=V(a.slice(0,p))}catch{s=void 0}if(!s||!DI(s.auth,o)){r.destroy();return}i.close(),n(s);return}i.close();try{n(V(a.slice(0,p)))}catch(s){c(s)}}),r.on("error",o?()=>r.destroy():t)});if(i.on("error",t),m)i.once("listening",()=>{try{m()}catch(r){t(r)}});i.listen(e)})}async function mXe(e,m){let o=await jl(e.cwd,void 0);bu(o);let n={originalCwd:o,projectRoot:o,cwd:o};if(e.sessionId)fp(Su(e.sessionId),"spare_claim",null,n);else Q7e(n);if(Yl(),gte(),h8e(),uwn(),S4n(),lU({warm_spare_claimed:1}),De(e.env.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST)){for(let t of Object.keys(process.env))if(Yyt(t)||t==="ANTHROPIC_CUSTOM_HEADERS"||Xyt(t)||Xve(t))delete process.env[t]}delete process.env.ANTHROPIC_AUTH_TOKEN,delete process.env.ANTHROPIC_API_KEY,delete process.env.CLAUDE_CODE_OAUTH_TOKEN,Object.assign(process.env,e.env),process.argv=[process.argv[0],process.argv[1],...e.argv],Zvn(),await jCn(e.argv),tEn(),qmn(),L_t(),tz(),fDe({preservePendingExposures:!0,preserveLoggedExposures:!0}),MN(),Uun(),X4(),gT();let{main:c}=await m;await c()}
export{fXe,mXe};
