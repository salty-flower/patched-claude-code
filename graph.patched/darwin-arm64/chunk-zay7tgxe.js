// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{Qt,q}from"./chunk-yhfssb7x.js";import{C,p,j}from"./chunk-8wk5q2vw.js";j();var cX="continue";function pqn(t,e,n){if(n&&e===cX&&t===cX+"/")return"/";if(e.startsWith("/")&&t.length===cX.length+e.length+1&&t.startsWith(cX+e))return t.slice(cX.length);return t}class o{lastResult=null;listeners=new Set;inFlight=null}var l=new Qt(()=>new o);function i(){return l.of(q())}function A$t(t){let e=i();e.lastResult=t;for(let n of e.listeners)n(t)}function swr(){return i().lastResult}function fqn(){return i().inFlight}function Icn(t){i().inFlight=t}function C$t(){A$t(null),i().inFlight=null}function Jpt(){let[t,e]=p(()=>i().lastResult);return C(()=>{let n=i();return e(n.lastResult),n.listeners.add(e),()=>{n.listeners.delete(e)}},[]),t}
export{cX,pqn,A$t,swr,fqn,Icn,C$t,Jpt};
