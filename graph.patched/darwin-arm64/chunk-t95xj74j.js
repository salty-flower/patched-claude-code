// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{zkn,Vkn}from"./chunk-71ahk3j0.js";var l=/^[CDG][A-Z0-9]{6,}$/;function F9r(e){let n=e.replace(/^#/,"");return l.test(n)?`https://slack.com/app_redirect?channel=${n}`:null}var t=new Set(["slack_send_message","slack_post_message"]),$9r="mcp-slack-send";function jkn(e){return t.has(e)}function HQo(e){let n=e.channel_id??e.channel;if(typeof n!=="string")return null;let r=zkn(n);if(!r)return null;return{label:`#${r.replace(/^#/,"")}`,url:F9r(n)}}function Wkn(){return{uiTableKey:$9r,userFacingName(){return"Slacked"},renderToolUseMessage(e,n){return n.verbose?Vkn(e,n):""}}}
export{F9r,$9r,jkn,HQo,Wkn};
