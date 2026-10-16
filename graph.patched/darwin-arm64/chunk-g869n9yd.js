// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{lt,j}from"./chunk-xzypj06m.js";import{P,y,F}from"./chunk-57p87fb1.js";F();var bTe="continue";function Zes(t,e,n){if(n&&e===bTe&&t===bTe+"/")return"/";if(e.startsWith("/")&&t.length===bTe.length+e.length+1&&t.startsWith(bTe+e))return t.slice(bTe.length);return t}class o{lastResult=null;listeners=new Set;inFlight=null}var l=new lt(()=>new o);function i(){return l.of(j())}function sar(t){let e=i();e.lastResult=t;for(let n of e.listeners)n(t)}function ets(){return i().inFlight}function QYr(t){i().inFlight=t}function tts(){sar(null),i().inFlight=null}function nts(){let[t,e]=y(()=>i().lastResult);return P(()=>{let n=i();return e(n.lastResult),n.listeners.add(e),()=>{n.listeners.delete(e)}},[]),t}
export{bTe,Zes,sar,ets,QYr,tts,nts};
