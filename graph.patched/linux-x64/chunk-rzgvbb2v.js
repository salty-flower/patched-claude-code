// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{q,Jzr,Yye,RKe}from"./chunk-dxktn51d.js";import{Ker}from"./chunk-h9cj3xp8.js";import{De}from"./chunk-jbgr14ef.js";import{dan}from"./chunk-kx98rv5t.js";import{join as i}from"path";function B0(){return Yye()??i(RKe()??mOr(),q())}function mOr(){return i(De(),"uploads")}function SKn(){return[mOr(),RKe()??dan()]}function wKn(t,e){return`${t}-${u(e)}`}var s=/^[A-Za-z0-9_-]{8}-/;function o(t){return Ker(t.replace(/_+$/,""))}function u(t){return o(t)?t+"_":t}function NNs(t){let e=t.replace(s,"");if(e.endsWith("_")&&o(e))return e.slice(0,-1);return e||t}var c=1024;function $Ns(t,e){let n=Jzr();if(!n.has(t)&&n.size>=c){let r=n.keys().next().value;if(r!==void 0)n.delete(r)}n.set(t,e)}function Asn(t){return Jzr().get(t)}
export{B0,mOr,SKn,wKn,NNs,$Ns,Asn};
