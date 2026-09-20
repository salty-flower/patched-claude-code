// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{Kt}from"./chunk-tq3ft6e6.js";import{F}from"./chunk-n93bke93.js";import{en,na,_t,Jfe}from"./chunk-g4c6ggz4.js";import{$n}from"./chunk-yvbqdrex.js";import{hostname as n}from"os";function aO(){return}function x9(){return}function pS(){let e=aO();if(e!==void 0)return e;if(!$n()||!_t())return;return en()?.accessToken}async function lw(e){if(!(F()&&e!==void 0))return pS();let r=aO();if(r!==void 0)return r;if(!$n()||!await Jfe(e))return;return(await na(e))?.accessToken}function FT(){return x9()??Kt().BASE_API_URL}function ppe(){let e=process.env.CLAUDE_REMOTE_CONTROL_SESSION_NAME_PREFIX||n();return t(e)||"remote-control"}function t(e){return e.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}
export{aO,x9,pS,lw,FT,ppe};
