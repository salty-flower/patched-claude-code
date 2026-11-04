// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{F}from"./chunk-ecyypctx.js";import{M,y,j}from"./chunk-rt5zqm44.js";import{Je}from"./chunk-k6s5je75.js";j();var nUe="continue";function lti(t,e,n){if(n&&e===nUe&&t===nUe+"/")return"/";if(e.startsWith("/")&&t.length===nUe.length+e.length+1&&t.startsWith(nUe+e))return t.slice(nUe.length);return t}class o{lastResult=null;listeners=new Set;inFlight=null}var l=new Je(()=>new o);function i(){return l.of(F())}function vVr(t){let e=i();e.lastResult=t;for(let n of e.listeners)n(t)}function dti(){return i().inFlight}function MGo(t){i().inFlight=t}function cti(){vVr(null),i().inFlight=null}function uti(){let[t,e]=y(()=>i().lastResult);return M(()=>{let n=i();return e(n.lastResult),n.listeners.add(e),()=>{n.listeners.delete(e)}},[]),t}
export{nUe,lti,vVr,dti,MGo,cti,uti};
