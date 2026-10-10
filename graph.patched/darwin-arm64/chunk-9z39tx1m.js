// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{lt,B}from"./chunk-4bw62nzm.js";import{P,y,N}from"./chunk-kexg5hxg.js";N();var wve="continue";function k6o(t,e,n){if(n&&e===wve&&t===wve+"/")return"/";if(e.startsWith("/")&&t.length===wve.length+e.length+1&&t.startsWith(wve+e))return t.slice(wve.length);return t}class o{lastResult=null;listeners=new Set;inFlight=null}var l=new lt(()=>new o);function i(){return l.of(B())}function _7n(t){let e=i();e.lastResult=t;for(let n of e.listeners)n(t)}function A6o(){return i().inFlight}function J2r(t){i().inFlight=t}function C6o(){_7n(null),i().inFlight=null}function T6o(){let[t,e]=y(()=>i().lastResult);return P(()=>{let n=i();return e(n.lastResult),n.listeners.add(e),()=>{n.listeners.delete(e)}},[]),t}
export{wve,k6o,_7n,A6o,J2r,C6o,T6o};
