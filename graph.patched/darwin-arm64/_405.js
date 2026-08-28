// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{aJb as r,iJb as u,lJb as g}from"./_577.js";import{Hid as l,Iid as a,Jid as s,krd as h}from"./_812.js";import{Exd as p}from"./_839.js";function d(t,e,n){if(n&&e===o&&t===o+"/")return"/";if(e.startsWith("/")&&t.length===o.length+e.length+1&&t.startsWith(o+e))return t.slice(o.length);return t}class c{lastResult=null;listeners=new Set;inFlight=null}function i(){return R.of(s())}function k(t){let e=i();e.lastResult=t;for(let n of e.listeners)n(t)}function S(){return i().lastResult}function x(){return i().inFlight}function L(t){i().inFlight=t}function F(){k(null),i().inFlight=null}function w(){let[t,e]=u(()=>i().lastResult);return r(()=>{let n=i();return e(n.lastResult),n.listeners.add(e),()=>{n.listeners.delete(e)}},[]),t}var o="continue",R;var f=p(()=>{g();h();a();R=new l(()=>new c)});
export{o as SQ,d as TQ,k as UQ,S as VQ,x as WQ,L as XQ,F as YQ,w as ZQ,f as _Q};
