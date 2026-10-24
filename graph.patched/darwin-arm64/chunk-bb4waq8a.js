// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{nt,U}from"./chunk-ersar6wn.js";import{P,y,j}from"./chunk-s8vmszp2.js";j();var VIe="continue";function _Cs(t,e,n){if(n&&e===VIe&&t===VIe+"/")return"/";if(e.startsWith("/")&&t.length===VIe.length+e.length+1&&t.startsWith(VIe+e))return t.slice(VIe.length);return t}class o{lastResult=null;listeners=new Set;inFlight=null}var l=new nt(()=>new o);function i(){return l.of(U())}function mvr(t){let e=i();e.lastResult=t;for(let n of e.listeners)n(t)}function SCs(){return i().inFlight}function cgo(t){i().inFlight=t}function bCs(){mvr(null),i().inFlight=null}function wCs(){let[t,e]=y(()=>i().lastResult);return P(()=>{let n=i();return e(n.lastResult),n.listeners.add(e),()=>{n.listeners.delete(e)}},[]),t}
export{VIe,_Cs,mvr,SCs,cgo,bCs,wCs};
