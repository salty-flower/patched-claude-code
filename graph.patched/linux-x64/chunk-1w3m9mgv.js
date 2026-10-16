// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{g,m}from"./chunk-rhe3yjtx.js";import{t}from"./chunk-cwsn6mdf.js";import{p}from"./chunk-he0s6sfd.js";import{dit}from"./chunk-38nf1dnm.js";import{o,oe,u,fe,B}from"./chunk-zypddzr3.js";var r=p(()=>u({behavior:B(["allow","deny"]),updatedInput:fe(o(),oe()).optional().transform((e)=>e&&Object.keys(e).length===0?void 0:e),updatedPermissions:dit("refused","bridge client"),message:o().optional().catch(void 0),toolName:o().optional().catch(void 0)}));function ons(e){let s=r().safeParse(e);if(!s.success){t(`Malformed bridge permission response ignored: ${s.error.issues[0]?.message??"unknown"}`,{level:"warn"}),m("permission_bridge_relay","permission_response_malformed");return}if(typeof e==="object"&&e!==null&&e.updatedPermissions!==void 0&&s.data.updatedPermissions===void 0)return{...s.data,updatedPermissionsDropped:!0};return s.data}function NKe(e,s,n){if(typeof e!=="string")return!1;if(!rot(e,s))return g("bridge_permission_toolname_check"),!1;return t(`Ignoring can_use_tool control_response for request_id=${n}: toolName '${e}' does not match pending '${s}'`,{level:"warn"}),m("bridge_permission_toolname_check","toolname_mismatch"),!0}function rot(e,s){return typeof e==="string"&&e!==s}function _Y(e){return(e.split("__").pop()||e).replace(/_/g," ").replace(/\b\w/g,(n)=>n.toUpperCase())}
export{ons,NKe,rot,_Y};
