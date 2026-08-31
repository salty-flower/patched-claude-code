// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{$n,W}from"./chunk-30zk17wm.js";import{A,u,F}from"./chunk-v59pjxqq.js";F();var CZ="continue";function NUn(t,e,n){if(n&&e===CZ&&t===CZ+"/")return"/";if(e.startsWith("/")&&t.length===CZ.length+e.length+1&&t.startsWith(CZ+e))return t.slice(CZ.length);return t}class o{lastResult=null;listeners=new Set;inFlight=null}var l=new $n(()=>new o);function i(){return l.of(W())}function lDt(t){let e=i();e.lastResult=t;for(let n of e.listeners)n(t)}function pfr(){return i().lastResult}function FUn(){return i().inFlight}function Ftn(t){i().inFlight=t}function cDt(){lDt(null),i().inFlight=null}function Kst(){let[t,e]=u(()=>i().lastResult);return A(()=>{let n=i();return e(n.lastResult),n.listeners.add(e),()=>{n.listeners.delete(e)}},[]),t}
export{CZ,NUn,lDt,pfr,FUn,Ftn,cDt,Kst};
