// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{Io}from"./chunk-ecyypctx.js";import{m,c}from"./chunk-ad5ya8vz.js";import{Jl}from"./chunk-2pfahbtc.js";import{qRe}from"./chunk-sgzsay18.js";import{gRo}from"./chunk-x7nzp7y9.js";var Ube="repo_rules_unread";function Vra(e,o){let t=qRe(e,o.meta);return t instanceof Promise?t.then((r)=>s(r,o)):s(t,o)}function s(e,o){if(e.refused!==void 0)return(e.refused.cause==="repo_rules_read_failed"?m:c)("mcp_serve_file_call",e.refused.cause),Ube;return e.repoRules===void 0?o.launchPermissionContext:n(o.launchPermissionContext,e.repoRules,o)}function n(e,o,{session:t}){let r=e??Jl();return{...r,...gRo({alwaysDenyRules:{},alwaysAskRules:{}},r,Io(t).originalCwd,o,"upload")}}
export{Ube,Vra};
