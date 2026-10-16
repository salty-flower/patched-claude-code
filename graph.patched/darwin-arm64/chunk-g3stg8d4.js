// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Ur}from"./chunk-xzypj06m.js";import{a}from"./chunk-k4g6y57j.js";import{c$}from"./chunk-e666gr8q.js";import{Xn}from"./chunk-nvk7bh0e.js";import{sep as f}from"path";var vDo=new Set([".git","hooks",".husky",".githooks","node_modules",".vscode",".idea","head","config","objects","refs",".claude","skills","commands","agents",".cargo",".devcontainer",".yarn",".mvn"]),icn=/[\u200c-\u200f\u202a-\u202e\u206a-\u206f\ufeff]/,acn=new RegExp(icn,"g");function yl(e){return l(e,!0)}function g5n(e){return l(e,!1)}function l(e,o){let n=e.toLowerCase().replace(/\u0131/g,"i").replace(/\u017f/g,"s"),t=n.replace(acn,"");return(o?t.replace(/:.*$/,""):t).replace(/[. ]+$/,"")||n}function kDo(e){return!1}function w7(e,o,n){let t=e.slice(o.length).split(f),u=t.length-1;for(let r=0;r<t.length;r++){let i=yl(t[r]);if(vDo.has(i)||kDo(i))return!0;if(r===u&&n?.has(i))return!0}return!1}function c(){if(a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST)return!1;return!Xn()}function D2s(){return a.CLAUDE_CODE_ENVIRONMENT_KIND==="byoc"&&!a.CLAUDE_CODE_BYOC_ENABLE_DATADOG}function s(){return a.CLAUDE_CODE_CUSTOM_OAUTH_URL!==void 0}function scn(){return!c$()&&!s()}function fy(){return c$()||c()||Ur()!==null||s()}function m5n(){return c()||Ur()!==null||s()}function Fte(){return a.CLAUDE_CODE_ENABLE_FEEDBACK_SURVEY_FOR_OTEL}function sK(){if(Fte())return!1;return c$()}
export{D2s,scn,fy,m5n,Fte,sK,vDo,icn,acn,yl,g5n,kDo,w7};
