// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{up,ADn,Luo,fK}from"./chunk-9pp7g5yw.js";import{_g}from"./chunk-h21zbzen.js";var uwe="request_reauthored",n=5000;function JKs(o,e){if(e.gate_mark!==uwe||o.tool_use_id!==e.tool_use_id)return{ok:!1,why:"malformed"};let i={v:up,call_id:o.tool_use_id,expires_in_ms:fK(e.deadline_ms-n)},s={kind:"ccr_container",tool_host_interface:o.tool_host_interface};switch(o.step){case"check":return{ok:!1,why:"malformed"};case"run":return Luo({...i,caller:{...s,permission_mode:o.permission_context.mode,model:o.main_loop_model,..._g(o,[ADn,"conversation_id","compaction_id"])},...o.approval!==void 0&&{approval:{ask_id:o.approval.ask_digest,decision:"allow",..._g(o.approval,["attested","permission_updates"])}}});case"decline":return Luo({...i,caller:s,approval:{ask_id:o.ask_digest,decision:"deny"}})}}
export{uwe,JKs};
