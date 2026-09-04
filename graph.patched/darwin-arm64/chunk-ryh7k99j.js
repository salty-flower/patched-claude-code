// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{nd,ef,Crt,GDn,BMn}from"./chunk-yhfssb7x.js";import{De}from"./chunk-h4q6j5r2.js";import{X,td,PDn}from"./chunk-84crg0gy.js";import{IU,lkn,eBe,qZe,gse}from"./chunk-vtwn1md5.js";import{yl}from"./chunk-h9sag63s.js";import{Ql,hRt,_Rt,Wke}from"./chunk-v3s7w1dm.js";import{FL}from"./chunk-t25bg6a5.js";import{eC,Xq}from"./chunk-6abf03hf.js";import{okt}from"./chunk-0e339jxb.js";import{VR}from"./chunk-pdyqxame.js";import{JAn}from"./chunk-49bh520p.js";import{PZn}from"./chunk-wsapbag1.js";import{YFn}from"./chunk-navgvrne.js";import{CU}from"./chunk-t7m31gqb.js";import{createServer as f}from"net";function Dot(e,m,o){return new Promise((n,c)=>{let t=(r)=>{i.close(),c(r)},i=f((r)=>{let a="";r.setEncoding("utf8"),r.on("data",(d)=>{if(a+=d,o&&a.length>8388608){r.destroy();return}let p=a.indexOf(`
`);if(p<0)return;if(o){let s;try{s=X(a.slice(0,p))}catch{s=void 0}if(!s||!VR(s.auth,o)){r.destroy();return}i.close(),n(s);return}i.close();try{n(X(a.slice(0,p)))}catch(s){c(s)}}),r.on("error",o?()=>r.destroy():t)});if(i.on("error",t),m)i.once("listening",()=>{try{m()}catch(r){t(r)}});i.listen(e)})}async function Lot(e,m){let o=await yl(e.cwd,void 0);td(o);let n={originalCwd:o,projectRoot:o,cwd:o};if(e.sessionId)ef(nd(e.sessionId),"spare_claim",null,n);else Crt(n);if(Ql(),gse(),qZe(),GDn(),PZn(),FL({warm_spare_claimed:1}),De(e.env.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST)){for(let t of Object.keys(process.env))if(hRt(t)||t==="ANTHROPIC_CUSTOM_HEADERS"||_Rt(t)||Wke(t))delete process.env[t]}delete process.env.ANTHROPIC_AUTH_TOKEN,delete process.env.ANTHROPIC_API_KEY,delete process.env.CLAUDE_CODE_OAUTH_TOKEN,Object.assign(process.env,e.env),process.argv=[process.argv[0],process.argv[1],...e.argv],PDn(),await YFn(e.argv),BMn(),lkn(),okt(),CU(),eBe({preservePendingExposures:!0,preserveLoggedExposures:!0}),IU(),JAn(),Xq(),eC();let{main:c}=await m;await c()}
export{Dot,Lot};
