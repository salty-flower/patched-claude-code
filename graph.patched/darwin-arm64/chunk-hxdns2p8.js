// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{on,G}from"./chunk-hdbxv3pp.js";import{C,d,j}from"./chunk-xyxaqzpf.js";j();var E7="continue";function JWn(t,e,n){if(n&&e===E7&&t===E7+"/")return"/";if(e.startsWith("/")&&t.length===E7.length+e.length+1&&t.startsWith(E7+e))return t.slice(E7.length);return t}class o{lastResult=null;listeners=new Set;inFlight=null}var l=new on(()=>new o);function i(){return l.of(G())}function t1t(t){let e=i();e.lastResult=t;for(let n of e.listeners)n(t)}function y_r(){return i().lastResult}function QWn(){return i().inFlight}function Isn(t){i().inFlight=t}function n1t(){t1t(null),i().inFlight=null}function rdt(){let[t,e]=d(()=>i().lastResult);return C(()=>{let n=i();return e(n.lastResult),n.listeners.add(e),()=>{n.listeners.delete(e)}},[]),t}
export{E7,JWn,t1t,y_r,QWn,Isn,n1t,rdt};
