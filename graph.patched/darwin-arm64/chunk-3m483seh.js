// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{Xt}from"./chunk-jww0ztav.js";import{M}from"./chunk-wmtek349.js";import{Jt,na,gt,fae}from"./chunk-vryy7b5x.js";import{Dn}from"./chunk-k2g2a0ht.js";import{hostname as n}from"os";function m0(){return}function AV(){return}function Oy(){let e=m0();if(e!==void 0)return e;if(!Dn()||!gt())return;return Jt()?.accessToken}async function Xv(e){if(!(M()&&e!==void 0))return Oy();let r=m0();if(r!==void 0)return r;if(!Dn()||!await fae(e))return;return(await na(e))?.accessToken}function Nme(){return AV()??Xt().BASE_API_URL}function dse(){let e=process.env.CLAUDE_REMOTE_CONTROL_SESSION_NAME_PREFIX||n();return t(e)||"remote-control"}function t(e){return e.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}
export{m0,AV,Oy,Xv,Nme,dse};
