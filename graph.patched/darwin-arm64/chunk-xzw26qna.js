// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{Il}from"./chunk-87y2sp93.js";import{BDe}from"./chunk-j9cfdsj6.js";var rSs="PostCompact [",f7e="This session is being continued from a previous conversation that ran out of context. The summary below covers the earlier portion of the conversation.";function r(o){return o.startsWith(`<${Il}>`)&&o.includes(rSs)}function CLn(o){if(typeof o==="string")return r(o);if(!Array.isArray(o)||o.length!==1)return!1;let t=o[0];return BDe(t)&&r(t.text)}
export{rSs,f7e,CLn};
