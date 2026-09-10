// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{EL}from"./chunk-6ebnzmdf.js";import{S,Hc}from"./chunk-cmg3b5hg.js";var i=/[\x7f-\x9f]/g,s=(e)=>e.replace(i,(n)=>`\\u${n.charCodeAt(0).toString(16).padStart(4,"0")}`),c=/[\x00-\x1f\x7f-\x9f]/g;function BBt(e){return e.replace(c,"")}function jBt(e,{verbose:n}){if(Object.keys(e).length===0)return"";let r=EL(e);if(r!==null)return r;return Object.entries(e).map(([t,o])=>{let l=s(S(o));return`${s(Hc(t).slice(1,-1))}: ${l}`}).join(", ")}var a=/^[CDG][A-Z0-9]{6,}$/;function Ecn(e){let n=e.replace(/^#/,"");return a.test(n)?`https://slack.com/app_redirect?channel=${n}`:null}var u=new Set(["slack_send_message","slack_post_message"]),kcn="mcp-slack-send";function zft(e){return u.has(e)}function QKn(e){let n=e.channel_id??e.channel;if(typeof n!=="string")return null;let r=BBt(n);if(!r)return null;return{label:`#${r.replace(/^#/,"")}`,url:Ecn(n)}}function Wft(){return{uiTableKey:kcn,userFacingName(){return"Slacked"},renderToolUseMessage(e,n){return n.verbose?jBt(e,n):""}}}
export{BBt,jBt,Ecn,kcn,zft,QKn,Wft};
