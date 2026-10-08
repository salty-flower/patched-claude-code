// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{cn}from"./chunk-y208484s.js";import{B}from"./chunk-a48152q4.js";import{Kn}from"./chunk-fsnz81vy.js";import{mn,Ya,_t,mLe}from"./chunk-gcyvvtkw.js";import{hostname as n}from"os";function DD(){return}function Wae(){return}function Kv(){let e=DD();if(e!==void 0)return e;if(!Kn()||!_t())return;return mn()?.accessToken}async function Uk(e){if(!(B()&&e!==void 0))return Kv();let r=DD();if(r!==void 0)return r;if(!Kn()||!await mLe(e))return;return(await Ya(e))?.accessToken}function xH(){return Wae()??cn().BASE_API_URL}function aMe(){let e=process.env.CLAUDE_REMOTE_CONTROL_SESSION_NAME_PREFIX||n();return t(e)||"remote-control"}function t(e){return e.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}
export{DD,Wae,Kv,Uk,xH,aMe};
