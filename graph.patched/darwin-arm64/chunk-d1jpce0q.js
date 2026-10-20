// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{cn}from"./chunk-r22r6j92.js";import{Xn}from"./chunk-gsezw0ay.js";import{Mn,Za,kt,J2e}from"./chunk-bvn0epzr.js";import{z}from"./chunk-p017vfx2.js";import{hostname as n}from"os";function RR(){return}function Nme(){return}function KE(){let e=RR();if(e!==void 0)return e;if(!Xn()||!kt())return;return Mn()?.accessToken}async function Zv(e){if(!(z()&&e!==void 0))return KE();let r=RR();if(r!==void 0)return r;if(!Xn()||!await J2e(e))return;return(await Za(e))?.accessToken}function qL(){return Nme()??cn().BASE_API_URL}function Oje(){let e=process.env.CLAUDE_REMOTE_CONTROL_SESSION_NAME_PREFIX||n();return t(e)||"remote-control"}function t(e){return e.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}
export{RR,Nme,KE,Zv,qL,Oje};
