// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{Vt}from"./chunk-jpen6jwm.js";import{Xt,Ga,wt,xre}from"./chunk-1e5y3pjf.js";import{fr}from"./chunk-4n7ktjmt.js";import{D}from"./chunk-jw0x5qwf.js";import{hostname as n}from"os";function dR(){return}function rV(){return}function hy(){let e=dR();if(e!==void 0)return e;if(!fr()||!wt())return;return Xt()?.accessToken}async function lv(e){if(!(D()&&e!==void 0))return hy();let r=dR();if(r!==void 0)return r;if(!fr()||!await xre(e))return;return(await Ga(e))?.accessToken}function Gue(){return rV()??Vt().BASE_API_URL}function Rne(){let e=process.env.CLAUDE_REMOTE_CONTROL_SESSION_NAME_PREFIX||n();return e_r(e)||"remote-control"}function e_r(e){return e.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}
export{dR,rV,hy,lv,Gue,Rne,e_r};
