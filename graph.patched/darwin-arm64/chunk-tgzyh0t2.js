// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{asr,cAt}from"./chunk-0x9x817t.js";var l=/^[CDG][A-Z0-9]{6,}$/;function QKo(e){let n=e.replace(/^#/,"");return l.test(n)?`https://slack.com/app_redirect?channel=${n}`:null}var t=new Set(["slack_send_message","slack_post_message"]),ZKo="mcp-slack-send";function etr(e){return t.has(e)}function Eoi(e){let n=e.channel_id??e.channel;if(typeof n!=="string")return null;let r=asr(n);if(!r)return null;return{label:`#${r.replace(/^#/,"")}`,url:QKo(n)}}function ttr(){return{uiTableKey:ZKo,userFacingName(){return"Slacked"},renderToolUseMessage(e,n){return n.verbose?cAt(e,n):""}}}
export{QKo,ZKo,etr,Eoi,ttr};
