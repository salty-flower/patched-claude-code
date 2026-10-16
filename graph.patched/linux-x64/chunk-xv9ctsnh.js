// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{an}from"./chunk-8fqmxv14.js";import{z}from"./chunk-qeqy4res.js";import{Xn}from"./chunk-kmgwwaz2.js";import{Hn,gl,kt,Sje}from"./chunk-k16gymf7.js";import{hostname as n}from"os";function nI(){return}function lfe(){return}function AT(){let e=nI();if(e!==void 0)return e;if(!Xn()||!kt())return;return Hn()?.accessToken}async function OE(e){if(!(z()&&e!==void 0))return AT();let r=nI();if(r!==void 0)return r;if(!Xn()||!await Sje(e))return;return(await gl(e))?.accessToken}function cL(){return lfe()??an().BASE_API_URL}function tBe(){let e=process.env.CLAUDE_REMOTE_CONTROL_SESSION_NAME_PREFIX||n();return t(e)||"remote-control"}function t(e){return e.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}
export{nI,lfe,AT,OE,cL,tBe};
