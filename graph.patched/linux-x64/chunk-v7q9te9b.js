// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{mo}from"./chunk-aywwjcwq.js";import{a}from"./chunk-869zfth6.js";import{VN}from"./chunk-z9b8syjk.js";import{qn}from"./chunk-9dnqpecd.js";function u(){if(a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST)return!1;return!qn()}function Jis(){return a.CLAUDE_CODE_ENVIRONMENT_KIND==="byoc"&&!a.CLAUDE_CODE_BYOC_ENABLE_DATADOG}function l(){return a.CLAUDE_CODE_CUSTOM_OAUTH_URL!==void 0}function Zh(){return u()||mo()!==null||VN()||l()}function Qis(){return u()||mo()!==null||l()}function HX(){return a.CLAUDE_CODE_ENABLE_FEEDBACK_SURVEY_FOR_OTEL}function _G(){if(HX())return!1;return VN()}import{sep as f}from"path";var Qoo=new Set([".git","hooks",".husky",".githooks","node_modules",".vscode",".idea","head","config","objects","refs",".claude","skills","commands","agents",".cargo",".devcontainer",".yarn",".mvn"]),u5t=/[\u200c-\u200f\u202a-\u202e\u206a-\u206f\ufeff]/,Zoo=new RegExp(u5t,"g");function kl(e){return c(e,!0)}function tMn(e){return c(e,!1)}function c(e,o){let n=e.toLowerCase().replace(/\u0131/g,"i").replace(/\u017f/g,"s"),t=n.replace(Zoo,"");return(o?t.replace(/:.*$/,""):t).replace(/[. ]+$/,"")||n}function eso(e){return!1}function rY(e,o,n){let t=e.slice(o.length).split(f),i=t.length-1;for(let r=0;r<t.length;r++){let s=kl(t[r]);if(Qoo.has(s)||eso(s))return!0;if(r===i&&n?.has(s))return!0}return!1}
export{Jis,Zh,Qis,HX,_G,Qoo,u5t,Zoo,kl,tMn,eso,rY};
