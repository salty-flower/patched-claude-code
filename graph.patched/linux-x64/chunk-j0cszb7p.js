// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Ur}from"./chunk-eqmywwjn.js";import{a}from"./chunk-xwn0mfnc.js";import{oF}from"./chunk-9pt2nr7j.js";import{Xn}from"./chunk-kmgwwaz2.js";import{sep as f}from"path";var GDo=new Set([".git","hooks",".husky",".githooks","node_modules",".vscode",".idea","head","config","objects","refs",".claude","skills","commands","agents",".cargo",".devcontainer",".yarn",".mvn"]),Udn=/[\u200c-\u200f\u202a-\u202e\u206a-\u206f\ufeff]/,Bdn=new RegExp(Udn,"g");function hl(e){return l(e,!0)}function Y6n(e){return l(e,!1)}function l(e,o){let n=e.toLowerCase().replace(/\u0131/g,"i").replace(/\u017f/g,"s"),t=n.replace(Bdn,"");return(o?t.replace(/:.*$/,""):t).replace(/[. ]+$/,"")||n}function VDo(e){return!1}function pJ(e,o,n){let t=e.slice(o.length).split(f),u=t.length-1;for(let r=0;r<t.length;r++){let i=hl(t[r]);if(GDo.has(i)||VDo(i))return!0;if(r===u&&n?.has(i))return!0}return!1}function c(){if(a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST)return!1;return!Xn()}function qWs(){return a.CLAUDE_CODE_ENVIRONMENT_KIND==="byoc"&&!a.CLAUDE_CODE_BYOC_ENABLE_DATADOG}function s(){return a.CLAUDE_CODE_CUSTOM_OAUTH_URL!==void 0}function Fdn(){return!oF()&&!s()}function uy(){return oF()||c()||Ur()!==null||s()}function q6n(){return c()||Ur()!==null||s()}function Ote(){return a.CLAUDE_CODE_ENABLE_FEEDBACK_SURVEY_FOR_OTEL}function qq(){if(Ote())return!1;return oF()}
export{qWs,Fdn,uy,q6n,Ote,qq,GDo,Udn,Bdn,hl,Y6n,VDo,pJ};
