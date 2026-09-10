// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{Xt}from"./chunk-kse90n8m.js";import{N}from"./chunk-mtqrv1h8.js";import{Jt,ia,gt,qae}from"./chunk-ce4ppmnp.js";import{Nn}from"./chunk-dqr9knfd.js";import{hostname as n}from"os";function SP(){return}function PK(){return}function Dy(){let e=SP();if(e!==void 0)return e;if(!Nn()||!gt())return;return Jt()?.accessToken}async function lT(e){if(!(N()&&e!==void 0))return Dy();let r=SP();if(r!==void 0)return r;if(!Nn()||!await qae(e))return;return(await ia(e))?.accessToken}function Sge(){return PK()??Xt().BASE_API_URL}function zse(){let e=process.env.CLAUDE_REMOTE_CONTROL_SESSION_NAME_PREFIX||n();return t(e)||"remote-control"}function t(e){return e.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}
export{SP,PK,Dy,lT,Sge,zse};
