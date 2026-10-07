// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{Lp}from"./chunk-pey4mmsy.js";import{Ut}from"./chunk-fqzh3zpr.js";import{V6e}from"./chunk-ma17m27h.js";import{Tte}from"./chunk-kdpkw3w6.js";var pu="MEMORY.md",dD=200,ete=25000,Ulr=4*ete,Uve=200,tte=4096;function ktt(t){let r=t.trim();return{trimmed:r,lineCount:Ut(r,`
`)+1,byteCount:r.length}}function vP(t){return t.normalize("NFC").toLowerCase()}function zB(t){let r=t?.lastIndexOf("/")??-1;if(r<=0)return"";let n=t.slice(0,r+1);return n.split("/").some((e)=>e.startsWith("."))?"":n}var xHe="This directory already exists \u2014 write to it directly with the Write tool (do not run mkdir or check for its existence).",Blr="Both directories already exist \u2014 write to them directly with the Write tool (do not run mkdir or check for their existence).";function uN(t){let r="";for(let n of V6e(Lp(t.replace(/\r\n?|[\u2028\u2029]/g,`
`)))){let e=n.codePointAt(0),o=e!==9&&e!==10&&(e<32||e>=127&&e<=159);r+=o?"\uFFFD":n}return r}function nte(t){return Tte(s(t))}function Pts(t){return Att(t)||/[\p{Cc}\u2028\u2029]/u.test(t)}function E3t(t){return nte(t.replace(/[\t\n\r\u2028\u2029]/g,""))}var deo=new Set([8204,8205,65038,65039]),i=/^[\p{Cf}\p{Co}\p{Cn}\p{Cs}\p{DI}]$/u;function Att(t){let r=t.codePointAt(0);if(deo.has(r)||r===9||r===10||r===13)return!1;return i.test(t)||r<32||r>=127&&r<=159}function s(t){let r="";for(let n of t.replace(/\r\n?|[\u2028\u2029]/g,`
`)){if(Att(n))continue;r+=n}return r}
export{pu,dD,ete,Ulr,Uve,tte,ktt,vP,zB,xHe,Blr,uN,nte,Pts,E3t,deo,Att};
