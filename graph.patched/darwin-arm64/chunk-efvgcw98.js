// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{zt,B}from"./chunk-sgyvc67j.js";import{E,d,M}from"./chunk-xgsrj7pc.js";M();var dX="continue";function t5n(t,e,n){if(n&&e===dX&&t===dX+"/")return"/";if(e.startsWith("/")&&t.length===dX.length+e.length+1&&t.startsWith(dX+e))return t.slice(dX.length);return t}class o{lastResult=null;listeners=new Set;inFlight=null}var l=new zt(()=>new o);function i(){return l.of(B())}function pjt(t){let e=i();e.lastResult=t;for(let n of e.listeners)n(t)}function n5n(){return i().inFlight}function yfn(t){i().inFlight=t}function r5n(){pjt(null),i().inFlight=null}function _fn(){let[t,e]=d(()=>i().lastResult);return E(()=>{let n=i();return e(n.lastResult),n.listeners.add(e),()=>{n.listeners.delete(e)}},[]),t}
export{dX,t5n,pjt,n5n,yfn,r5n,_fn};
