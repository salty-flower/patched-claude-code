// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{dn}from"./chunk-v9aeg87c.js";import{N}from"./chunk-37kdx3dg.js";import{Bn}from"./chunk-m9hfdm3b.js";import{un,ka,pt,qve}from"./chunk-twxt3h9y.js";import{hostname as n}from"os";function sN(){return}function lQ(){return}function Ow(){let e=sN();if(e!==void 0)return e;if(!Bn()||!pt())return;return un()?.accessToken}async function YE(e){if(!(N()&&e!==void 0))return Ow();let r=sN();if(r!==void 0)return r;if(!Bn()||!await qve(e))return;return(await ka(e))?.accessToken}function uP(){return lQ()??dn().BASE_API_URL}function oEe(){let e=process.env.CLAUDE_REMOTE_CONTROL_SESSION_NAME_PREFIX||n();return t(e)||"remote-control"}function t(e){return e.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}
export{sN,lQ,Ow,YE,uP,oEe};
