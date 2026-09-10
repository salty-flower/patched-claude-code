// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{jm,pf,vat,eUn,t2n}from"./chunk-sgyvc67j.js";import{Ie}from"./chunk-8yfx63va.js";import{q,cd,B$n}from"./chunk-wbbe5mtc.js";import{LB,POn,H6e,qrt,rle}from"./chunk-e02s7cks.js";import{id}from"./chunk-2dxb0egv.js";import{il,_It,SIt,U0e}from"./chunk-ysx7ez10.js";import{l$}from"./chunk-rccvbg8v.js";import{CR}from"./chunk-3xk9xykm.js";import{aw,fq}from"./chunk-m6czhww2.js";import{QHt}from"./chunk-hfzdv02p.js";import{lRn}from"./chunk-qxtapejv.js";import{dor}from"./chunk-dakc16jy.js";import{pWn}from"./chunk-zx4xgtbs.js";import{cB}from"./chunk-nv42tykf.js";import{createServer as f}from"net";function Plt(e,m,o){return new Promise((n,c)=>{let t=(r)=>{i.close(),c(r)},i=f((r)=>{let a="";r.setEncoding("utf8"),r.on("data",(d)=>{if(a+=d,o&&a.length>8388608){r.destroy();return}let p=a.indexOf(`
`);if(p<0)return;if(o){let s;try{s=q(a.slice(0,p))}catch{s=void 0}if(!s||!CR(s.auth,o)){r.destroy();return}i.close(),n(s);return}i.close();try{n(q(a.slice(0,p)))}catch(s){c(s)}}),r.on("error",o?()=>r.destroy():t)});if(i.on("error",t),m)i.once("listening",()=>{try{m()}catch(r){t(r)}});i.listen(e)})}async function Ilt(e,m){let o=await id(e.cwd,void 0);cd(o);let n={originalCwd:o,projectRoot:o,cwd:o};if(e.sessionId)pf(jm(e.sessionId),"spare_claim",null,n);else vat(n);if(il(),rle(),qrt(),eUn(),dor(),l$({warm_spare_claimed:1}),Ie(e.env.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST)){for(let t of Object.keys(process.env))if(_It(t)||t==="ANTHROPIC_CUSTOM_HEADERS"||SIt(t)||U0e(t))delete process.env[t]}delete process.env.ANTHROPIC_AUTH_TOKEN,delete process.env.ANTHROPIC_API_KEY,delete process.env.CLAUDE_CODE_OAUTH_TOKEN,Object.assign(process.env,e.env),process.argv=[process.argv[0],process.argv[1],...e.argv],B$n(),await pWn(e.argv),t2n(),POn(),QHt(),cB(),H6e({preservePendingExposures:!0,preserveLoggedExposures:!0}),LB(),lRn(),fq(),aw();let{main:c}=await m;await c()}
export{Plt,Ilt};
