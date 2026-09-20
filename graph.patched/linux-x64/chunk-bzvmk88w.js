// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{lM}from"./chunk-847hpqqs.js";import{$n,Wf}from"./chunk-gj513b2z.js";import{posix as a}from"path";var _Ct=String.raw`\s\u2800\uFFF9-\uFFFB\p{Cc}\p{M}\p{Default_Ignorable_Code_Point}`,c=new RegExp(`^[${_Ct}]+`,"u");function Ixn(n){return n.replace(c,"")}function B9t(n,r=Pxn(n)){return $n(n)||Gxe(n)||lM.test(r[0])||r.map(Ixn).some((e)=>$n(e)||Gxe(e))}var u=/^\.\.\//;function Gxe(n){return Wf(n)||Wf(a.normalize(n).replace(u,"/"))||l(n)&&Wf("/"+n)}function l(n){let r=a.normalize(n);return r===".."||r.startsWith("../")}function bCt(n){let r=n.slice(7);return B9t(r)||B9t(r.slice(1))}var i=/(?:%[0-9A-Fa-f]{2}){1,512}/g,f=/^%[0-9A-Fa-f]{2}/;function Pxn(n){if(!n.includes("%"))return[n,n];let r=new TextDecoder("utf-8",{fatal:!1,ignoreBOM:!0});return[n.replace(i,(e,t)=>{let o=t+e.length;return r.decode(s(e),{stream:f.test(n.slice(o,o+3))})}),n.replace(i,(e)=>Array.from(s(e),(t)=>String.fromCharCode(t)).join(""))]}function s(n){return Uint8Array.from(n.slice(1).split("%"),(r)=>parseInt(r,16))}
export{_Ct,Ixn,B9t,Gxe,bCt,Pxn};
