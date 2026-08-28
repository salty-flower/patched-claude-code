// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{lH}from"./chunk-j7d3ep7z.js";import{S,gf}from"./chunk-cmkfpkth.js";var i=/[\x7f-\x9f]/g,s=(e)=>e.replace(i,(n)=>`\\u${n.charCodeAt(0).toString(16).padStart(4,"0")}`),c=/[\x00-\x1f\x7f-\x9f]/g;function aAt(e){return e.replace(c,"")}function lAt(e,{verbose:n}){if(Object.keys(e).length===0)return"";let r=lH(e);if(r!==null)return r;return Object.entries(e).map(([t,o])=>{let l=s(S(o));return`${s(gf(t).slice(1,-1))}: ${l}`}).join(", ")}var a=/^[CDG][A-Z0-9]{6,}$/;function y8t(e){let n=e.replace(/^#/,"");return a.test(n)?`https://slack.com/app_redirect?channel=${n}`:null}var u=new Set(["slack_send_message","slack_post_message"]),_8t="mcp-slack-send";function OZe(e){return u.has(e)}function IIn(e){let n=e.channel_id??e.channel;if(typeof n!=="string")return null;let r=aAt(n);if(!r)return null;return{label:`#${r.replace(/^#/,"")}`,url:y8t(n)}}function HZe(){return{uiTableKey:_8t,userFacingName(){return"Slacked"},renderToolUseMessage(e,n){return n.verbose?lAt(e,n):""}}}
export{aAt,lAt,y8t,_8t,OZe,IIn,HZe};
