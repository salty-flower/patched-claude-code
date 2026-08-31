// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{l,E}from"./chunk-efckqwp7.js";import{S,q}from"./chunk-d0cr5d2v.js";import{ee}from"./chunk-q2grjtpb.js";import{ou,ere}from"./chunk-zkmsnx9j.js";import{dy,rL}from"./chunk-qq8v5dsq.js";import{va}from"./chunk-c5847t4t.js";import{lnt}from"./chunk-5h3kvsnq.js";import{connect as m}from"net";import{StringDecoder as N}from"string_decoder";async function Kf(f,a){let r;try{r=m(rL())}catch(t){return{ok:!1,code:"ENOCONN",error:dy(l(t)),errno:E(t)}}let o=a?.timeoutMs??5000,e,s=new Promise((t)=>{e=t}),u=!1,n=!1,d=(t)=>{if(u)return;u=!0,r.destroy(),e(t)};r.setTimeout(o,()=>d({ok:!1,code:"ETIMEOUT",error:"control socket timeout",connected:n})),r.on("error",(t)=>d({ok:!1,code:"ENOCONN",error:dy(l(t)),connected:n,errno:E(t)})),r.once("connect",()=>{n=!0,r.write(S(f)+`
`)});let c=new N("utf8"),i="";return r.on("data",(t)=>{i+=c.write(t);let p=i.indexOf(`
`);if(p<0)return;let C=i.slice(0,p);try{d(q(C))}catch(y){d({ok:!1,code:"ENOCONN",error:dy(l(y)),connected:n})}}),r.once("close",()=>{if(!u)d({ok:!1,code:"ENOCONN",error:"connection dropped mid-request \u2014 it may have restarted; retry",connected:n})}),s}function TUe(f){let a={label:f,cwd:ee(),pid:process.pid},r=!1,o=null,e=null,s=()=>{if(r)return;try{o=m(rL())}catch{o=null,e=setTimeout(s,1000),e.unref();return}o.on("error",()=>o?.destroy()),o.once("connect",()=>o?.write(S({proto:va,op:"lease",client:a})+`
`)),o.on("data",()=>{}),o.once("close",()=>{if(o=null,r)return;e=setTimeout(s,1000),e.unref()}),o.unref()};return s(),()=>{if(r=!0,e)clearTimeout(e);o?.destroy()}}function uXt(f,a,r,o){let e;try{e=m(rL())}catch(c){return queueMicrotask(()=>o(dy(l(c)))),()=>{}}let s=!1,u=!1,n=(c)=>{if(s)return;s=!0,o(c)};e.setTimeout(1e4,()=>{if(!u)n(`${ou()} did not respond \u2014 it may be stalled${ere("restart")}`),e.destroy()}),e.on("error",(c)=>n(dy(l(c)))),e.on("close",()=>n("control socket closed")),e.on("connect",()=>e.write(S({proto:va,op:"subscribe",short:f,tail:a})+`
`));let d=lnt(e,(c)=>{if(!u)u=!0,e.setTimeout(0);try{let i=q(c);if("ok"in i&&i.ok===!1)n(i.error);else r(i)}catch{}});return()=>{s=!0,d(),e.destroy()}}
export{Kf,TUe,uXt};
