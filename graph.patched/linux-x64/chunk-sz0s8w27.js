// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{cn}from"./chunk-59xd6a0a.js";import{Xn}from"./chunk-pr2cfg7g.js";import{Mn,Qa,kt,jGe}from"./chunk-7p6jp6kj.js";import{z}from"./chunk-rdj492d5.js";import{hostname as n}from"os";function TR(){return}function Ime(){return}function Kv(){let e=TR();if(e!==void 0)return e;if(!Xn()||!kt())return;return Mn()?.accessToken}async function QE(e){if(!(z()&&e!==void 0))return Kv();let r=TR();if(r!==void 0)return r;if(!Xn()||!await jGe(e))return;return(await Qa(e))?.accessToken}function z0(){return Ime()??cn().BASE_API_URL}function vje(){let e=process.env.CLAUDE_REMOTE_CONTROL_SESSION_NAME_PREFIX||n();return t(e)||"remote-control"}function t(e){return e.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}
export{TR,Ime,Kv,QE,z0,vje};
