// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{co}from"./chunk-vd0a9d2s.js";import{a}from"./chunk-70qqbqq4.js";import{YF}from"./chunk-tdmgys2e.js";import{Kn}from"./chunk-fsnz81vy.js";function u(){if(a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST)return!1;return!Kn()}function Eys(){return a.CLAUDE_CODE_ENVIRONMENT_KIND==="byoc"&&!a.CLAUDE_CODE_BYOC_ENABLE_DATADOG}function l(){return a.CLAUDE_CODE_CUSTOM_OAUTH_URL!==void 0}function gy(){return u()||co()!==null||YF()||l()}function vys(){return u()||co()!==null||l()}function iJ(){return a.CLAUDE_CODE_ENABLE_FEEDBACK_SURVEY_FOR_OTEL}function N6(){if(iJ())return!1;return YF()}import{sep as f}from"path";var Pfo=new Set([".git","hooks",".husky",".githooks","node_modules",".vscode",".idea","head","config","objects","refs",".claude","skills","commands","agents",".cargo",".devcontainer",".yarn",".mvn"]),x7t=/[\u200c-\u200f\u202a-\u202e\u206a-\u206f\ufeff]/,Ifo=new RegExp(x7t,"g");function Ja(e){return c(e,!0)}function FNn(e){return c(e,!1)}function c(e,o){let n=e.toLowerCase().replace(/\u0131/g,"i").replace(/\u017f/g,"s"),t=n.replace(Ifo,"");return(o?t.replace(/:.*$/,""):t).replace(/[. ]+$/,"")||n}function Ofo(e){return!1}function S9(e,o,n){let t=e.slice(o.length).split(f),i=t.length-1;for(let r=0;r<t.length;r++){let s=Ja(t[r]);if(Pfo.has(s)||Ofo(s))return!0;if(r===i&&n?.has(s))return!0}return!1}
export{Eys,gy,vys,iJ,N6,Pfo,x7t,Ifo,Ja,FNn,Ofo,S9};
