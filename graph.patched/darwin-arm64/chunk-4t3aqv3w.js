// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{l,C}from"./chunk-rgs4nrpq.js";import{b,q}from"./chunk-wbbe5mtc.js";import{Q}from"./chunk-8hm57jxw.js";import{Kc,TZ}from"./chunk-yt29e1qq.js";import{$y,QI}from"./chunk-kvspvsak.js";import{Ha}from"./chunk-nhz30e6h.js";import{Uut}from"./chunk-ked1e5ey.js";import{connect as m}from"net";import{StringDecoder as k}from"string_decoder";async function gf(f,a){let r;try{r=m(QI())}catch(t){return{ok:!1,code:"ENOCONN",error:$y(l(t)),errno:C(t)}}let o=a?.timeoutMs??5000,e,s=new Promise((t)=>{e=t}),u=!1,n=!1,d=(t)=>{if(u)return;u=!0,r.destroy(),e(t)};r.setTimeout(o,()=>d({ok:!1,code:"ETIMEOUT",error:"control socket timeout",connected:n})),r.on("error",(t)=>d({ok:!1,code:"ENOCONN",error:$y(l(t)),connected:n,errno:C(t)})),r.once("connect",()=>{n=!0,r.write(b(f)+`
`)});let c=new k("utf8"),i="";return r.on("data",(t)=>{i+=c.write(t);let p=i.indexOf(`
`);if(p<0)return;let y=i.slice(0,p);try{d(q(y))}catch(N){d({ok:!1,code:"ENOCONN",error:$y(l(N)),connected:n})}}),r.once("close",()=>{if(!u)d({ok:!1,code:"ENOCONN",error:"connection dropped mid-request \u2014 it may have restarted; retry",connected:n})}),s}function kVe(f){let a={label:f,cwd:Q(),pid:process.pid},r=!1,o=null,e=null,s=()=>{if(r)return;try{o=m(QI())}catch{o=null,e=setTimeout(s,1000),e.unref();return}o.on("error",()=>o?.destroy()),o.once("connect",()=>o?.write(b({proto:Ha,op:"lease",client:a})+`
`)),o.on("data",()=>{}),o.once("close",()=>{if(o=null,r)return;e=setTimeout(s,1000),e.unref()}),o.unref()};return s(),()=>{if(r=!0,e)clearTimeout(e);o?.destroy()}}function Osn(f,a,r,o){let e;try{e=m(QI())}catch(c){return queueMicrotask(()=>o($y(l(c)))),()=>{}}let s=!1,u=!1,n=(c)=>{if(s)return;s=!0,o(c)};e.setTimeout(1e4,()=>{if(!u)n(`${Kc()} did not respond \u2014 it may be stalled${TZ("restart")}`),e.destroy()}),e.on("error",(c)=>n($y(l(c)))),e.on("close",()=>n("control socket closed")),e.on("connect",()=>e.write(b({proto:Ha,op:"subscribe",short:f,tail:a})+`
`));let d=Uut(e,(c)=>{if(!u)u=!0,e.setTimeout(0);try{let i=q(c);if("ok"in i&&i.ok===!1)n(i.error);else r(i)}catch{}});return()=>{s=!0,d(),e.destroy()}}
export{gf,kVe,Osn};
