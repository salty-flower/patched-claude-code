// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{V,gXr,OX,Xbe}from"./chunk-ersar6wn.js";import{Scr}from"./chunk-gp4v3dbd.js";import{Le}from"./chunk-21mz1tvc.js";import{ygn}from"./chunk-pfj1naa8.js";import{createHash as s}from"crypto";import{join as i}from"path";function bx(){return OX()??i(Xbe()??L_t(),V())}function L_t(){return i(Le(),"uploads")}function N_t(){return[L_t(),Xbe()??ygn()]}function m8n(t,e){return`${t}-${u(e)}`}function _$o(t){return s("sha256").update(t.toLowerCase()).digest("hex").slice(0,8)}var a=/^[A-Za-z0-9_-]{8}-/;function o(t){return Scr(t.replace(/_+$/,""))}function u(t){return o(t)?t+"_":t}function Kqs(t){let e=t.replace(a,"");if(e.endsWith("_")&&o(e))return e.slice(0,-1);return e||t}var c=1024;function qqs(t,e){let n=gXr();if(!n.has(t)&&n.size>=c){let r=n.keys().next().value;if(r!==void 0)n.delete(r)}n.set(t,e)}function ipn(t){return gXr().get(t)}
export{bx,L_t,N_t,m8n,_$o,Kqs,qqs,ipn};
