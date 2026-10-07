// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{mo}from"./chunk-8mvda08c.js";import{a}from"./chunk-j77txbjn.js";import{tF}from"./chunk-qfs4y3ww.js";import{Vn}from"./chunk-sac2pmqn.js";function u(){if(a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST)return!1;return!Vn()}function Das(){return a.CLAUDE_CODE_ENVIRONMENT_KIND==="byoc"&&!a.CLAUDE_CODE_BYOC_ENABLE_DATADOG}function l(){return a.CLAUDE_CODE_CUSTOM_OAUTH_URL!==void 0}function Zh(){return u()||mo()!==null||tF()||l()}function Las(){return u()||mo()!==null||l()}function UX(){return a.CLAUDE_CODE_ENABLE_FEEDBACK_SURVEY_FOR_OTEL}function xG(){if(UX())return!1;return tF()}import{sep as f}from"path";var Aso=new Set([".git","hooks",".husky",".githooks","node_modules",".vscode",".idea","head","config","objects","refs",".claude","skills","commands","agents",".cargo",".devcontainer",".yarn",".mvn"]),T9t=/[\u200c-\u200f\u202a-\u202e\u206a-\u206f\ufeff]/,Tso=new RegExp(T9t,"g");function kl(e){return c(e,!0)}function S0n(e){return c(e,!1)}function c(e,o){let n=e.toLowerCase().replace(/\u0131/g,"i").replace(/\u017f/g,"s"),t=n.replace(Tso,"");return(o?t.replace(/:.*$/,""):t).replace(/[. ]+$/,"")||n}function Rso(e){return!1}function u5(e,o,n){let t=e.slice(o.length).split(f),i=t.length-1;for(let r=0;r<t.length;r++){let s=kl(t[r]);if(Aso.has(s)||Rso(s))return!0;if(r===i&&n?.has(s))return!0}return!1}
export{Das,Zh,Las,UX,xG,Aso,T9t,Tso,kl,S0n,Rso,u5};
