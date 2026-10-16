// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{lt,j}from"./chunk-eqmywwjn.js";import{P,y,F}from"./chunk-zx300qjj.js";F();var cCe="continue";function mes(t,e,n){if(n&&e===cCe&&t===cCe+"/")return"/";if(e.startsWith("/")&&t.length===cCe.length+e.length+1&&t.startsWith(cCe+e))return t.slice(cCe.length);return t}class o{lastResult=null;listeners=new Set;inFlight=null}var l=new lt(()=>new o);function i(){return l.of(j())}function Tir(t){let e=i();e.lastResult=t;for(let n of e.listeners)n(t)}function ges(){return i().inFlight}function h9r(t){i().inFlight=t}function hes(){Tir(null),i().inFlight=null}function yes(){let[t,e]=y(()=>i().lastResult);return P(()=>{let n=i();return e(n.lastResult),n.listeners.add(e),()=>{n.listeners.delete(e)}},[]),t}
export{cCe,mes,Tir,ges,h9r,hes,yes};
