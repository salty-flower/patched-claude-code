// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{Wt,B}from"./chunk-6n7yk222.js";import{v,d,L}from"./chunk-kt4npzgg.js";L();var rJ="continue";function k5n(t,e,n){if(n&&e===rJ&&t===rJ+"/")return"/";if(e.startsWith("/")&&t.length===rJ.length+e.length+1&&t.startsWith(rJ+e))return t.slice(rJ.length);return t}class o{lastResult=null;listeners=new Set;inFlight=null}var l=new Wt(()=>new o);function i(){return l.of(B())}function Yjt(t){let e=i();e.lastResult=t;for(let n of e.listeners)n(t)}function A5n(){return i().inFlight}function Vpn(t){i().inFlight=t}function T5n(){Yjt(null),i().inFlight=null}function Kpn(){let[t,e]=d(()=>i().lastResult);return v(()=>{let n=i();return e(n.lastResult),n.listeners.add(e),()=>{n.listeners.delete(e)}},[]),t}
export{rJ,k5n,Yjt,A5n,Vpn,T5n,Kpn};
