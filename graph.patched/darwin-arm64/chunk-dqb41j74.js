// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{Gt,B}from"./chunk-cet8na02.js";import{E,d,N}from"./chunk-w8p0f9k6.js";N();var q7="continue";function lqn(t,e,n){if(n&&e===q7&&t===q7+"/")return"/";if(e.startsWith("/")&&t.length===q7.length+e.length+1&&t.startsWith(q7+e))return t.slice(q7.length);return t}class o{lastResult=null;listeners=new Set;inFlight=null}var l=new Gt(()=>new o);function i(){return l.of(B())}function pBt(t){let e=i();e.lastResult=t;for(let n of e.listeners)n(t)}function cqn(){return i().inFlight}function rdn(t){i().inFlight=t}function uqn(){pBt(null),i().inFlight=null}function odn(){let[t,e]=d(()=>i().lastResult);return E(()=>{let n=i();return e(n.lastResult),n.listeners.add(e),()=>{n.listeners.delete(e)}},[]),t}
export{q7,lqn,pBt,cqn,rdn,uqn,odn};
