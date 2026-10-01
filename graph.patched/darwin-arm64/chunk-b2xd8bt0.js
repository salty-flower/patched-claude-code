// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{At,j}from"./chunk-a7cah040.js";import{T,g,M}from"./chunk-757fgf90.js";M();var kfe="continue";function hco(t,e,n){if(n&&e===kfe&&t===kfe+"/")return"/";if(e.startsWith("/")&&t.length===kfe.length+e.length+1&&t.startsWith(kfe+e))return t.slice(kfe.length);return t}class o{lastResult=null;listeners=new Set;inFlight=null}var l=new At(()=>new o);function i(){return l.of(j())}function iIn(t){let e=i();e.lastResult=t;for(let n of e.listeners)n(t)}function yco(){return i().inFlight}function dfr(t){i().inFlight=t}function _co(){iIn(null),i().inFlight=null}function ufr(){let[t,e]=g(()=>i().lastResult);return T(()=>{let n=i();return e(n.lastResult),n.listeners.add(e),()=>{n.listeners.delete(e)}},[]),t}
export{kfe,hco,iIn,yco,dfr,_co,ufr};
