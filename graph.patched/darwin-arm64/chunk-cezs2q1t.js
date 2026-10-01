// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
var n=/[\x00-\x1f\x7f-\x9f\u2028\u2029]/g,_ut=256,Cun=/[\x00-\x1f\x7f-\x9f\u2028\u2029<>]/;function nne(e){return e.length>0&&e.length<=256&&!Cun.test(e)}function qFe(e){return e.length<=256&&/^[A-Za-z0-9_:.-]+$/.test(e)}function vT(e){return Z5e(e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;"))}function Z5e(e){return e.replace(n,(t)=>`&#${t.charCodeAt(0)};`)}function c6(e){return e.replaceAll("<","&lt;").replaceAll(">","&gt;")}function fh(e){return Z5e(c6(String(e??"")))}function cqn(e){return fh(e).replaceAll('"',"&quot;")}
export{_ut,Cun,nne,qFe,vT,Z5e,c6,fh,cqn};
