// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{l,A}from"./chunk-59zxrwfh.js";import{S,V}from"./chunk-cmg3b5hg.js";import{Q}from"./chunk-03bbjp25.js";import{Vc,bZ}from"./chunk-pqa5arem.js";import{Ly,B0}from"./chunk-5en77w10.js";import{Ia}from"./chunk-f4v140c7.js";import{Out}from"./chunk-hh9qmn7h.js";import{connect as m}from"net";import{StringDecoder as N}from"string_decoder";async function gf(f,a){let r;try{r=m(B0())}catch(t){return{ok:!1,code:"ENOCONN",error:Ly(l(t)),errno:A(t)}}let o=a?.timeoutMs??5000,e,s=new Promise((t)=>{e=t}),u=!1,n=!1,d=(t)=>{if(u)return;u=!0,r.destroy(),e(t)};r.setTimeout(o,()=>d({ok:!1,code:"ETIMEOUT",error:"control socket timeout",connected:n})),r.on("error",(t)=>d({ok:!1,code:"ENOCONN",error:Ly(l(t)),connected:n,errno:A(t)})),r.once("connect",()=>{n=!0,r.write(S(f)+`
`)});let c=new N("utf8"),i="";return r.on("data",(t)=>{i+=c.write(t);let p=i.indexOf(`
`);if(p<0)return;let C=i.slice(0,p);try{d(V(C))}catch(y){d({ok:!1,code:"ENOCONN",error:Ly(l(y)),connected:n})}}),r.once("close",()=>{if(!u)d({ok:!1,code:"ENOCONN",error:"connection dropped mid-request \u2014 it may have restarted; retry",connected:n})}),s}function kKe(f){let a={label:f,cwd:Q(),pid:process.pid},r=!1,o=null,e=null,s=()=>{if(r)return;try{o=m(B0())}catch{o=null,e=setTimeout(s,1000),e.unref();return}o.on("error",()=>o?.destroy()),o.once("connect",()=>o?.write(S({proto:Ia,op:"lease",client:a})+`
`)),o.on("data",()=>{}),o.once("close",()=>{if(o=null,r)return;e=setTimeout(s,1000),e.unref()}),o.unref()};return s(),()=>{if(r=!0,e)clearTimeout(e);o?.destroy()}}function Asn(f,a,r,o){let e;try{e=m(B0())}catch(c){return queueMicrotask(()=>o(Ly(l(c)))),()=>{}}let s=!1,u=!1,n=(c)=>{if(s)return;s=!0,o(c)};e.setTimeout(1e4,()=>{if(!u)n(`${Vc()} did not respond \u2014 it may be stalled${bZ("restart")}`),e.destroy()}),e.on("error",(c)=>n(Ly(l(c)))),e.on("close",()=>n("control socket closed")),e.on("connect",()=>e.write(S({proto:Ia,op:"subscribe",short:f,tail:a})+`
`));let d=Out(e,(c)=>{if(!u)u=!0,e.setTimeout(0);try{let i=V(c);if("ok"in i&&i.ok===!1)n(i.error);else r(i)}catch{}});return()=>{s=!0,d(),e.destroy()}}
export{gf,kKe,Asn};
