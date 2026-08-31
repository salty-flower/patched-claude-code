// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{rx}from"./chunk-764j5mtt.js";import{jn,Wv}from"./chunk-er188mb2.js";import{posix as a}from"path";var hlt=String.raw`\s\u2800\uFFF9-\uFFFB\p{Cc}\p{M}\p{Default_Ignorable_Code_Point}`,c=new RegExp(`^[${hlt}]+`,"u");function gon(n){return n.replace(c,"")}function nMt(n,r=hon(n)){return jn(n)||jye(n)||rx.test(r[0])||r.map(gon).some((e)=>jn(e)||jye(e))}var u=/^\.\.\//;function jye(n){return Wv(n)||Wv(a.normalize(n).replace(u,"/"))||l(n)&&Wv("/"+n)}function l(n){let r=a.normalize(n);return r===".."||r.startsWith("../")}function ylt(n){let r=n.slice(7);return nMt(r)||nMt(r.slice(1))}var i=/(?:%[0-9A-Fa-f]{2}){1,512}/g,f=/^%[0-9A-Fa-f]{2}/;function hon(n){if(!n.includes("%"))return[n,n];let r=new TextDecoder("utf-8",{fatal:!1,ignoreBOM:!0});return[n.replace(i,(e,t)=>{let o=t+e.length;return r.decode(s(e),{stream:f.test(n.slice(o,o+3))})}),n.replace(i,(e)=>Array.from(s(e),(t)=>String.fromCharCode(t)).join(""))]}function s(n){return Uint8Array.from(n.slice(1).split("%"),(r)=>parseInt(r,16))}
export{hlt,gon,nMt,jye,ylt,hon};
