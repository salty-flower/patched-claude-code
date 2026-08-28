// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{Nn,z}from"./chunk-2vv5hpw3.js";import{A,u,N}from"./chunk-q0z49y3j.js";N();var XX="continue";function IMn(t,e,n){if(n&&e===XX&&t===XX+"/")return"/";if(e.startsWith("/")&&t.length===XX.length+e.length+1&&t.startsWith(XX+e))return t.slice(XX.length);return t}class o{lastResult=null;listeners=new Set;inFlight=null}var l=new Nn(()=>new o);function i(){return l.of(z())}function Ext(t){let e=i();e.lastResult=t;for(let n of e.listeners)n(t)}function sor(){return i().lastResult}function RMn(){return i().inFlight}function rXt(t){i().inFlight=t}function Axt(){Ext(null),i().inFlight=null}function art(){let[t,e]=u(()=>i().lastResult);return A(()=>{let n=i();return e(n.lastResult),n.listeners.add(e),()=>{n.listeners.delete(e)}},[]),t}
export{XX,IMn,Ext,sor,RMn,rXt,Axt,art};
