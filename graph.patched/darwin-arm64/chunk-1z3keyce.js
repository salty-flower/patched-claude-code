// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{G,m5t}from"./chunk-g4zaymy2.js";import{ge}from"./chunk-j6bwf1es.js";import{GGn}from"./chunk-syw51z9w.js";import{join as s}from"path";function Sae(){return s(ge(),"uploads",G())}function t5n(t,e){return`${t}-${c(e)}`}var o=/^[A-Za-z0-9_-]{8}-/;function i(t){return GGn(t.replace(/_+$/,""))}function c(t){return i(t)?t+"_":t}function n5n(t){let e=t.replace(o,"");if(e.endsWith("_")&&i(e))return e.slice(0,-1);return e||t}var u=1024;function r5n(t,e){let n=m5t();if(!n.has(t)&&n.size>=u){let r=n.keys().next().value;if(r!==void 0)n.delete(r)}n.set(t,e)}function o5n(t){return m5t().get(t)}
export{Sae,t5n,n5n,r5n,o5n};
