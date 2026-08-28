// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{l,k}from"./chunk-7h2h1m4y.js";import{v,V}from"./chunk-akz0cj0f.js";import{te}from"./chunk-j0kxfsn8.js";import{Hc,Dee}from"./chunk-mvb1wx2t.js";import{Cg,Fx}from"./chunk-8a2wgwae.js";import{ta}from"./chunk-jdek2rwt.js";import{DQe}from"./chunk-h7kf6wj8.js";import{connect as m}from"net";import{StringDecoder as N}from"string_decoder";async function gp(f,a){let r;try{r=m(Fx())}catch(t){return{ok:!1,code:"ENOCONN",error:Cg(l(t)),errno:k(t)}}let o=a?.timeoutMs??5000,e,s=new Promise((t)=>{e=t}),u=!1,n=!1,d=(t)=>{if(u)return;u=!0,r.destroy(),e(t)};r.setTimeout(o,()=>d({ok:!1,code:"ETIMEOUT",error:"control socket timeout",connected:n})),r.on("error",(t)=>d({ok:!1,code:"ENOCONN",error:Cg(l(t)),connected:n,errno:k(t)})),r.once("connect",()=>{n=!0,r.write(v(f)+`
`)});let c=new N("utf8"),i="";return r.on("data",(t)=>{i+=c.write(t);let p=i.indexOf(`
`);if(p<0)return;let C=i.slice(0,p);try{d(V(C))}catch(y){d({ok:!1,code:"ENOCONN",error:Cg(l(y)),connected:n})}}),r.once("close",()=>{if(!u)d({ok:!1,code:"ENOCONN",error:"connection dropped mid-request \u2014 it may have restarted; retry",connected:n})}),s}function wNe(f){let a={label:f,cwd:te(),pid:process.pid},r=!1,o=null,e=null,s=()=>{if(r)return;try{o=m(Fx())}catch{o=null,e=setTimeout(s,1000),e.unref();return}o.on("error",()=>o?.destroy()),o.once("connect",()=>o?.write(v({proto:ta,op:"lease",client:a})+`
`)),o.on("data",()=>{}),o.once("close",()=>{if(o=null,r)return;e=setTimeout(s,1000),e.unref()}),o.unref()};return s(),()=>{if(r=!0,e)clearTimeout(e);o?.destroy()}}function MVt(f,a,r,o){let e;try{e=m(Fx())}catch(c){return queueMicrotask(()=>o(Cg(l(c)))),()=>{}}let s=!1,u=!1,n=(c)=>{if(s)return;s=!0,o(c)};e.setTimeout(1e4,()=>{if(!u)n(`${Hc()} did not respond \u2014 it may be stalled${Dee("restart")}`),e.destroy()}),e.on("error",(c)=>n(Cg(l(c)))),e.on("close",()=>n("control socket closed")),e.on("connect",()=>e.write(v({proto:ta,op:"subscribe",short:f,tail:a})+`
`));let d=DQe(e,(c)=>{if(!u)u=!0,e.setTimeout(0);try{let i=V(c);if("ok"in i&&i.ok===!1)n(i.error);else r(i)}catch{}});return()=>{s=!0,d(),e.destroy()}}
export{gp,wNe,MVt};
