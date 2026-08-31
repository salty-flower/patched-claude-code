// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{zt}from"./chunk-tb103f96.js";import{Yt,qa,Tt,Ore}from"./chunk-bsdtxcdc.js";import{pr}from"./chunk-znxmbm58.js";import{O}from"./chunk-vvpqfcj1.js";import{hostname as n}from"os";function gH(){return}function s3(){return}function __(){let e=gH();if(e!==void 0)return e;if(!pr()||!Tt())return;return Yt()?.accessToken}async function cC(e){if(!(O()&&e!==void 0))return __();let r=gH();if(r!==void 0)return r;if(!pr()||!await Ore(e))return;return(await qa(e))?.accessToken}function Kue(){return s3()??zt().BASE_API_URL}function Dne(){let e=process.env.CLAUDE_REMOTE_CONTROL_SESSION_NAME_PREFIX||n();return ayr(e)||"remote-control"}function ayr(e){return e.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}
export{gH,s3,__,cC,Kue,Dne,ayr};
