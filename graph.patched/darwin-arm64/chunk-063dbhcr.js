// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{rn}from"./chunk-ke15dgmq.js";import{$n}from"./chunk-psq3t7gj.js";import{Ln,al,vt,UVe}from"./chunk-27xjmczp.js";import{AZ}from"./chunk-9f3mwram.js";import{z}from"./chunk-mxa4mwnj.js";import{hostname as n}from"os";function vx(){return}function Pye(){return}function Fv(){let e=vx();if(e!==void 0)return e;if(!$n()||!vt())return;return AZ(Ln())?.accessToken}async function Uk(e){if(!(z()&&e!==void 0))return Fv();let r=vx();if(r!==void 0)return r;if(!$n()||!await UVe(e))return;return AZ(await al(e))?.accessToken}function _F(){return Pye()??rn().BASE_API_URL}function dze(){let e=process.env.CLAUDE_REMOTE_CONTROL_SESSION_NAME_PREFIX||n();return t(e)||"remote-control"}function t(e){return e.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}
export{vx,Pye,Fv,Uk,_F,dze};
