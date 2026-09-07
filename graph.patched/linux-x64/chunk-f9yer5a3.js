// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{mx}from"./chunk-hvf4zpd9.js";import{wn,Rp}from"./chunk-mnk1rjxv.js";import{posix as a}from"path";var lct=String.raw`\s\u2800\uFFF9-\uFFFB\p{Cc}\p{M}\p{Default_Ignorable_Code_Point}`,c=new RegExp(`^[${lct}]+`,"u");function ern(n){return n.replace(c,"")}function F$t(n,r=trn(n)){return wn(n)||obe(n)||mx.test(r[0])||r.map(ern).some((e)=>wn(e)||obe(e))}var u=/^\.\.\//;function obe(n){return Rp(n)||Rp(a.normalize(n).replace(u,"/"))||l(n)&&Rp("/"+n)}function l(n){let r=a.normalize(n);return r===".."||r.startsWith("../")}function cct(n){let r=n.slice(7);return F$t(r)||F$t(r.slice(1))}var i=/(?:%[0-9A-Fa-f]{2}){1,512}/g,f=/^%[0-9A-Fa-f]{2}/;function trn(n){if(!n.includes("%"))return[n,n];let r=new TextDecoder("utf-8",{fatal:!1,ignoreBOM:!0});return[n.replace(i,(e,t)=>{let o=t+e.length;return r.decode(s(e),{stream:f.test(n.slice(o,o+3))})}),n.replace(i,(e)=>Array.from(s(e),(t)=>String.fromCharCode(t)).join(""))]}function s(n){return Uint8Array.from(n.slice(1).split("%"),(r)=>parseInt(r,16))}
export{lct,ern,F$t,obe,cct,trn};
