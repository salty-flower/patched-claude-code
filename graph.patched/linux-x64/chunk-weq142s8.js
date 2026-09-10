// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{Hm,rf,wst,U$n,BFn}from"./chunk-t8q7n4ta.js";import{He}from"./chunk-a7esebzw.js";import{V,sd,R$n}from"./chunk-fy3j7rz0.js";import{e1,kPn,qje,Xtt,cae}from"./chunk-btbsn9s4.js";import{nd}from"./chunk-dm1d67j0.js";import{nl,eIt,tIt,Xxe}from"./chunk-hfjb09vk.js";import{LF}from"./chunk-tmbmk9b2.js";import{ew,Z4}from"./chunk-mdw0rg7r.js";import{KRt}from"./chunk-fq2q5808.js";import{oR}from"./chunk-397dhf32.js";import{mAn}from"./chunk-09w4mwcd.js";import{her}from"./chunk-4ygxpva8.js";import{K1n}from"./chunk-v645gf7c.js";import{RB}from"./chunk-dsgxr2ng.js";import{createServer as f}from"net";function Lit(e,m,o){return new Promise((n,c)=>{let t=(r)=>{i.close(),c(r)},i=f((r)=>{let a="";r.setEncoding("utf8"),r.on("data",(d)=>{if(a+=d,o&&a.length>8388608){r.destroy();return}let p=a.indexOf(`
`);if(p<0)return;if(o){let s;try{s=V(a.slice(0,p))}catch{s=void 0}if(!s||!oR(s.auth,o)){r.destroy();return}i.close(),n(s);return}i.close();try{n(V(a.slice(0,p)))}catch(s){c(s)}}),r.on("error",o?()=>r.destroy():t)});if(i.on("error",t),m)i.once("listening",()=>{try{m()}catch(r){t(r)}});i.listen(e)})}async function $it(e,m){let o=await nd(e.cwd,void 0);sd(o);let n={originalCwd:o,projectRoot:o,cwd:o};if(e.sessionId)rf(Hm(e.sessionId),"spare_claim",null,n);else wst(n);if(nl(),cae(),Xtt(),U$n(),her(),LF({warm_spare_claimed:1}),He(e.env.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST)){for(let t of Object.keys(process.env))if(eIt(t)||t==="ANTHROPIC_CUSTOM_HEADERS"||tIt(t)||Xxe(t))delete process.env[t]}delete process.env.ANTHROPIC_AUTH_TOKEN,delete process.env.ANTHROPIC_API_KEY,delete process.env.CLAUDE_CODE_OAUTH_TOKEN,Object.assign(process.env,e.env),process.argv=[process.argv[0],process.argv[1],...e.argv],R$n(),await K1n(e.argv),BFn(),kPn(),KRt(),RB(),qje({preservePendingExposures:!0,preserveLoggedExposures:!0}),e1(),mAn(),Z4(),ew();let{main:c}=await m;await c()}
export{Lit,$it};
