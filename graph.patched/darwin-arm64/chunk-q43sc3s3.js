// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{Fn,W}from"./chunk-g4zaymy2.js";import{E,u,N}from"./chunk-5752v0zq.js";N();var oJ="continue";function WLn(t,e,n){if(n&&e===oJ&&t===oJ+"/")return"/";if(e.startsWith("/")&&t.length===oJ.length+e.length+1&&t.startsWith(oJ+e))return t.slice(oJ.length);return t}class o{lastResult=null;listeners=new Set;inFlight=null}var l=new Fn(()=>new o);function i(){return l.of(W())}function Hxt(t){let e=i();e.lastResult=t;for(let n of e.listeners)n(t)}function gor(){return i().lastResult}function zLn(){return i().inFlight}function wXt(t){i().inFlight=t}function Dxt(){Hxt(null),i().inFlight=null}function grt(){let[t,e]=u(()=>i().lastResult);return E(()=>{let n=i();return e(n.lastResult),n.listeners.add(e),()=>{n.listeners.delete(e)}},[]),t}
export{oJ,WLn,Hxt,gor,zLn,wXt,Dxt,grt};
