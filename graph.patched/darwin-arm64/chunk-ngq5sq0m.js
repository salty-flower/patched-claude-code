// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{Ub,c9}from"./chunk-ecyypctx.js";import{i}from"./chunk-n1cpnz94.js";import{gt}from"./chunk-gbez09mv.js";import{ht}from"./chunk-2pfahbtc.js";import{qf}from"./chunk-bvhk5wc8.js";import{a$}from"./chunk-z5bx7sar.js";import{Nr}from"./chunk-7crvt576.js";import{cX,W4}from"./chunk-gbjtfe0t.js";function fqe(o){return l()&&!W4(a$)&&(o===void 0||r(o))}function l(){if(!qf())return!1;if(cX()||Ub())return!1;if(i.CLAUDE_CODE_ENTRYPOINT==="local-agent")return!1;let o=gt().skillOverrides?.[a$];if(o==="off"||o==="user-invocable-only")return!1;let e=c9();if(e!==void 0&&!e.includes(a$))return!1;return!0}function r(o){return o.some((e)=>ht(e,Nr))}
export{fqe};
