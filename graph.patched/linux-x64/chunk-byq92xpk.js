// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{mEr,Aqe}from"./chunk-zaxe68t4.js";var l=/^[CDG][A-Z0-9]{6,}$/;function o_s(e){let n=e.replace(/^#/,"");return l.test(n)?`https://slack.com/app_redirect?channel=${n}`:null}var t=new Set(["slack_send_message","slack_post_message"]),s_s="mcp-slack-send";function Y1i(e){return t.has(e)}function X1i(e){let n=e.channel_id??e.channel;if(typeof n!=="string")return null;let r=mEr(n);if(!r)return null;return{label:`#${r.replace(/^#/,"")}`,url:o_s(n)}}function J1i(){return{uiTableKey:s_s,userFacingName(){return"Slacked"},renderToolUseMessage(e,n){return n.verbose?Aqe(e,n):""}}}
export{o_s,s_s,Y1i,X1i,J1i};
