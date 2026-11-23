// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{F}from"./chunk-m8nhymg4.js";import{M,y,j}from"./chunk-07a1744w.js";import{qe}from"./chunk-hqh4zzjp.js";j();var Pze="continue";function VFi(t,e,n){if(n&&e===Pze&&t===Pze+"/")return"/";if(e.startsWith("/")&&t.length===Pze.length+e.length+1&&t.startsWith(Pze+e))return t.slice(Pze.length);return t}class o{lastResult=null;listeners=new Set;inFlight=null}var l=new qe(()=>new o);function i(){return l.of(F())}function Gco(t){let e=i();e.lastResult=t;for(let n of e.listeners)n(t)}function qFi(){return i().inFlight}function cps(t){i().inFlight=t}function KFi(){Gco(null),i().inFlight=null}function YFi(){let[t,e]=y(()=>i().lastResult);return M(()=>{let n=i();return e(n.lastResult),n.listeners.add(e),()=>{n.listeners.delete(e)}},[]),t}
export{Pze,VFi,Gco,qFi,cps,KFi,YFi};
