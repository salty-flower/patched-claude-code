// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{Qr}from"./chunk-a7cah040.js";import{a}from"./chunk-1fpwxv0g.js";import{yM}from"./chunk-zwbw6dvp.js";import{Gn}from"./chunk-ntsbwr3d.js";function u(){if(a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST)return!1;return!Gn()}function Y1o(){return a.CLAUDE_CODE_ENVIRONMENT_KIND==="byoc"&&!a.CLAUDE_CODE_BYOC_ENABLE_DATADOG}function l(){return a.CLAUDE_CODE_CUSTOM_OAUTH_URL!==void 0}function Vg(){return u()||Qr()!==null||yM()||l()}function X1o(){return u()||Qr()!==null||l()}function q5(){return a.CLAUDE_CODE_ENABLE_FEEDBACK_SURVEY_FOR_OTEL}function hN(){if(q5())return!1;return yM()}import{sep as f}from"path";var ajr=new Set([".git","hooks",".husky",".githooks","node_modules",".vscode",".idea","head","config","objects","refs",".claude","skills","commands","agents",".cargo",".devcontainer",".yarn",".mvn"]),B1t=/[\u200c-\u200f\u202a-\u202e\u206a-\u206f\ufeff]/,ljr=new RegExp(B1t,"g");function Ad(e){return c(e,!0)}function Kgn(e){return c(e,!1)}function c(e,o){let n=e.toLowerCase().replace(/\u0131/g,"i").replace(/\u017f/g,"s"),t=n.replace(ljr,"");return(o?t.replace(/:.*$/,""):t).replace(/[. ]+$/,"")||n}function cjr(e){return!1}function xq(e,o,n){let t=e.slice(o.length).split(f),i=t.length-1;for(let r=0;r<t.length;r++){let s=Ad(t[r]);if(ajr.has(s)||cjr(s))return!0;if(r===i&&n?.has(s))return!0}return!1}
export{Y1o,Vg,X1o,q5,hN,ajr,B1t,ljr,Ad,Kgn,cjr,xq};
