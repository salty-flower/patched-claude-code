// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{MO}from"./chunk-j22kanvh.js";import{b,$f}from"./chunk-ynzt0fm1.js";var i=/[\x7f-\x9f]/g,s=(e)=>e.replace(i,(n)=>`\\u${n.charCodeAt(0).toString(16).padStart(4,"0")}`),c=/[\x00-\x1f\x7f-\x9f]/g;function dxt(e){return e.replace(c,"")}function pxt(e,{verbose:n}){if(Object.keys(e).length===0)return"";let r=MO(e);if(r!==null)return r;return Object.entries(e).map(([t,o])=>{let l=s(b(o));return`${s($f(t).slice(1,-1))}: ${l}`}).join(", ")}var a=/^[CDG][A-Z0-9]{6,}$/;function oQt(e){let n=e.replace(/^#/,"");return a.test(n)?`https://slack.com/app_redirect?channel=${n}`:null}var u=new Set(["slack_send_message","slack_post_message"]),iQt="mcp-slack-send";function Xrt(e){return u.has(e)}function b1n(e){let n=e.channel_id??e.channel;if(typeof n!=="string")return null;let r=dxt(n);if(!r)return null;return{label:`#${r.replace(/^#/,"")}`,url:oQt(n)}}function Yrt(){return{uiTableKey:iQt,userFacingName(){return"Slacked"},renderToolUseMessage(e,n){return n.verbose?pxt(e,n):""}}}
export{dxt,pxt,oQt,iQt,Xrt,b1n,Yrt};
