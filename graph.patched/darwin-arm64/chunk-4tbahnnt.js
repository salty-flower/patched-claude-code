// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{Xt}from"./chunk-3rs4ng0x.js";import{N}from"./chunk-95e36pja.js";import{Jt,ia,gt,Zae}from"./chunk-e02s7cks.js";import{Fn}from"./chunk-xsncbnja.js";import{hostname as n}from"os";function x0(){return}function jV(){return}function Fy(){let e=x0();if(e!==void 0)return e;if(!Fn()||!gt())return;return Jt()?.accessToken}async function uT(e){if(!(N()&&e!==void 0))return Fy();let r=x0();if(r!==void 0)return r;if(!Fn()||!await Zae(e))return;return(await ia(e))?.accessToken}function Rge(){return jV()??Xt().BASE_API_URL}function Xse(){let e=process.env.CLAUDE_REMOTE_CONTROL_SESSION_NAME_PREFIX||n();return t(e)||"remote-control"}function t(e){return e.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}
export{x0,jV,Fy,uT,Rge,Xse};
