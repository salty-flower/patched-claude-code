// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{Gt}from"./chunk-n5p9w775.js";import{jt,Va,St,fte}from"./chunk-ghnc2x4f.js";import{ar}from"./chunk-2d75qem6.js";import{H}from"./chunk-9p9ys44p.js";import{hostname as n}from"os";function sI(){return}function D3(){return}function Pg(){let e=sI();if(e!==void 0)return e;if(!ar()||!St())return;return jt()?.accessToken}async function lE(e){if(!(H()&&e!==void 0))return Pg();let r=sI();if(r!==void 0)return r;if(!ar()||!await fte(e))return;return(await Va(e))?.accessToken}function jae(){return D3()??Gt().BASE_API_URL}function LZ(){let e=process.env.CLAUDE_REMOTE_CONTROL_SESSION_NAME_PREFIX||n();return Bcr(e)||"remote-control"}function Bcr(e){return e.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}
export{sI,D3,Pg,lE,jae,LZ,Bcr};
