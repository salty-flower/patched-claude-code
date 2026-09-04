// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{UL}from"./chunk-bpcwadmp.js";import{S,Pl}from"./chunk-84crg0gy.js";var i=/[\x7f-\x9f]/g,s=(e)=>e.replace(i,(n)=>`\\u${n.charCodeAt(0).toString(16).padStart(4,"0")}`),c=/[\x00-\x1f\x7f-\x9f]/g;function VLt(e){return e.replace(c,"")}function KLt(e,{verbose:n}){if(Object.keys(e).length===0)return"";let r=UL(e);if(r!==null)return r;return Object.entries(e).map(([t,o])=>{let l=s(S(o));return`${s(Pl(t).slice(1,-1))}: ${l}`}).join(", ")}var a=/^[CDG][A-Z0-9]{6,}$/;function Ion(e){let n=e.replace(/^#/,"");return a.test(n)?`https://slack.com/app_redirect?channel=${n}`:null}var u=new Set(["slack_send_message","slack_post_message"]),Pon="mcp-slack-send";function mct(e){return u.has(e)}function Z6n(e){let n=e.channel_id??e.channel;if(typeof n!=="string")return null;let r=VLt(n);if(!r)return null;return{label:`#${r.replace(/^#/,"")}`,url:Ion(n)}}function gct(){return{uiTableKey:Pon,userFacingName(){return"Slacked"},renderToolUseMessage(e,n){return n.verbose?KLt(e,n):""}}}
export{VLt,KLt,Ion,Pon,mct,Z6n,gct};
