// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{ode}from"./chunk-eqmywwjn.js";import{THs,hi}from"./chunk-xaxbaeg3.js";import{tPe}from"./chunk-7f1jmyrt.js";function qAn(t,r){hi("user_prompt",{prompt_length:String(r?.length??0),...THs(r),...t.attributes})}function kb(t){let r=t.trim();if(!r.startsWith("/"))return null;let{name:e,args:n}=tPe(r);if(!e)return null;let o="(MCP)";if(n===o)return{commandName:`${e} ${o}`,args:"",isMcp:!0};if(n.startsWith(o)&&/\s/.test(n.charAt(o.length)))return{commandName:`${e} ${o}`,args:n.slice(o.length).trimStart(),isMcp:!0};return{commandName:e,args:n,isMcp:!1}}function mCe(t,r){if(!t.subcommands)return;let e=r.trimStart(),n=e.search(/\s/),o=n===-1?e:e.slice(0,n),s=o?t.subcommands[o.toLowerCase()]:void 0;if(s===void 0)return;let m=n===-1?"":e.slice(n+1).trim();if(t.subcommandsBareOnly&&m!=="")return;return{targetName:s,consumedToken:o,remainingArgs:m}}function p4t(t,r){let e=ode();if(r===void 0){qAn(t,t.text);return}r({text:t.text,attributes:{...e&&{"prompt.id":e},...t.attributes}})}var $kt=(t)=>typeof t==="string"?t:t.map((r)=>({...r}));
export{kb,mCe,qAn,p4t,$kt};
