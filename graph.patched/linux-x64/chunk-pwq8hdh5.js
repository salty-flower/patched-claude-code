// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{K,D5t}from"./chunk-30zk17wm.js";import{He}from"./chunk-sgsf5yd5.js";import{ecr}from"./chunk-er188mb2.js";import{join as s}from"path";function Kce(){return s(He(),"uploads",K())}function N3n(t,e){return`${t}-${c(e)}`}var o=/^[A-Za-z0-9_-]{8}-/;function i(t){return ecr(t.replace(/_+$/,""))}function c(t){return i(t)?t+"_":t}function F3n(t){let e=t.replace(o,"");if(e.endsWith("_")&&i(e))return e.slice(0,-1);return e||t}var u=1024;function B3n(t,e){let n=D5t();if(!n.has(t)&&n.size>=u){let r=n.keys().next().value;if(r!==void 0)n.delete(r)}n.set(t,e)}function U3n(t){return D5t().get(t)}
export{Kce,N3n,F3n,B3n,U3n};
