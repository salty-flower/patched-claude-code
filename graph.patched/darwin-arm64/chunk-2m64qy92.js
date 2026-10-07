// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{pn}from"./chunk-yfyrtrqq.js";import{U}from"./chunk-ht3pd6g4.js";import{Vn}from"./chunk-sac2pmqn.js";import{gn,Ya,mt,rMe}from"./chunk-s46qgfx7.js";import{hostname as n}from"os";function qM(){return}function lie(){return}function kv(){let e=qM();if(e!==void 0)return e;if(!Vn()||!mt())return;return gn()?.accessToken}async function _C(e){if(!(U()&&e!==void 0))return kv();let r=qM();if(r!==void 0)return r;if(!Vn()||!await rMe(e))return;return(await Ya(e))?.accessToken}function q0(){return lie()??pn().BASE_API_URL}function QOe(){let e=process.env.CLAUDE_REMOTE_CONTROL_SESSION_NAME_PREFIX||n();return t(e)||"remote-control"}function t(e){return e.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}
export{qM,lie,kv,_C,q0,QOe};
