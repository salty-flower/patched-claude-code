// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{rs}from"./chunk-r3adsed5.js";import{m,c}from"./chunk-ztxp0r5w.js";import{xd}from"./chunk-k2zw08bd.js";import{pLe}from"./chunk-8cmf6tn1.js";import{T8o}from"./chunk-rqxsgfqm.js";var fCe="repo_rules_unread";function BKa(e,o){let t=pLe(e,o.meta);return t instanceof Promise?t.then((r)=>s(r,o)):s(t,o)}function s(e,o){if(e.refused!==void 0)return(e.refused.cause==="repo_rules_read_failed"?m:c)("mcp_serve_file_call",e.refused.cause),fCe;return e.repoRules===void 0?o.launchPermissionContext:n(o.launchPermissionContext,e.repoRules,o)}function n(e,o,{session:t}){let r=e??xd();return{...r,...T8o({alwaysDenyRules:{},alwaysAskRules:{}},r,rs(t).originalCwd,o,"upload")}}
export{fCe,BKa};
