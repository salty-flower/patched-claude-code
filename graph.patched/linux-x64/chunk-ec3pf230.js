// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{F}from"./chunk-r3adsed5.js";import{M,y,j}from"./chunk-mp0bjfh5.js";import{qe}from"./chunk-2xv5yvxr.js";j();var TVe="continue";function _Fi(t,e,n){if(n&&e===TVe&&t===TVe+"/")return"/";if(e.startsWith("/")&&t.length===TVe.length+e.length+1&&t.startsWith(TVe+e))return t.slice(TVe.length);return t}class o{lastResult=null;listeners=new Set;inFlight=null}var l=new qe(()=>new o);function i(){return l.of(F())}function kco(t){let e=i();e.lastResult=t;for(let n of e.listeners)n(t)}function yFi(){return i().inFlight}function Nfs(t){i().inFlight=t}function bFi(){kco(null),i().inFlight=null}function SFi(){let[t,e]=y(()=>i().lastResult);return M(()=>{let n=i();return e(n.lastResult),n.listeners.add(e),()=>{n.listeners.delete(e)}},[]),t}
export{TVe,_Fi,kco,yFi,Nfs,bFi,SFi};
