// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{ho}from"./chunk-s8xs8s76.js";import{a}from"./chunk-3a4khaz5.js";import{wO}from"./chunk-0dpks9t0.js";import{Bn}from"./chunk-m9hfdm3b.js";function e(){if(a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST)return!1;return!Bn()}function Zwo(){return a.CLAUDE_CODE_ENVIRONMENT_KIND==="byoc"&&!a.CLAUDE_CODE_BYOC_ENABLE_DATADOG}function t(){return a.CLAUDE_CODE_CUSTOM_OAUTH_URL!==void 0}function Hg(){return e()||ho()!==null||wO()||t()}function Kq(){return a.CLAUDE_CODE_ENABLE_FEEDBACK_SURVEY_FOR_OTEL}function fL(){if(Kq())return!1;return wO()}
export{Zwo,Hg,Kq,fL};
