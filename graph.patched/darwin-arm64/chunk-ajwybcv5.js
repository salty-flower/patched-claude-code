// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{Kp}from"./chunk-d7b0m8qy.js";import{$t}from"./chunk-j79dwkaq.js";import{yst}from"./chunk-vh7e37w8.js";import{Y4}from"./chunk-6kf8v7k4.js";var $p="MEMORY.md",YU=200,fue=25000,bVr=4*fue,uLe=200,mue=4096;function HEt(t){let r=t.trim();return{trimmed:r,lineCount:$t(r,`
`)+1,byteCount:r.length}}function uH(t){return t.normalize("NFC").toLowerCase()}function LV(t){let r=t?.lastIndexOf("/")??-1;if(r<=0)return"";let n=t.slice(0,r+1);return n.split("/").some((e)=>e.startsWith("."))?"":n}var lVe="This directory already exists \u2014 write to it directly with the Write tool (do not run mkdir or check for its existence).",wVr="Both directories already exist \u2014 write to them directly with the Write tool (do not run mkdir or check for their existence).";function XU(t){let r="";for(let n of yst(Kp(t.replace(/\r\n?|[\u2028\u2029]/g,`
`)))){let e=n.codePointAt(0),o=e!==9&&e!==10&&(e<32||e>=127&&e<=159);r+=o?"\uFFFD":n}return r}function Toe(t){return Y4(s(t))}function mtr(t){return DEt(t)||/[\p{Cc}\u2028\u2029]/u.test(t)}function e_n(t){return Toe(t.replace(/[\t\n\r\u2028\u2029]/g,""))}var LKo=new Set([8204,8205,65038,65039]),i=/^[\p{Cf}\p{Co}\p{Cn}\p{Cs}\p{DI}]$/u;function DEt(t){let r=t.codePointAt(0);if(LKo.has(r)||r===9||r===10||r===13)return!1;return i.test(t)||r<32||r>=127&&r<=159}function s(t){let r="";for(let n of t.replace(/\r\n?|[\u2028\u2029]/g,`
`)){if(DEt(n))continue;r+=n}return r}
export{$p,YU,fue,bVr,uLe,mue,HEt,uH,LV,lVe,wVr,XU,Toe,mtr,e_n,LKo,DEt};
