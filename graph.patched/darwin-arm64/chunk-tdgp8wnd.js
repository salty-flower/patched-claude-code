// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
var n=/[\x00-\x1f\x7f-\x9f\u2028\u2029]/g,Wwt=256,kTn=/[\x00-\x1f\x7f-\x9f\u2028\u2029<>]/;function Rie(e){return e.length>0&&e.length<=256&&!kTn.test(e)}function lGe(e){return e.length<=256&&/^[A-Za-z0-9_:.-]+$/.test(e)}function eQo(e){return e.length<=256&&/^[\p{L}\p{M}\p{N}_:.-]+$/u.test(e)}function o7r(e){return e.length<=256&&/^(?:\/(?!\.\.?(?:\/|$))[A-Za-z0-9._+@-]+)+$/.test(e)}function wR(e){return ld(e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;"))}function ld(e){return e.replace(n,(t)=>`&#${t.charCodeAt(0)};`)}function xV(e){return e.replaceAll("<","&lt;").replaceAll(">","&gt;")}function uu(e){return ld(xV(String(e??"")))}function Usr(e){return uu(e).replaceAll('"',"&quot;")}
export{Wwt,kTn,Rie,lGe,eQo,o7r,wR,ld,xV,uu,Usr};
