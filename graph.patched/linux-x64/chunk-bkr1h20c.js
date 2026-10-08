// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
function r(n){return n}function b(n){return r(n)}function d(n){return r(n)}function ue(n){return n==null?void 0:r(n)}function Dr(n){return r(String(n))}function Sq(n){return n==null?void 0:r(String(n))}function Rd(...n){return r(n.join(""))}function NBn(n){return r(n.join(","))}function el(n){return r([...n].sort().join(","))}function Ry(n,e){return r(n.join(e??","))}function Sn(n){return r(n)}function wb(n,e){return e?Sn(n):void 0}function lko(n,e){return n!==void 0&&e.includes(n)&&/^[a-z0-9-]{1,64}$/.test(n)?Sn(n):b("none")}function aoe(n,e){return e?Sn(n):b("custom")}function Nde(n){return aoe(n.agentType,n.source==="built-in")}function Ekr(n,e){return e?Sn(n):b("third-party")}
export{b,d,ue,Dr,Sq,Rd,NBn,el,Ry,Sn,wb,lko,aoe,Nde,Ekr};
