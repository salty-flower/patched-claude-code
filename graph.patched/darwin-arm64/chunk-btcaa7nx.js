// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{mf}from"./chunk-gyf58rwf.js";import{Lt}from"./chunk-ax7r0qj7.js";import{$9e}from"./chunk-bf3z2ftn.js";import{rse}from"./chunk-m7864yc0.js";var Iu="MEMORY.md",dN=200,Moe=25000,Iwr=4*Moe,cRe=200,Doe=4096;function vlt(t){let r=t.trim();return{trimmed:r,lineCount:Lt(r,`
`)+1,byteCount:r.length}}function iO(t){return t.normalize("NFC").toLowerCase()}function iW(t){let r=t?.lastIndexOf("/")??-1;if(r<=0)return"";let n=t.slice(0,r+1);return n.split("/").some((e)=>e.startsWith("."))?"":n}var MFe="This directory already exists \u2014 write to it directly with the Write tool (do not run mkdir or check for its existence).",Owr="Both directories already exist \u2014 write to them directly with the Write tool (do not run mkdir or check for their existence).";function _$(t){let r="";for(let n of $9e(mf(t.replace(/\r\n?|[\u2028\u2029]/g,`
`)))){let e=n.codePointAt(0),o=e!==9&&e!==10&&(e<32||e>=127&&e<=159);r+=o?"\uFFFD":n}return r}function Loe(t){return rse(s(t))}function fEs(t){return klt(t)||/[\p{Cc}\u2028\u2029]/u.test(t)}function kQt(t){return Loe(t.replace(/[\t\n\r\u2028\u2029]/g,""))}var Sho=new Set([8204,8205,65038,65039]),i=/^[\p{Cf}\p{Co}\p{Cn}\p{Cs}\p{DI}]$/u;function klt(t){let r=t.codePointAt(0);if(Sho.has(r)||r===9||r===10||r===13)return!1;return i.test(t)||r<32||r>=127&&r<=159}function s(t){let r="";for(let n of t.replace(/\r\n?|[\u2028\u2029]/g,`
`)){if(klt(n))continue;r+=n}return r}
export{Iu,dN,Moe,Iwr,cRe,Doe,vlt,iO,iW,MFe,Owr,_$,Loe,fEs,kQt,Sho,klt};
