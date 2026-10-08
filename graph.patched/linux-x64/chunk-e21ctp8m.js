// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
var n=/[\x00-\x1f\x7f-\x9f\u2028\u2029]/g,w3=256,iOn=/[\x00-\x1f\x7f-\x9f\u2028\u2029<>]/;function r(e){return e.length<=256&&!iOn.test(e)}function rle(e){return e.length>0&&r(e)}function jqe(e){return e.length<=256&&/^[A-Za-z0-9_:.-]+$/.test(e)}function Kis(e){return e.length<=256&&/^[\p{L}\p{M}\p{N}_:.-]+$/u.test(e)}function Lro(e){return e.length<=256&&/^(?:\/(?!\.\.?(?:\/|$))[A-Za-z0-9._+@-]+)+$/.test(e)}function UR(e){return yd(e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;"))}function yd(e){return e.replace(n,(t)=>`&#${t.charCodeAt(0)};`)}function PK(e){return e.replaceAll("<","&lt;").replaceAll(">","&gt;")}function Wd(e){return yd(PK(String(e??"")))}function Jur(e){return Wd(e).replaceAll('"',"&quot;")}
export{w3,iOn,rle,jqe,Kis,Lro,UR,yd,PK,Wd,Jur};
