// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{qt}from"./chunk-kvgzj9kk.js";import{Ut,Va,vt,cte}from"./chunk-ns0ekkj0.js";import{ar}from"./chunk-ryvgd9z0.js";import{D}from"./chunk-6fnbbyjg.js";import{hostname as n}from"os";function nI(){return}function Rz(){return}function Ig(){let e=nI();if(e!==void 0)return e;if(!ar()||!vt())return;return Ut()?.accessToken}async function aA(e){if(!(D()&&e!==void 0))return Ig();let r=nI();if(r!==void 0)return r;if(!ar()||!await cte(e))return;return(await Va(e))?.accessToken}function $ae(){return Rz()??qt().BASE_API_URL}function RZ(){let e=process.env.CLAUDE_REMOTE_CONTROL_SESSION_NAME_PREFIX||n();return Lcr(e)||"remote-control"}function Lcr(e){return e.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}
export{nI,Rz,Ig,aA,$ae,RZ,Lcr};
