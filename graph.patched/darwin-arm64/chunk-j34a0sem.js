// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{xf}from"./chunk-tdxkq523.js";import{jt}from"./chunk-42txhxmf.js";import{Cet}from"./chunk-tx4cjw3a.js";import{K9}from"./chunk-q2853ac5.js";var cp="MEMORY.md",b$=200,Vle=25000,$Fr=4*Vle,zMe=200,Kle=4096;function Tyt(t){let r=t.trim();return{trimmed:r,lineCount:jt(r,`
`)+1,byteCount:r.length}}function qM(t){return t.normalize("NFC").toLowerCase()}function Rz(t){let r=t?.lastIndexOf("/")??-1;if(r<=0)return"";let n=t.slice(0,r+1);return n.split("/").some((e)=>e.startsWith("."))?"":n}var E2e="This directory already exists \u2014 write to it directly with the Write tool (do not run mkdir or check for its existence).",UFr="Both directories already exist \u2014 write to them directly with the Write tool (do not run mkdir or check for their existence).";function B1(t){let r="";for(let n of Cet(xf(t.replace(/\r\n?|[\u2028\u2029]/g,`
`)))){let e=n.codePointAt(0),o=e!==9&&e!==10&&(e<32||e>=127&&e<=159);r+=o?"\uFFFD":n}return r}function ene(t){return K9(s(t))}function I9n(t){return Ayt(t)||/[\p{Cc}\u2028\u2029]/u.test(t)}function dun(t){return ene(t.replace(/[\t\n\r\u2028\u2029]/g,""))}var hFo=new Set([8204,8205,65038,65039]),i=/^[\p{Cf}\p{Co}\p{Cn}\p{Cs}\p{DI}]$/u;function Ayt(t){let r=t.codePointAt(0);if(hFo.has(r)||r===9||r===10||r===13)return!1;return i.test(t)||r<32||r>=127&&r<=159}function s(t){let r="";for(let n of t.replace(/\r\n?|[\u2028\u2029]/g,`
`)){if(Ayt(n))continue;r+=n}return r}
export{cp,b$,Vle,$Fr,zMe,Kle,Tyt,qM,Rz,E2e,UFr,B1,ene,I9n,dun,hFo,Ayt};
