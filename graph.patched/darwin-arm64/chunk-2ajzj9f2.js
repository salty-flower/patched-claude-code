// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{K,Ohr,O7t}from"./chunk-8mvda08c.js";import{hLn}from"./chunk-5qeme8w3.js";import{we}from"./chunk-xbg4a11x.js";import{join as i}from"path";function wB(){return O7t()??i(d9r(),K())}function d9r(){return i(we(),"uploads")}function yCn(t,e){return`${t}-${u(e)}`}var s=/^[A-Za-z0-9_-]{8}-/;function o(t){return hLn(t.replace(/_+$/,""))}function u(t){return o(t)?t+"_":t}function T8o(t){let e=t.replace(s,"");if(e.endsWith("_")&&o(e))return e.slice(0,-1);return e||t}var c=1024;function R8o(t,e){let n=Ohr();if(!n.has(t)&&n.size>=c){let r=n.keys().next().value;if(r!==void 0)n.delete(r)}n.set(t,e)}function z6t(t){return Ohr().get(t)}
export{wB,d9r,yCn,T8o,R8o,z6t};
