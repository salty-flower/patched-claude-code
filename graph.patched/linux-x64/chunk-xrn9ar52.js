// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{xf}from"./chunk-n5v91jc3.js";import{Bt}from"./chunk-nt1g7asm.js";import{yet}from"./chunk-32vra4sg.js";import{F3}from"./chunk-3wd6e2hx.js";var cp="MEMORY.md",mF=200,Ule=25000,y$r=4*Ule,$Me=200,Ble=4096;function _yt(t){let r=t.trim();return{trimmed:r,lineCount:Bt(r,`
`)+1,byteCount:r.length}}function GM(t){return t.normalize("NFC").toLowerCase()}function _2(t){let r=t?.lastIndexOf("/")??-1;if(r<=0)return"";let n=t.slice(0,r+1);return n.split("/").some((e)=>e.startsWith("."))?"":n}var fGe="This directory already exists \u2014 write to it directly with the Write tool (do not run mkdir or check for its existence).",_$r="Both directories already exist \u2014 write to them directly with the Write tool (do not run mkdir or check for their existence).";function HB(t){let r="";for(let n of yet(xf(t.replace(/\r\n?|[\u2028\u2029]/g,`
`)))){let e=n.codePointAt(0),o=e!==9&&e!==10&&(e<32||e>=127&&e<=159);r+=o?"\uFFFD":n}return r}function Vte(t){return F3(s(t))}function f3n(t){return byt(t)||/[\p{Cc}\u2028\u2029]/u.test(t)}function Vcn(t){return Vte(t.replace(/[\t\n\r\u2028\u2029]/g,""))}var BNo=new Set([8204,8205,65038,65039]),i=/^[\p{Cf}\p{Co}\p{Cn}\p{Cs}\p{DI}]$/u;function byt(t){let r=t.codePointAt(0);if(BNo.has(r)||r===9||r===10||r===13)return!1;return i.test(t)||r<32||r>=127&&r<=159}function s(t){let r="";for(let n of t.replace(/\r\n?|[\u2028\u2029]/g,`
`)){if(byt(n))continue;r+=n}return r}
export{cp,mF,Ule,y$r,$Me,Ble,_yt,GM,_2,fGe,_$r,HB,Vte,f3n,Vcn,BNo,byt};
