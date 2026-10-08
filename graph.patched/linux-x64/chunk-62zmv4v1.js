// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{mt,F}from"./chunk-g79wjybr.js";import{P,g,N}from"./chunk-y6zm4y48.js";N();var qSe="continue";function v$o(t,e,n){if(n&&e===qSe&&t===qSe+"/")return"/";if(e.startsWith("/")&&t.length===qSe.length+e.length+1&&t.startsWith(qSe+e))return t.slice(qSe.length);return t}class o{lastResult=null;listeners=new Set;inFlight=null}var l=new mt(()=>new o);function i(){return l.of(F())}function n6n(t){let e=i();e.lastResult=t;for(let n of e.listeners)n(t)}function E$o(){return i().inFlight}function CNr(t){i().inFlight=t}function k$o(){n6n(null),i().inFlight=null}function RNr(){let[t,e]=g(()=>i().lastResult);return P(()=>{let n=i();return e(n.lastResult),n.listeners.add(e),()=>{n.listeners.delete(e)}},[]),t}
export{qSe,v$o,n6n,E$o,CNr,k$o,RNr};
