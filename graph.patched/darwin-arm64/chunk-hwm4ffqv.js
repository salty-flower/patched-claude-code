// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{$Xt,UXt}from"./chunk-fqea5d2s.js";var l=/^[CDG][A-Z0-9]{6,}$/;function Fhr(e){let n=e.replace(/^#/,"");return l.test(n)?`https://slack.com/app_redirect?channel=${n}`:null}var t=new Set(["slack_send_message","slack_post_message"]),$hr="mcp-slack-send";function LXt(e){return t.has(e)}function _uo(e){let n=e.channel_id??e.channel;if(typeof n!=="string")return null;let r=$Xt(n);if(!r)return null;return{label:`#${r.replace(/^#/,"")}`,url:Fhr(n)}}function NXt(){return{uiTableKey:$hr,userFacingName(){return"Slacked"},renderToolUseMessage(e,n){return n.verbose?UXt(e,n):""}}}
export{Fhr,$hr,LXt,_uo,NXt};
