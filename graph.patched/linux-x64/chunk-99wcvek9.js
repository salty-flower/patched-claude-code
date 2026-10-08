// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{cn}from"./chunk-941sa7c2.js";import{B}from"./chunk-4p5wb748.js";import{Kn}from"./chunk-942093b7.js";import{mn,Ka,_t,sLe}from"./chunk-cxjvwxsa.js";import{hostname as n}from"os";function O0(){return}function Lae(){return}function GE(){let e=O0();if(e!==void 0)return e;if(!Kn()||!_t())return;return mn()?.accessToken}async function Nk(e){if(!(B()&&e!==void 0))return GE();let r=O0();if(r!==void 0)return r;if(!Kn()||!await sLe(e))return;return(await Ka(e))?.accessToken}function TH(){return Lae()??cn().BASE_API_URL}function KHe(){let e=process.env.CLAUDE_REMOTE_CONTROL_SESSION_NAME_PREFIX||n();return t(e)||"remote-control"}function t(e){return e.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}
export{O0,Lae,GE,Nk,TH,KHe};
