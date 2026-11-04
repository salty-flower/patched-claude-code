// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{Kr}from"./chunk-ecyypctx.js";import{i}from"./chunk-n1cpnz94.js";import{TU}from"./chunk-87y2sp93.js";import{Nn}from"./chunk-39j7k06t.js";function t(){if(i.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST)return!1;if(!Nn())return!0;return!1}function k6i(){return i.CLAUDE_CODE_ENVIRONMENT_KIND==="byoc"&&!i.CLAUDE_CODE_BYOC_ENABLE_DATADOG}function e(){return i.CLAUDE_CODE_CUSTOM_OAUTH_URL!==void 0}function eUn(){return!TU()&&!e()}function d_(){return TU()||t()||Kr()!==null||e()}function ONt(){return t()||Kr()!==null||e()}function Yue(){return i.CLAUDE_CODE_ENABLE_FEEDBACK_SURVEY_FOR_OTEL}function FX(){if(Yue())return!1;return TU()}
export{k6i,eUn,d_,ONt,Yue,FX};
