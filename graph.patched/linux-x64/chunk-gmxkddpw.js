// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{yt,F}from"./chunk-aywwjcwq.js";import{x,g,L}from"./chunk-1mwacejt.js";L();var W_e="continue";function RPo(t,e,n){if(n&&e===W_e&&t===W_e+"/")return"/";if(e.startsWith("/")&&t.length===W_e.length+e.length+1&&t.startsWith(W_e+e))return t.slice(W_e.length);return t}class o{lastResult=null;listeners=new Set;inFlight=null}var l=new yt(()=>new o);function i(){return l.of(F())}function d2n(t){let e=i();e.lastResult=t;for(let n of e.listeners)n(t)}function xPo(){return i().inFlight}function nIr(t){i().inFlight=t}function PPo(){d2n(null),i().inFlight=null}function rIr(){let[t,e]=g(()=>i().lastResult);return x(()=>{let n=i();return e(n.lastResult),n.listeners.add(e),()=>{n.listeners.delete(e)}},[]),t}
export{W_e,RPo,d2n,xPo,nIr,PPo,rIr};
