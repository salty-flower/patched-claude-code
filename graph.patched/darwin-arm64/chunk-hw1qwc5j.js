// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
var n=/[\x00-\x1f\x7f-\x9f\u2028\u2029]/g,x5=256,kOn=/[\x00-\x1f\x7f-\x9f\u2028\u2029<>]/;function r(e){return e.length<=256&&!kOn.test(e)}function cle(e){return e.length>0&&r(e)}function Yze(e){return e.length<=256&&/^[A-Za-z0-9_:.-]+$/.test(e)}function Oas(e){return e.length<=256&&/^[\p{L}\p{M}\p{N}_:.-]+$/u.test(e)}function doo(e){return e.length<=256&&/^(?:\/(?!\.\.?(?:\/|$))[A-Za-z0-9._+@-]+)+$/.test(e)}function GR(e){return _d(e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;"))}function _d(e){return e.replace(n,(t)=>`&#${t.charCodeAt(0)};`)}function Nq(e){return e.replaceAll("<","&lt;").replaceAll(">","&gt;")}function Wd(e){return _d(Nq(String(e??"")))}function _pr(e){return Wd(e).replaceAll('"',"&quot;")}
export{x5,kOn,cle,Yze,Oas,doo,GR,_d,Nq,Wd,_pr};
