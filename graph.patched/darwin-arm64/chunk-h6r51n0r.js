// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{K,NVt}from"./chunk-38213y7h.js";import{be}from"./chunk-4j4893mq.js";import{tcr}from"./chunk-snzr790g.js";import{join as s}from"path";function Jce(){return s(be(),"uploads",K())}function WKn(t,e){return`${t}-${c(e)}`}var o=/^[A-Za-z0-9_-]{8}-/;function i(t){return tcr(t.replace(/_+$/,""))}function c(t){return i(t)?t+"_":t}function qKn(t){let e=t.replace(o,"");if(e.endsWith("_")&&i(e))return e.slice(0,-1);return e||t}var u=1024;function GKn(t,e){let n=NVt();if(!n.has(t)&&n.size>=u){let r=n.keys().next().value;if(r!==void 0)n.delete(r)}n.set(t,e)}function zKn(t){return NVt().get(t)}
export{Jce,WKn,qKn,GKn,zKn};
