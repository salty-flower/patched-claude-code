// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{TV}from"./chunk-2vv5hpw3.js";import{Sht}from"./chunk-bwhwnwa0.js";var r={refusal_fallback_prompt:"choose: retry on fallback model or edit prompt"};function Ent(e,t,n,s){return{tool_name:`dialog:${e}`,display_tool_name:"Claude needs your input",action_description:r[e]??`Respond to the ${e} dialog to continue`,raw_command:void 0,tool_use_id:s??"",request_id:n,input:{dialog_kind:e,payload:t}}}var o=new Set(["interrupt","stop_task","set_permission_mode","set_model","set_max_thinking_tokens","set_color","mcp_toggle","message_rated"]),i=new Set(["can_use_tool","request_user_dialog","elicitation"]),a=new Set(["set_model","set_permission_mode","set_max_thinking_tokens"]);function Ant(e){return o.has(e.request.subtype)&&!a.has(e.request.subtype)}function IPn(){TV(!0)}function k7t(e,t){switch(e.type){case"user":return!(t?.hostOwnsOrigin===!0&&Sht(e.origin,e.isSynthetic));case"bash_command":return!0;case"control_request":return o.has(e.request?.subtype);default:return!1}}function zfe(e){return i.has(e.request.subtype)}
export{Ent,Ant,IPn,k7t,zfe};
