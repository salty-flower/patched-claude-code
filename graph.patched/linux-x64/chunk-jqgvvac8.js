// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{Kt}from"./chunk-40wq8hf6.js";import{F}from"./chunk-qztrb7e5.js";import{Zt,ta,_t,Wfe}from"./chunk-30p0nwys.js";import{Fn}from"./chunk-s3hsf7ap.js";import{hostname as n}from"os";function X0(){return}function v5(){return}function ub(){let e=X0();if(e!==void 0)return e;if(!Fn()||!_t())return;return Zt()?.accessToken}async function aw(e){if(!(F()&&e!==void 0))return ub();let r=X0();if(r!==void 0)return r;if(!Fn()||!await Wfe(e))return;return(await ta(e))?.accessToken}function LT(){return v5()??Kt().BASE_API_URL}function spe(){let e=process.env.CLAUDE_REMOTE_CONTROL_SESSION_NAME_PREFIX||n();return t(e)||"remote-control"}function t(e){return e.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}
export{X0,v5,ub,aw,LT,spe};
