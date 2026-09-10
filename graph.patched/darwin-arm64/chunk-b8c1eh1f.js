// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{Fq}from"./chunk-cet8na02.js";import{Tet}from"./chunk-epgmv1rv.js";var o=new Set(["interrupt","stop_task","set_permission_mode","set_model","set_max_thinking_tokens","set_color","mcp_toggle","message_rated"]),r=new Set(["can_use_tool","request_user_dialog","elicitation"]),i=new Set(["set_model","set_permission_mode","set_max_thinking_tokens"]);function Fft(e){return o.has(e.request.subtype)&&!i.has(e.request.subtype)}function z3n(){Fq(!0)}function scn(e,t){switch(e.type){case"user":return!(t?.hostOwnsOrigin===!0&&Tet(e.origin,e.isSynthetic));case"bash_command":return!0;case"control_request":return o.has(e.request?.subtype);default:return!1}}function Gwe(e){return r.has(e.request.subtype)}var a={refusal_fallback_prompt:"choose: retry on fallback model or edit prompt"};function Nft(e,t,n,s){return{tool_name:`dialog:${e}`,display_tool_name:"Claude needs your input",action_description:a[e]??`Respond to the ${e} dialog to continue`,raw_command:void 0,tool_use_id:s??"",request_id:n,input:{dialog_kind:e,payload:t}}}
export{Nft,Fft,z3n,scn,Gwe};
