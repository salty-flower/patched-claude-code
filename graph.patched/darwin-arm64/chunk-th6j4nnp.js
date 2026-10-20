// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{K,_zr,Zye,D6e}from"./chunk-kpqr86hf.js";import{dtr}from"./chunk-f66mhvm1.js";import{Me}from"./chunk-jrcdjayr.js";import{kan}from"./chunk-e72wd94x.js";import{join as i}from"path";function zL(){return Zye()??i(D6e()??HOr(),K())}function HOr(){return i(Me(),"uploads")}function D6n(){return[HOr(),D6e()??kan()]}function L6n(t,e){return`${t}-${u(e)}`}var s=/^[A-Za-z0-9_-]{8}-/;function o(t){return dtr(t.replace(/_+$/,""))}function u(t){return o(t)?t+"_":t}function EFs(t){let e=t.replace(s,"");if(e.endsWith("_")&&o(e))return e.slice(0,-1);return e||t}var c=1024;function vFs(t,e){let n=_zr();if(!n.has(t)&&n.size>=c){let r=n.keys().next().value;if(r!==void 0)n.delete(r)}n.set(t,e)}function Usn(t){return _zr().get(t)}
export{zL,HOr,D6n,L6n,EFs,vFs,Usn};
