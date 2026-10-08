// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{K,rEr,W$e}from"./chunk-g79wjybr.js";import{vBn}from"./chunk-gwj7v27h.js";import{we}from"./chunk-4z5wz91m.js";import{join as i}from"path";function P0(){return W$e()??i(FZr(),K())}function FZr(){return i(we(),"uploads")}function QRn(t,e){return`${t}-${u(e)}`}var s=/^[A-Za-z0-9_-]{8}-/;function o(t){return vBn(t.replace(/_+$/,""))}function u(t){return o(t)?t+"_":t}function jns(t){let e=t.replace(s,"");if(e.endsWith("_")&&o(e))return e.slice(0,-1);return e||t}var c=1024;function Wns(t,e){let n=rEr();if(!n.has(t)&&n.size>=c){let r=n.keys().next().value;if(r!==void 0)n.delete(r)}n.set(t,e)}function F4t(t){return rEr().get(t)}
export{P0,FZr,QRn,jns,Wns,F4t};
