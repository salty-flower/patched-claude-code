// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{eo}from"./chunk-4bw62nzm.js";import{a}from"./chunk-yvnhkg35.js";import{MV}from"./chunk-gsnbskq4.js";import{qn}from"./chunk-kvz2ymff.js";function u(){if(a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST)return!1;return!qn()}function ARs(){return a.CLAUDE_CODE_ENVIRONMENT_KIND==="byoc"&&!a.CLAUDE_CODE_BYOC_ENABLE_DATADOG}function l(){return a.CLAUDE_CODE_CUSTOM_OAUTH_URL!==void 0}function Uy(){return u()||eo()!==null||MV()||l()}function CRs(){return u()||eo()!==null||l()}function YQ(){return a.CLAUDE_CODE_ENABLE_FEEDBACK_SURVEY_FOR_OTEL}function lV(){if(YQ())return!1;return MV()}import{sep as f}from"path";var Lwo=new Set([".git","hooks",".husky",".githooks","node_modules",".vscode",".idea","head","config","objects","refs",".claude","skills","commands","agents",".cargo",".devcontainer",".yarn",".mvn"]),Ptn=/[\u200c-\u200f\u202a-\u202e\u206a-\u206f\ufeff]/,Nwo=new RegExp(Ptn,"g");function pl(e){return c(e,!0)}function p2n(e){return c(e,!1)}function c(e,o){let n=e.toLowerCase().replace(/\u0131/g,"i").replace(/\u017f/g,"s"),t=n.replace(Nwo,"");return(o?t.replace(/:.*$/,""):t).replace(/[. ]+$/,"")||n}function Fwo(e){return!1}function W8(e,o,n){let t=e.slice(o.length).split(f),i=t.length-1;for(let r=0;r<t.length;r++){let s=pl(t[r]);if(Lwo.has(s)||Fwo(s))return!0;if(r===i&&n?.has(s))return!0}return!1}
export{ARs,Uy,CRs,YQ,lV,Lwo,Ptn,Nwo,pl,p2n,Fwo,W8};
