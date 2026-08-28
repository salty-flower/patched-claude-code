// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{g}from"./chunk-8mr77ghb.js";import{$3t}from"./chunk-gsnfhe7n.js";import{t,it}from"./chunk-htcaw08y.js";import{e}from"./chunk-80eepr01.js";var R={")":"(","]":"[","}":"{"};function xFe(o){while(o.length>0){let s=o.at(-1);if(".,;:!?".includes(s)){o=o.slice(0,-1);continue}let p=R[s];if(!p)break;let r=0,i=0;for(let n of o)if(n===p)r++;else if(n===s)i++;if(i>r)o=o.slice(0,-1);else break}return o}function kqt(o){for(let s of o.matchAll($3t))return xFe(s[0]);return}function XU(N){let u=g(9),{children:c,color:h,bold:m}=N,l;if(u[0]!==c){l=[];let f=0;for(const a of c.matchAll($3t)){let y=xFe(a[0]);if(a.index>f)l.push(c.slice(f,a.index));l.push(e(it,{url:y,children:y},a.index)),f=a.index+y.length}let d;if(u[2]!==c||u[3]!==f)d=c.slice(f),u[2]=c,u[3]=f,u[4]=d;else d=u[4];l.push(d);u[0]=c,u[1]=l}else l=u[1];let d;if(u[5]!==m||u[6]!==h||u[7]!==l)d=e(t,{color:h,bold:m,children:l}),u[5]=m,u[6]=h,u[7]=l,u[8]=d;else d=u[8];return d}
export{xFe,kqt,XU};
