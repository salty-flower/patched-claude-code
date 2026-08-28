// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{Xi}from"./chunk-r6cyt9tx.js";import{ie}from"./chunk-8atg8g31.js";var c=/\x1b\[[34]8;[25];/;function ff(r,n,e){if(!(n>0))return r;let t=Bun.wrapAnsi(r,n,e);if(c.test(r)&&t.includes(`
`))return a(t);return t}var u=/\x1b\[([\d;]*)m/g,g=/^(3[0-79]|9[0-7])$/,d=/^(4[0-79]|10[0-7])$/;function a(r){let n="",e="",t="",i=0;u.lastIndex=0;let s;while((s=u.exec(r))!==null){n+=f(r.slice(i,s.index),e,t),n+=s[0],i=u.lastIndex;let o=s[1];if(o===""||o==="0")e="",t="";else if(o.startsWith("38;"))e=s[0];else if(g.test(o))e="";else if(o.startsWith("48;"))t=s[0];else if(d.test(o))t=""}return n+=f(r.slice(i),e,t),n}function f(r,n,e){if(r===""||n===""&&e==="")return r;let t="",i=0;for(let s=0;s<r.length;s++)if(r.charCodeAt(s)===10){if(t+=r.slice(i,s),n)t+="\x1B[39m";if(e)t+="\x1B[49m";t+=`
`+n+e,i=s+1}return t+=r.slice(i),t}function Bl(r,n){if(ie(r)<=n)return r;if(n<=0)return"\u2026";if(n<5)return ot(r,n);let e=r.lastIndexOf("/"),t=e>=0?e:r.lastIndexOf("\\"),i=t>=0?r.slice(t):r,s=t>=0?r.slice(0,t):"",o=ie(i);if(o>=n-1)return US(r,n);let l=n-1-o;return TF(s,l)+"\u2026"+i}function ot(r,n){if(ie(r)<=n)return r;if(n<=1)return"\u2026";let e=0,t="";for(let{segment:i}of Xi().segment(r)){let s=ie(i);if(e+s>n-1)break;t+=i,e+=s}return t+"\u2026"}function US(r,n){if(ie(r)<=n)return r;if(n<=1)return"\u2026";let e=n-1,t=[...Xi().segment(r)],i=0,s=t.length;for(let o=t.length-1;o>=0;o--){let l=ie(t[o].segment);if(i+l>e)break;i+=l,s=o}return`\u2026${t.slice(s).map((o)=>o.segment).join("")}`}function TF(r,n){if(ie(r)<=n)return r;if(n<=0)return"";let e=0,t="";for(let{segment:i}of Xi().segment(r)){let s=ie(i);if(e+s>n)break;t+=i,e+=s}return t}function Qn(r,n,e=!1){let t=r;if(e){let i=r.indexOf(`
`);if(i!==-1){if(t=r.substring(0,i),ie(t)+1>n)return ot(`${t}\u2026`,n);return`${t}\u2026`}}if(ie(t)<=n)return t;return ot(t,n)}function oSn(r,n){let e=[],t="",i=0;for(let{segment:s}of Xi().segment(r)){let o=ie(s);if(i+o<=n)t+=s,i+=o;else{if(t)e.push(t);t=s,i=o}}if(t)e.push(t);return e}function $bt(r,n,e){if(e<=0||n<=0)return"";let t=ff(r,n,{trim:!0,hard:!0}).split(`
`);if(t.length<=e)return t.join(`
`);let i=t.slice(0,e);return i[e-1]=ot((i[e-1]??"")+"\u2026",n),i.join(`
`)}
export{ff,Bl,ot,US,TF,Qn,oSn,$bt};
