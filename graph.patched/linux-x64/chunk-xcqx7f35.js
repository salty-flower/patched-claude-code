// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{Wt,U}from"./chunk-bj7g1p32.js";import{E,d,N}from"./chunk-vm1tjjym.js";N();var W6="continue";function t2n(t,e,n){if(n&&e===W6&&t===W6+"/")return"/";if(e.startsWith("/")&&t.length===W6.length+e.length+1&&t.startsWith(W6+e))return t.slice(W6.length);return t}class o{lastResult=null;listeners=new Set;inFlight=null}var l=new Wt(()=>new o);function i(){return l.of(U())}function FMt(t){let e=i();e.lastResult=t;for(let n of e.listeners)n(t)}function n2n(){return i().inFlight}function Qon(t){i().inFlight=t}function r2n(){FMt(null),i().inFlight=null}function Zon(){let[t,e]=d(()=>i().lastResult);return E(()=>{let n=i();return e(n.lastResult),n.listeners.add(e),()=>{n.listeners.delete(e)}},[]),t}
export{W6,t2n,FMt,n2n,Qon,r2n,Zon};
