// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{dn}from"./chunk-5b8s3gnd.js";import{j}from"./chunk-k1419ccf.js";import{qn}from"./chunk-kvz2ymff.js";import{Sn,_l,wt,r$e}from"./chunk-bk5ct2gw.js";import{hostname as n}from"os";function KL(){return}function hde(){return}function Fk(){let e=KL();if(e!==void 0)return e;if(!qn()||!wt())return;return Sn()?.accessToken}async function HA(e){if(!(j()&&e!==void 0))return Fk();let r=KL();if(r!==void 0)return r;if(!qn()||!await r$e(e))return;return(await _l(e))?.accessToken}function XM(){return hde()??dn().BASE_API_URL}function GNe(){let e=process.env.CLAUDE_REMOTE_CONTROL_SESSION_NAME_PREFIX||n();return t(e)||"remote-control"}function t(e){return e.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}
export{KL,hde,Fk,HA,XM,GNe};
