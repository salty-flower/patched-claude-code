// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{mt,F}from"./chunk-vd0a9d2s.js";import{P,g,N}from"./chunk-f6geyac8.js";N();var Zbe="continue";function i$o(t,e,n){if(n&&e===Zbe&&t===Zbe+"/")return"/";if(e.startsWith("/")&&t.length===Zbe.length+e.length+1&&t.startsWith(Zbe+e))return t.slice(Zbe.length);return t}class o{lastResult=null;listeners=new Set;inFlight=null}var l=new mt(()=>new o);function i(){return l.of(F())}function v4n(t){let e=i();e.lastResult=t;for(let n of e.listeners)n(t)}function a$o(){return i().inFlight}function tFr(t){i().inFlight=t}function l$o(){v4n(null),i().inFlight=null}function nFr(){let[t,e]=g(()=>i().lastResult);return P(()=>{let n=i();return e(n.lastResult),n.listeners.add(e),()=>{n.listeners.delete(e)}},[]),t}
export{Zbe,i$o,v4n,a$o,tFr,l$o,nFr};
