// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{td,tp,urt,b0n,hMn}from"./chunk-x1rrg5j2.js";import{$e}from"./chunk-jdw11prg.js";import{Y,ed,a0n}from"./chunk-fzpv8ev5.js";import{A1,WTn,z1e,$Ze,ase}from"./chunk-x722nt0q.js";import{_l}from"./chunk-vdqz95a3.js";import{ec,dTt,fTt,UCe}from"./chunk-mzmfq60a.js";import{x$}from"./chunk-0dkpd8qq.js";import{JA,BK}from"./chunk-77152aqa.js";import{WTt}from"./chunk-5t2g7ar8.js";import{BT}from"./chunk-55t63zqr.js";import{LAn}from"./chunk-6dcxrmbt.js";import{cZn}from"./chunk-1kx3xrw0.js";import{CFn}from"./chunk-dt23tfmp.js";import{_1}from"./chunk-y0c7xssj.js";import{createServer as f}from"net";function Aot(e,m,o){return new Promise((n,c)=>{let t=(r)=>{i.close(),c(r)},i=f((r)=>{let a="";r.setEncoding("utf8"),r.on("data",(d)=>{if(a+=d,o&&a.length>8388608){r.destroy();return}let p=a.indexOf(`
`);if(p<0)return;if(o){let s;try{s=Y(a.slice(0,p))}catch{s=void 0}if(!s||!BT(s.auth,o)){r.destroy();return}i.close(),n(s);return}i.close();try{n(Y(a.slice(0,p)))}catch(s){c(s)}}),r.on("error",o?()=>r.destroy():t)});if(i.on("error",t),m)i.once("listening",()=>{try{m()}catch(r){t(r)}});i.listen(e)})}async function vot(e,m){let o=await _l(e.cwd,void 0);ed(o);let n={originalCwd:o,projectRoot:o,cwd:o};if(e.sessionId)tp(td(e.sessionId),"spare_claim",null,n);else urt(n);if(ec(),ase(),$Ze(),b0n(),cZn(),x$({warm_spare_claimed:1}),$e(e.env.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST)){for(let t of Object.keys(process.env))if(dTt(t)||t==="ANTHROPIC_CUSTOM_HEADERS"||fTt(t)||UCe(t))delete process.env[t]}delete process.env.ANTHROPIC_AUTH_TOKEN,delete process.env.ANTHROPIC_API_KEY,delete process.env.CLAUDE_CODE_OAUTH_TOKEN,Object.assign(process.env,e.env),process.argv=[process.argv[0],process.argv[1],...e.argv],a0n(),await CFn(e.argv),hMn(),WTn(),WTt(),_1(),z1e({preservePendingExposures:!0,preserveLoggedExposures:!0}),A1(),LAn(),BK(),JA();let{main:c}=await m;await c()}
export{Aot,vot};
