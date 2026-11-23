// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{GS,UX}from"./chunk-m8nhymg4.js";import{i}from"./chunk-428zme0n.js";import{St}from"./chunk-x4r54n7x.js";import{mt}from"./chunk-954kbre8.js";import{th}from"./chunk-3mj276zj.js";import{JB}from"./chunk-njpe8mzg.js";import{_r}from"./chunk-2kwzks7r.js";import{WZ,bY}from"./chunk-ycr4rtd0.js";function WJe(o){return l()&&!bY(JB)&&(o===void 0||r(o))}function l(){if(!th())return!1;if(WZ()||GS())return!1;if(i.CLAUDE_CODE_ENTRYPOINT==="local-agent")return!1;let o=St().skillOverrides?.[JB];if(o==="off"||o==="user-invocable-only")return!1;let e=UX();if(e!==void 0&&!e.includes(JB))return!1;return!0}function r(o){return o.some((e)=>mt(e,_r))}
export{WJe};
