// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{pn}from"./chunk-zs0343th.js";import{B}from"./chunk-f16c4jnr.js";import{qn}from"./chunk-9dnqpecd.js";import{gn,Ka,mt,YHe}from"./chunk-m0sj7y8g.js";import{hostname as n}from"os";function zD(){return}function tie(){return}function vE(){let e=zD();if(e!==void 0)return e;if(!qn()||!mt())return;return gn()?.accessToken}async function gk(e){if(!(B()&&e!==void 0))return vE();let r=zD();if(r!==void 0)return r;if(!qn()||!await YHe(e))return;return(await Ka(e))?.accessToken}function WM(){return tie()??pn().BASE_API_URL}function UOe(){let e=process.env.CLAUDE_REMOTE_CONTROL_SESSION_NAME_PREFIX||n();return t(e)||"remote-control"}function t(e){return e.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}
export{zD,tie,vE,gk,WM,UOe};
