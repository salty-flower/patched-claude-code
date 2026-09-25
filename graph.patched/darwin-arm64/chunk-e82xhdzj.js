// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{Ot,W}from"./chunk-s8xs8s76.js";import{k,g,L}from"./chunk-1cnhgfv0.js";L();var Mle="continue";function s6r(t,e,n){if(n&&e===Mle&&t===Mle+"/")return"/";if(e.startsWith("/")&&t.length===Mle.length+e.length+1&&t.startsWith(Mle+e))return t.slice(Mle.length);return t}class o{lastResult=null;listeners=new Set;inFlight=null}var l=new Ot(()=>new o);function i(){return l.of(W())}function Zmn(t){let e=i();e.lastResult=t;for(let n of e.listeners)n(t)}function i6r(){return i().inFlight}function n5n(t){i().inFlight=t}function a6r(){Zmn(null),i().inFlight=null}function r5n(){let[t,e]=g(()=>i().lastResult);return k(()=>{let n=i();return e(n.lastResult),n.listeners.add(e),()=>{n.listeners.delete(e)}},[]),t}
export{Mle,s6r,Zmn,i6r,n5n,a6r,r5n};
