// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{qt,B}from"./chunk-zhtwayh2.js";import{E,d,N}from"./chunk-jegfnmzv.js";N();var Q8="continue";function $6n(t,e,n){if(n&&e===Q8&&t===Q8+"/")return"/";if(e.startsWith("/")&&t.length===Q8.length+e.length+1&&t.startsWith(Q8+e))return t.slice(Q8.length);return t}class o{lastResult=null;listeners=new Set;inFlight=null}var l=new qt(()=>new o);function i(){return l.of(B())}function lNt(t){let e=i();e.lastResult=t;for(let n of e.listeners)n(t)}function U6n(){return i().inFlight}function xsn(t){i().inFlight=t}function B6n(){lNt(null),i().inFlight=null}function Hsn(){let[t,e]=d(()=>i().lastResult);return E(()=>{let n=i();return e(n.lastResult),n.listeners.add(e),()=>{n.listeners.delete(e)}},[]),t}
export{Q8,$6n,lNt,U6n,xsn,B6n,Hsn};
