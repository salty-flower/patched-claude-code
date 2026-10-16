// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
function r(n){return n}function S(n){return r(n)}function c(n){return r(n)}function pe(n){return n==null?void 0:r(n)}function Br(n){return r(String(n))}function YK(n){return n==null?void 0:r(String(n))}function eu(...n){return r(n.join(""))}function JXn(n){return r(n.join(","))}function dl(n){return r([...n].sort().join(","))}function W_(n,e){return r(n.join(e??","))}function Pn(n){return r(n)}function Gb(n,e){return e?Pn(n):void 0}function azo(n,e){return n!==void 0&&e.includes(n)&&/^[a-z0-9-]{1,64}$/.test(n)?Pn(n):S("none")}function hde(n,e){return e?Pn(n):S("custom")}function Khe(n){return hde(n.agentType,n.source==="built-in")}function wBr(n,e){return e?Pn(n):S("third-party")}
export{S,c,pe,Br,YK,eu,JXn,dl,W_,Pn,Gb,azo,hde,Khe,wBr};
