// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{Jt}from"./chunk-2b9rpf69.js";import{L}from"./chunk-0xdcm8sp.js";import{tn,oa,Tt,pse}from"./chunk-vtwn1md5.js";import{Fn}from"./chunk-wg76fyda.js";import{hostname as n}from"os";function p0(){return}function jG(){return}function O_(){let e=p0();if(e!==void 0)return e;if(!Fn()||!Tt())return;return tn()?.accessToken}async function uv(e){if(!(L()&&e!==void 0))return O_();let r=p0();if(r!==void 0)return r;if(!Fn()||!await pse(e))return;return(await oa(e))?.accessToken}function mme(){return jG()??Jt().BASE_API_URL}function oie(){let e=process.env.CLAUDE_REMOTE_CONTROL_SESSION_NAME_PREFIX||n();return kCr(e)||"remote-control"}function kCr(e){return e.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}
export{p0,jG,O_,uv,mme,oie,kCr};
