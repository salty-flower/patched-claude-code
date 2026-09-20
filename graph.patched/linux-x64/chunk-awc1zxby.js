// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{zt,W}from"./chunk-txfrkyzp.js";import{k,d,L}from"./chunk-cf8g1269.js";L();var see="continue";function xar(t,e,n){if(n&&e===see&&t===see+"/")return"/";if(e.startsWith("/")&&t.length===see.length+e.length+1&&t.startsWith(see+e))return t.slice(see.length);return t}class o{lastResult=null;listeners=new Set;inFlight=null}var l=new zt(()=>new o);function i(){return l.of(W())}function t3t(t){let e=i();e.lastResult=t;for(let n of e.listeners)n(t)}function Iar(){return i().inFlight}function pkn(t){i().inFlight=t}function Par(){t3t(null),i().inFlight=null}function fkn(){let[t,e]=d(()=>i().lastResult);return k(()=>{let n=i();return e(n.lastResult),n.listeners.add(e),()=>{n.listeners.delete(e)}},[]),t}
export{see,xar,t3t,Iar,pkn,Par,fkn};
