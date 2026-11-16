// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Vkr,OVe}from"./chunk-wqb2b4v0.js";var l=/^[CDG][A-Z0-9]{6,}$/;function Wgs(e){let n=e.replace(/^#/,"");return l.test(n)?`https://slack.com/app_redirect?channel=${n}`:null}var t=new Set(["slack_send_message","slack_post_message"]),Ggs="mcp-slack-send";function eBi(e){return t.has(e)}function tBi(e){let n=e.channel_id??e.channel;if(typeof n!=="string")return null;let r=Vkr(n);if(!r)return null;return{label:`#${r.replace(/^#/,"")}`,url:Wgs(n)}}function nBi(){return{uiTableKey:Ggs,userFacingName(){return"Slacked"},renderToolUseMessage(e,n){return n.verbose?OVe(e,n):""}}}
export{Wgs,Ggs,eBi,tBi,nBi};
