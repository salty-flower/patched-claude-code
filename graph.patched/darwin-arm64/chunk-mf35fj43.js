// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{Kt}from"./chunk-88cgz317.js";import{L}from"./chunk-ma94d7pd.js";import{Jt,Qs,wt,yie}from"./chunk-h6md7820.js";import{Gn}from"./chunk-j64ncx4g.js";import{hostname as n}from"os";function QH(){return}function uG(){return}function v_(){let e=QH();if(e!==void 0)return e;if(!Gn()||!wt())return;return Jt()?.accessToken}async function JC(e){if(!(L()&&e!==void 0))return v_();let r=QH();if(r!==void 0)return r;if(!Gn()||!await yie(e))return;return(await Qs(e))?.accessToken}function wfe(){return uG()??Kt().BASE_API_URL}function uoe(){let e=process.env.CLAUDE_REMOTE_CONTROL_SESSION_NAME_PREFIX||n();return qTr(e)||"remote-control"}function qTr(e){return e.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}
export{QH,uG,v_,JC,wfe,uoe,qTr};
