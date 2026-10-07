// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
var n=/[\x00-\x1f\x7f-\x9f\u2028\u2029]/g,Owt=256,aCn=/[\x00-\x1f\x7f-\x9f\u2028\u2029<>]/;function vie(e){return e.length>0&&e.length<=256&&!aCn.test(e)}function tGe(e){return e.length<=256&&/^[A-Za-z0-9_:.-]+$/.test(e)}function hQo(e){return e.length<=256&&/^[\p{L}\p{M}\p{N}_:.-]+$/u.test(e)}function PXr(e){return e.length<=256&&/^(?:\/(?!\.\.?(?:\/|$))[A-Za-z0-9._+@-]+)+$/.test(e)}function yR(e){return ad(e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;"))}function ad(e){return e.replace(n,(t)=>`&#${t.charCodeAt(0)};`)}function vV(e){return e.replaceAll("<","&lt;").replaceAll(">","&gt;")}function du(e){return ad(vV(String(e??"")))}function bsr(e){return du(e).replaceAll('"',"&quot;")}
export{Owt,aCn,vie,tGe,hQo,PXr,yR,ad,vV,du,bsr};
