// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{Vt}from"./chunk-hpnksvcw.js";import{O}from"./chunk-h9wtyp3p.js";import{qt,Xi,gt,Goe}from"./chunk-3e93vkg3.js";import{Pn}from"./chunk-0558tzyr.js";import{hostname as n}from"os";function dR(){return}function RV(){return}function ay(){let e=dR();if(e!==void 0)return e;if(!Pn()||!gt())return;return qt()?.accessToken}async function lv(e){if(!(O()&&e!==void 0))return ay();let r=dR();if(r!==void 0)return r;if(!Pn()||!await Goe(e))return;return(await Xi(e))?.accessToken}function ffe(){return RV()??Vt().BASE_API_URL}function ure(){let e=process.env.CLAUDE_REMOTE_CONTROL_SESSION_NAME_PREFIX||n();return t(e)||"remote-control"}function t(e){return e.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}
export{dR,RV,ay,lv,ffe,ure};
