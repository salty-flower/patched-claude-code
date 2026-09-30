// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{sn}from"./chunk-vmffs68f.js";import{L}from"./chunk-nynxm73s.js";import{Gn}from"./chunk-ntsbwr3d.js";import{ln,Oa,ut,mRe}from"./chunk-er6f56rj.js";import{hostname as n}from"os";function wH(){return}function yte(){return}function DE(){let e=wH();if(e!==void 0)return e;if(!Gn()||!ut())return;return ln()?.accessToken}async function Vv(e){if(!(L()&&e!==void 0))return DE();let r=wH();if(r!==void 0)return r;if(!Gn()||!await mRe(e))return;return(await Oa(e))?.accessToken}function SI(){return yte()??sn().BASE_API_URL}function QAe(){let e=process.env.CLAUDE_REMOTE_CONTROL_SESSION_NAME_PREFIX||n();return t(e)||"remote-control"}function t(e){return e.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}
export{wH,yte,DE,Vv,SI,QAe};
