// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
function r(n){return n}function b(n){return r(n)}function c(n){return r(n)}function pe(n){return n==null?void 0:r(n)}function Br(n){return r(String(n))}function U4(n){return n==null?void 0:r(String(n))}function eu(...n){return r(n.join(""))}function HXn(n){return r(n.join(","))}function ll(n){return r([...n].sort().join(","))}function j_(n,e){return r(n.join(e??","))}function Pn(n){return r(n)}function WS(n,e){return e?Pn(n):void 0}function PGo(n,e){return n!==void 0&&e.includes(n)&&/^[a-z0-9-]{1,64}$/.test(n)?Pn(n):b("none")}function dde(n,e){return e?Pn(n):b("custom")}function jhe(n){return dde(n.agentType,n.source==="built-in")}function JBr(n,e){return e?Pn(n):b("third-party")}
export{b,c,pe,Br,U4,eu,HXn,ll,j_,Pn,WS,PGo,dde,jhe,JBr};
