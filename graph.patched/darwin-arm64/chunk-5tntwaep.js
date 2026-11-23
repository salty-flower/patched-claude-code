// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{rs}from"./chunk-m8nhymg4.js";import{m,c}from"./chunk-f8g4f3e3.js";import{Rd}from"./chunk-954kbre8.js";import{gLe}from"./chunk-davacang.js";import{e8o}from"./chunk-bh0c0ejh.js";var SAe="repo_rules_unread";function x3a(e,o){let t=gLe(e,o.meta);return t instanceof Promise?t.then((r)=>s(r,o)):s(t,o)}function s(e,o){if(e.refused!==void 0)return(e.refused.cause==="repo_rules_read_failed"?m:c)("mcp_serve_file_call",e.refused.cause),SAe;return e.repoRules===void 0?o.launchPermissionContext:n(o.launchPermissionContext,e.repoRules,o)}function n(e,o,{session:t}){let r=e??Rd();return{...r,...e8o({alwaysDenyRules:{},alwaysAskRules:{}},r,rs(t).originalCwd,o,"upload")}}
export{SAe,x3a};
