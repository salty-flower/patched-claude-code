// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{yt,F}from"./chunk-8mvda08c.js";import{x,g,L}from"./chunk-bkksmm2y.js";L();var Y_e="continue";function pIo(t,e,n){if(n&&e===Y_e&&t===Y_e+"/")return"/";if(e.startsWith("/")&&t.length===Y_e.length+e.length+1&&t.startsWith(Y_e+e))return t.slice(Y_e.length);return t}class o{lastResult=null;listeners=new Set;inFlight=null}var l=new yt(()=>new o);function i(){return l.of(F())}function I6n(t){let e=i();e.lastResult=t;for(let n of e.listeners)n(t)}function fIo(){return i().inFlight}function PIr(t){i().inFlight=t}function mIo(){I6n(null),i().inFlight=null}function IIr(){let[t,e]=g(()=>i().lastResult);return x(()=>{let n=i();return e(n.lastResult),n.listeners.add(e),()=>{n.listeners.delete(e)}},[]),t}
export{Y_e,pIo,I6n,fIo,PIr,mIo,IIr};
