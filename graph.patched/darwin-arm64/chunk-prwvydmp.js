// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{K,jxr,$1e}from"./chunk-4bw62nzm.js";import{m6n}from"./chunk-ae84tp6z.js";import{be}from"./chunk-nqc6v990.js";import{join as i}from"path";function jL(){return $1e()??i(sao(),K())}function sao(){return i(be(),"uploads")}function qHn(t,e){return`${t}-${u(e)}`}var s=/^[A-Za-z0-9_-]{8}-/;function o(t){return m6n(t.replace(/_+$/,""))}function u(t){return o(t)?t+"_":t}function fps(t){let e=t.replace(s,"");if(e.endsWith("_")&&o(e))return e.slice(0,-1);return e||t}var c=1024;function mps(t,e){let n=jxr();if(!n.has(t)&&n.size>=c){let r=n.keys().next().value;if(r!==void 0)n.delete(r)}n.set(t,e)}function B8t(t){return jxr().get(t)}
export{jL,sao,qHn,fps,mps,B8t};
