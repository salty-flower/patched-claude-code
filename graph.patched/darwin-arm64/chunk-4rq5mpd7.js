// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Y0n,X0n}from"./chunk-s7cabppm.js";var l=/^[CDG][A-Z0-9]{6,}$/;function Nlo(e){let n=e.replace(/^#/,"");return l.test(n)?`https://slack.com/app_redirect?channel=${n}`:null}var t=new Set(["slack_send_message","slack_post_message"]),Flo="mcp-slack-send";function V0n(e){return t.has(e)}function qms(e){let n=e.channel_id??e.channel;if(typeof n!=="string")return null;let r=Y0n(n);if(!r)return null;return{label:`#${r.replace(/^#/,"")}`,url:Nlo(n)}}function K0n(){return{uiTableKey:Flo,userFacingName(){return"Slacked"},renderToolUseMessage(e,n){return n.verbose?X0n(e,n):""}}}
export{Nlo,Flo,V0n,qms,K0n};
