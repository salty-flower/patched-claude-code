// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{l,C}from"./chunk-qq9jq5dz.js";import{w,X}from"./chunk-qmm87fyw.js";import{te}from"./chunk-033exrv9.js";import{$u,Poe}from"./chunk-79pxazh1.js";import{uS,FL}from"./chunk-82vfhbyv.js";import{cl}from"./chunk-fpdh0w7q.js";import{yEt}from"./chunk-yjdmtaxp.js";import{connect as m}from"net";import{StringDecoder as b}from"string_decoder";async function bm(f,a){let r;try{r=m(FL())}catch(t){return{ok:!1,code:"ENOCONN",error:uS(l(t)),errno:C(t)}}let o=a?.timeoutMs??5000,e,s=new Promise((t)=>{e=t}),u=!1,n=!1,d=(t)=>{if(u)return;u=!0,r.destroy(),e(t)};r.setTimeout(o,()=>d({ok:!1,code:"ETIMEOUT",error:"control socket timeout",connected:n})),r.on("error",(t)=>d({ok:!1,code:"ENOCONN",error:uS(l(t)),connected:n,errno:C(t)})),r.once("connect",()=>{n=!0,r.write(w(f)+`
`)});let c=new b("utf8"),i="";return r.on("data",(t)=>{i+=c.write(t);let p=i.indexOf(`
`);if(p<0)return;let y=i.slice(0,p);try{d(X(y))}catch(N){d({ok:!1,code:"ENOCONN",error:uS(l(N)),connected:n})}}),r.once("close",()=>{if(!u)d({ok:!1,code:"ENOCONN",error:"connection dropped mid-request \u2014 it may have restarted; retry",connected:n})}),s}function EXe(f){let a={label:f,cwd:te(),pid:process.pid},r=!1,o=null,e=null,s=()=>{if(r)return;try{o=m(FL())}catch{o=null,e=setTimeout(s,1000),e.unref();return}o.on("error",()=>o?.destroy()),o.once("connect",()=>o?.write(w({proto:cl,op:"lease",client:a})+`
`)),o.on("data",()=>{}),o.once("close",()=>{if(o=null,r)return;e=setTimeout(s,1000),e.unref()}),o.unref()};return s(),()=>{if(r=!0,e)clearTimeout(e);o?.destroy()}}function ZEn(f,a,r,o){let e;try{e=m(FL())}catch(c){return queueMicrotask(()=>o(uS(l(c)))),()=>{}}let s=!1,u=!1,n=(c)=>{if(s)return;s=!0,o(c)};e.setTimeout(1e4,()=>{if(!u)n(`${$u()} did not respond \u2014 it may be stalled${Poe("restart")}`),e.destroy()}),e.on("error",(c)=>n(uS(l(c)))),e.on("close",()=>n("control socket closed")),e.on("connect",()=>e.write(w({proto:cl,op:"subscribe",short:f,tail:a})+`
`));let d=yEt(e,(c)=>{if(!u)u=!0,e.setTimeout(0);try{let i=X(c);if("ok"in i&&i.ok===!1)n(i.error);else r(i)}catch{}});return()=>{s=!0,d(),e.destroy()}}
export{bm,EXe,ZEn};
