// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{co}from"./chunk-g79wjybr.js";import{a}from"./chunk-rptge3r8.js";import{B$}from"./chunk-3s94kw4m.js";import{Kn}from"./chunk-942093b7.js";function u(){if(a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST)return!1;return!Kn()}function $hs(){return a.CLAUDE_CODE_ENVIRONMENT_KIND==="byoc"&&!a.CLAUDE_CODE_BYOC_ENABLE_DATADOG}function l(){return a.CLAUDE_CODE_CUSTOM_OAUTH_URL!==void 0}function gy(){return u()||co()!==null||B$()||l()}function Fhs(){return u()||co()!==null||l()}function tQ(){return a.CLAUDE_CODE_ENABLE_FEEDBACK_SURVEY_FOR_OTEL}function A2(){if(tQ())return!1;return B$()}import{sep as f}from"path";var nfo=new Set([".git","hooks",".husky",".githooks","node_modules",".vscode",".idea","head","config","objects","refs",".claude","skills","commands","agents",".cargo",".devcontainer",".yarn",".mvn"]),fJt=/[\u200c-\u200f\u202a-\u202e\u206a-\u206f\ufeff]/,rfo=new RegExp(fJt,"g");function Xa(e){return c(e,!0)}function SNn(e){return c(e,!1)}function c(e,o){let n=e.toLowerCase().replace(/\u0131/g,"i").replace(/\u017f/g,"s"),t=n.replace(rfo,"");return(o?t.replace(/:.*$/,""):t).replace(/[. ]+$/,"")||n}function ofo(e){return!1}function p5(e,o,n){let t=e.slice(o.length).split(f),i=t.length-1;for(let r=0;r<t.length;r++){let s=Xa(t[r]);if(nfo.has(s)||ofo(s))return!0;if(r===i&&n?.has(s))return!0}return!1}
export{$hs,gy,Fhs,tQ,A2,nfo,fJt,rfo,Xa,SNn,ofo,p5};
