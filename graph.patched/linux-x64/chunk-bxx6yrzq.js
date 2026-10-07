// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{K,chr,hJt}from"./chunk-aywwjcwq.js";import{Z0n}from"./chunk-gf0t3nd9.js";import{we}from"./chunk-bpkzpttw.js";import{join as i}from"path";function l1(){return hJt()??i(FYr(),K())}function FYr(){return i(we(),"uploads")}function tkn(t,e){return`${t}-${u(e)}`}var s=/^[A-Za-z0-9_-]{8}-/;function o(t){return Z0n(t.replace(/_+$/,""))}function u(t){return o(t)?t+"_":t}function f8o(t){let e=t.replace(s,"");if(e.endsWith("_")&&o(e))return e.slice(0,-1);return e||t}var c=1024;function m8o(t,e){let n=chr();if(!n.has(t)&&n.size>=c){let r=n.keys().next().value;if(r!==void 0)n.delete(r)}n.set(t,e)}function M2t(t){return chr().get(t)}
export{l1,FYr,tkn,f8o,m8o,M2t};
