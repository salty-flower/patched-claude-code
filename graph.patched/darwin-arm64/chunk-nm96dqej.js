// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{bo}from"./chunk-ersar6wn.js";import{m,p}from"./chunk-wn8xtaqg.js";import{Ll}from"./chunk-epan1q4y.js";import{swe}from"./chunk-fmz27ntz.js";import{LJr}from"./chunk-x289pnbh.js";var bfe="repo_rules_unread";function gvi(e,o){let t=swe(e,o.meta);return t instanceof Promise?t.then((r)=>s(r,o)):s(t,o)}function s(e,o){if(e.refused!==void 0)return(e.refused.cause==="repo_rules_read_failed"?m:p)("mcp_serve_file_call",e.refused.cause),bfe;return e.repoRules===void 0?o.launchPermissionContext:n(o.launchPermissionContext,e.repoRules,o)}function n(e,o,{session:t}){let r=e??Ll();return{...r,...LJr({alwaysDenyRules:{},alwaysAskRules:{}},r,bo(t).originalCwd,o,"upload")}}
export{bfe,gvi};
