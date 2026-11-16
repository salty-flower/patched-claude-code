// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Gb,MX}from"./chunk-r3adsed5.js";import{i}from"./chunk-5g5ea6r9.js";import{bt}from"./chunk-4rkc6f3s.js";import{pt}from"./chunk-k2zw08bd.js";import{th}from"./chunk-bqgwb7jg.js";import{KB}from"./chunk-xkvthq78.js";import{_r}from"./chunk-q1fhymf8.js";import{MZ,d7}from"./chunk-57k1heyf.js";function DJe(o){return l()&&!d7(KB)&&(o===void 0||r(o))}function l(){if(!th())return!1;if(MZ()||Gb())return!1;if(i.CLAUDE_CODE_ENTRYPOINT==="local-agent")return!1;let o=bt().skillOverrides?.[KB];if(o==="off"||o==="user-invocable-only")return!1;let e=MX();if(e!==void 0&&!e.includes(KB))return!1;return!0}function r(o){return o.some((e)=>pt(e,_r))}
export{DJe};
