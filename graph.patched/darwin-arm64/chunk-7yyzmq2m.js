// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{HV}from"./chunk-gsnbskq4.js";import{Njn}from"./chunk-64ag51qf.js";import{Zct,Jkr}from"./chunk-m7864yc0.js";import{pue}from"./chunk-bk5ct2gw.js";var d=new RegExp(`^<${HV}[ \\t>]`),S=`</${HV}>`,C=["",`
`],I=/\sfrom-plugin\s*(?:=\s*(?:"[^"<>]*"|'[^'<>]*'|[^\s>]*))?/gi,A=/from-plugin/i;function rme(e,n){if(typeof e==="string")return h(e,n===pue);if(!Array.isArray(e))return e;let t=e;for(let o of C){let s=[],c=[],r="";t.forEach((i,u)=>{if(i.type==="text"){if(c.length>0)r+=o;s.push(r.length),c.push(u),r+=i.text}});let l=Jkr(r);if(l.length===0)continue;let g=t.slice(),a=0;c.forEach((i,u)=>{let f=g[i],P=s[u],_=s[u+1]??1/0;if(f.type!=="text")return;let p=[],E=0;for(;a<l.length&&l[a]<_;a++){let m=l[a]-P;p.push(f.text.slice(E,m),"<\\"),E=m+1}if(p.length>0)p.push(f.text.slice(E)),g[i]={...f,text:p.join("")}}),t=g}return t}function oBo(e){return h(e,!0)}function h(e,n){let t=e.trimEnd(),o=t.length-S.length,s=Njn.test(e);if(!(o>0&&t.endsWith(S)&&(s||n&&d.test(e))))return Zct(e);let r=B(e.slice(1,o));return A.test(O(r))?Zct(e):`<${Zct(r)}${e.slice(o)}`}function B(e){let n=O(e);return n.replace(I,"")+e.slice(n.length)}function O(e){let n=e.indexOf(">");return n<0?e:e.slice(0,n)}
export{rme,oBo};
