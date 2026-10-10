// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{g,m}from"./chunk-2hb5361r.js";import{t}from"./chunk-gyf58rwf.js";import{p}from"./chunk-fdwn5gdv.js";import{Cet}from"./chunk-sfn1dbxq.js";import{o,oe,u,ue,U}from"./chunk-9cmjz7j9.js";var r=p(()=>u({behavior:U(["allow","deny"]),updatedInput:ue(o(),oe()).optional().transform((e)=>e&&Object.keys(e).length===0?void 0:e),updatedPermissions:Cet("refused","bridge client"),message:o().optional().catch(void 0),toolName:o().optional().catch(void 0)}));function dqo(e){let s=r().safeParse(e);if(!s.success){t(`Malformed bridge permission response ignored: ${s.error.issues[0]?.message??"unknown"}`,{level:"warn"}),m("permission_bridge_relay","permission_response_malformed");return}if(typeof e==="object"&&e!==null&&e.updatedPermissions!==void 0&&s.data.updatedPermissions===void 0)return{...s.data,updatedPermissionsDropped:!0};return s.data}function yWe(e,s,n){if(typeof e!=="string")return!1;if(!vQe(e,s))return g("bridge_permission_toolname_check"),!1;return t(`Ignoring can_use_tool control_response for request_id=${n}: toolName '${e}' does not match pending '${s}'`,{level:"warn"}),m("bridge_permission_toolname_check","toolname_mismatch"),!0}function vQe(e,s){return typeof e==="string"&&e!==s}function kq(e){return(e.split("__").pop()||e).replace(/_/g," ").replace(/\b\w/g,(n)=>n.toUpperCase())}
export{dqo,yWe,vQe,kq};
