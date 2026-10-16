// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{an}from"./chunk-hbbqggzw.js";import{G}from"./chunk-278j353c.js";import{Xn}from"./chunk-nvk7bh0e.js";import{Mn,hl,kt,xje}from"./chunk-1901fdh6.js";import{hostname as n}from"os";function iI(){return}function mfe(){return}function xC(){let e=iI();if(e!==void 0)return e;if(!Xn()||!kt())return;return Mn()?.accessToken}async function Hv(e){if(!(G()&&e!==void 0))return xC();let r=iI();if(r!==void 0)return r;if(!Xn()||!await xje(e))return;return(await hl(e))?.accessToken}function mL(){return mfe()??an().BASE_API_URL}function u1e(){let e=process.env.CLAUDE_REMOTE_CONTROL_SESSION_NAME_PREFIX||n();return t(e)||"remote-control"}function t(e){return e.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}
export{iI,mfe,xC,Hv,mL,u1e};
