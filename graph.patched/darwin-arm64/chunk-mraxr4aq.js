// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{Hn,zf}from"./chunk-5qeme8w3.js";import{Fj}from"./chunk-fqzh3zpr.js";import{posix as a}from"path";var jEn=String.raw`\s\u2800\uFFF9-\uFFFB\p{Cc}\p{M}\p{Default_Ignorable_Code_Point}`,c=new RegExp(`^[${jEn}]+`,"u");function C4r(n){return n.replace(c,"")}function Etr(n,r=A4r(n)){return Hn(n)||pQe(n)||Fj.test(r[0])||r.map(C4r).some((e)=>Hn(e)||pQe(e))}var u=/^\.\.\//;function pQe(n){return zf(n)||zf(a.normalize(n).replace(u,"/"))||l(n)&&zf("/"+n)}function l(n){let r=a.normalize(n);return r===".."||r.startsWith("../")}function k4r(n){let r=n.slice(7);return Etr(r)||Etr(r.slice(1))}var i=/(?:%[0-9A-Fa-f]{2}){1,512}/g,f=/^%[0-9A-Fa-f]{2}/;function A4r(n){if(!n.includes("%"))return[n,n];let r=new TextDecoder("utf-8",{fatal:!1,ignoreBOM:!0});return[n.replace(i,(e,t)=>{let o=t+e.length;return r.decode(s(e),{stream:f.test(n.slice(o,o+3))})}),n.replace(i,(e)=>Array.from(s(e),(t)=>String.fromCharCode(t)).join(""))]}function s(n){return Uint8Array.from(n.slice(1).split("%"),(r)=>parseInt(r,16))}
export{jEn,C4r,Etr,pQe,k4r,A4r};
