// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{U2}from"./chunk-zwbw6dvp.js";import{ghn}from"./chunk-fh513ghb.js";import{q8e,m9n}from"./chunk-v9v7yqrh.js";import{Fne}from"./chunk-er6f56rj.js";var O=new RegExp(`^<${U2}[ \\t>]`),E=`</${U2}>`,d=["",`
`],P=/\sfrom-plugin\s*(?:=\s*(?:"[^"<>]*"|'[^'<>]*'|[^\s>]*))?/gi,h=/from-plugin/i;function ase(e,n){if(typeof e==="string")return m(e,n===Fne);if(!Array.isArray(e))return e;let t=e;for(let s of d){let o=[],l=[],r="";t.forEach((i,u)=>{if(i.type==="text"){if(l.length>0)r+=s;o.push(r.length),l.push(u),r+=i.text}});let g=m9n(r),a;for(let i=g.length-1;i>=0;i--){let u=g[i],c=o.length-1;while(o[c]>u)c--;a??=t.slice();let f=a[l[c]];if(f.type==="text"){let p=u-o[c];a[l[c]]={...f,text:`${f.text.slice(0,p)}<\\${f.text.slice(p+1)}`}}}t=a??t}return t}function VZr(e){return m(e,!0)}function m(e,n){let t=e.trimEnd(),s=t.length-E.length,o=ghn.test(e);if(!(s>0&&t.endsWith(E)&&(o||n&&O.test(e))))return q8e(e);let r=_(e.slice(1,s));return h.test(S(r))?q8e(e):`<${q8e(r)}${e.slice(s)}`}function _(e){let n=S(e);return n.replace(P,"")+e.slice(n.length)}function S(e){let n=e.indexOf(">");return n<0?e:e.slice(0,n)}
export{ase,VZr};
