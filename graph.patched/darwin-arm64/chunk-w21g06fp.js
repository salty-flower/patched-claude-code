// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{k0}from"./chunk-j317bre5.js";import{Tn,Pf}from"./chunk-fkz3e4t3.js";import{posix as a}from"path";var Act=String.raw`\s\u2800\uFFF9-\uFFFB\p{Cc}\p{M}\p{Default_Ignorable_Code_Point}`,c=new RegExp(`^[${Act}]+`,"u");function Rrn(n){return n.replace(c,"")}function oMt(n,r=krn(n)){return Tn(n)||fSe(n)||k0.test(r[0])||r.map(Rrn).some((e)=>Tn(e)||fSe(e))}var u=/^\.\.\//;function fSe(n){return Pf(n)||Pf(a.normalize(n).replace(u,"/"))||l(n)&&Pf("/"+n)}function l(n){let r=a.normalize(n);return r===".."||r.startsWith("../")}function Cct(n){let r=n.slice(7);return oMt(r)||oMt(r.slice(1))}var i=/(?:%[0-9A-Fa-f]{2}){1,512}/g,f=/^%[0-9A-Fa-f]{2}/;function krn(n){if(!n.includes("%"))return[n,n];let r=new TextDecoder("utf-8",{fatal:!1,ignoreBOM:!0});return[n.replace(i,(e,t)=>{let o=t+e.length;return r.decode(s(e),{stream:f.test(n.slice(o,o+3))})}),n.replace(i,(e)=>Array.from(s(e),(t)=>String.fromCharCode(t)).join(""))]}function s(n){return Uint8Array.from(n.slice(1).split("%"),(r)=>parseInt(r,16))}
export{Act,Rrn,oMt,fSe,Cct,krn};
