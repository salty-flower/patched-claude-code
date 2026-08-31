// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{Ln,G}from"./chunk-38213y7h.js";import{A,u,F}from"./chunk-w6mhhrt2.js";F();var RZ="continue";function kBn(t,e,n){if(n&&e===RZ&&t===RZ+"/")return"/";if(e.startsWith("/")&&t.length===RZ.length+e.length+1&&t.startsWith(RZ+e))return t.slice(RZ.length);return t}class o{lastResult=null;listeners=new Set;inFlight=null}var l=new Ln(()=>new o);function i(){return l.of(G())}function KDt(t){let e=i();e.lastResult=t;for(let n of e.listeners)n(t)}function dpr(){return i().lastResult}function HBn(){return i().inFlight}function wtn(t){i().inFlight=t}function XDt(){KDt(null),i().inFlight=null}function $st(){let[t,e]=u(()=>i().lastResult);return A(()=>{let n=i();return e(n.lastResult),n.listeners.add(e),()=>{n.listeners.delete(e)}},[]),t}
export{RZ,kBn,KDt,dpr,HBn,wtn,XDt,$st};
