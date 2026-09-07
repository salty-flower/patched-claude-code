// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{zt}from"./chunk-9g7wf9qr.js";import{L}from"./chunk-7wmynp0n.js";import{Vt,Yi,gt,Yoe}from"./chunk-n495pc0t.js";import{On}from"./chunk-d5e21f8p.js";import{hostname as n}from"os";function TH(){return}function L3(){return}function c_(){let e=TH();if(e!==void 0)return e;if(!On()||!gt())return;return Vt()?.accessToken}async function cC(e){if(!(L()&&e!==void 0))return c_();let r=TH();if(r!==void 0)return r;if(!On()||!await Yoe(e))return;return(await Yi(e))?.accessToken}function ype(){return L3()??zt().BASE_API_URL}function hre(){let e=process.env.CLAUDE_REMOTE_CONTROL_SESSION_NAME_PREFIX||n();return t(e)||"remote-control"}function t(e){return e.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}
export{TH,L3,c_,cC,ype,hre};
