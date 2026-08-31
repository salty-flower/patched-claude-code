// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{l,E}from"./chunk-qr1avfxy.js";import{b,V}from"./chunk-ynzt0fm1.js";import{ee}from"./chunk-z9mp80s2.js";import{ou,rre}from"./chunk-kqx0tzt6.js";import{p_,aI}from"./chunk-nmn4trrc.js";import{Ca}from"./chunk-nf1fwtrr.js";import{ent}from"./chunk-bhkxv0a6.js";import{connect as m}from"net";import{StringDecoder as N}from"string_decoder";async function Vp(f,a){let r;try{r=m(aI())}catch(t){return{ok:!1,code:"ENOCONN",error:p_(l(t)),errno:E(t)}}let o=a?.timeoutMs??5000,e,s=new Promise((t)=>{e=t}),u=!1,n=!1,d=(t)=>{if(u)return;u=!0,r.destroy(),e(t)};r.setTimeout(o,()=>d({ok:!1,code:"ETIMEOUT",error:"control socket timeout",connected:n})),r.on("error",(t)=>d({ok:!1,code:"ENOCONN",error:p_(l(t)),connected:n,errno:E(t)})),r.once("connect",()=>{n=!0,r.write(b(f)+`
`)});let c=new N("utf8"),i="";return r.on("data",(t)=>{i+=c.write(t);let p=i.indexOf(`
`);if(p<0)return;let C=i.slice(0,p);try{d(V(C))}catch(y){d({ok:!1,code:"ENOCONN",error:p_(l(y)),connected:n})}}),r.once("close",()=>{if(!u)d({ok:!1,code:"ENOCONN",error:"connection dropped mid-request \u2014 it may have restarted; retry",connected:n})}),s}function SBe(f){let a={label:f,cwd:ee(),pid:process.pid},r=!1,o=null,e=null,s=()=>{if(r)return;try{o=m(aI())}catch{o=null,e=setTimeout(s,1000),e.unref();return}o.on("error",()=>o?.destroy()),o.once("connect",()=>o?.write(b({proto:Ca,op:"lease",client:a})+`
`)),o.on("data",()=>{}),o.once("close",()=>{if(o=null,r)return;e=setTimeout(s,1000),e.unref()}),o.unref()};return s(),()=>{if(r=!0,e)clearTimeout(e);o?.destroy()}}function K7t(f,a,r,o){let e;try{e=m(aI())}catch(c){return queueMicrotask(()=>o(p_(l(c)))),()=>{}}let s=!1,u=!1,n=(c)=>{if(s)return;s=!0,o(c)};e.setTimeout(1e4,()=>{if(!u)n(`${ou()} did not respond \u2014 it may be stalled${rre("restart")}`),e.destroy()}),e.on("error",(c)=>n(p_(l(c)))),e.on("close",()=>n("control socket closed")),e.on("connect",()=>e.write(b({proto:Ca,op:"subscribe",short:f,tail:a})+`
`));let d=ent(e,(c)=>{if(!u)u=!0,e.setTimeout(0);try{let i=V(c);if("ok"in i&&i.ok===!1)n(i.error);else r(i)}catch{}});return()=>{s=!0,d(),e.destroy()}}
export{Vp,SBe,K7t};
