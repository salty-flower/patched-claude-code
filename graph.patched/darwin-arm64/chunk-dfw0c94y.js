// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{jt,z}from"./chunk-sgamszzq.js";import{A,d,M}from"./chunk-ncc6kxz8.js";M();var yee="continue";function Qlr(t,e,n){if(n&&e===yee&&t===yee+"/")return"/";if(e.startsWith("/")&&t.length===yee.length+e.length+1&&t.startsWith(yee+e))return t.slice(yee.length);return t}class o{lastResult=null;listeners=new Set;inFlight=null}var l=new jt(()=>new o);function i(){return l.of(z())}function Vqt(t){let e=i();e.lastResult=t;for(let n of e.listeners)n(t)}function Zlr(){return i().inFlight}function aCn(t){i().inFlight=t}function ecr(){Vqt(null),i().inFlight=null}function lCn(){let[t,e]=d(()=>i().lastResult);return A(()=>{let n=i();return e(n.lastResult),n.listeners.add(e),()=>{n.listeners.delete(e)}},[]),t}
export{yee,Qlr,Vqt,Zlr,aCn,ecr,lCn};
