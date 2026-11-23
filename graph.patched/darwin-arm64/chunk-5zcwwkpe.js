// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{we}from"./chunk-65t70pys.js";import{C2}from"./chunk-1f8jcja6.js";import{bS}from"./chunk-k1rn6227.js";import{re}from"./chunk-y8ye30ak.js";function g(){let o=bS("app:toggleTranscript","Global","ctrl+o");return we.dim(`(${o} to expand)`)}var c=3,h=10;function x(o,s){let t=o.split(`
`),n=[];for(let e of t){let a=re(e);if(a<=s)n.push(e.trimEnd());else{let l=0;while(l<a){let f=Bun.sliceAnsi(e,l,l+s);n.push(f.trimEnd()),l+=s}}}let i=n.length-c;if(i===1)return{aboveTheFold:n.slice(0,c+1).join(`
`).trimEnd(),remainingLines:0};return{aboveTheFold:n.slice(0,c).join(`
`).trimEnd(),remainingLines:Math.max(0,i)}}function $Ps(o,s,t=!1){let n=o.trimEnd();if(!n)return"";let i=Math.max(s-h,10),e=c*i*4,a=n.length>e,l=a?n.slice(0,e):n,{aboveTheFold:f,remainingLines:r}=x(l,i),m=r;if(a){let d=0,u=-1;for(;;){if(u=n.indexOf(`
`,u+1),u===-1)break;d++}let p=Math.max(d+1,Math.ceil(n.length/i));m=Math.max(r,p-c)}return[f,m>0?we.dim(C2(m)+(t?"":` ${g()}`)):""].filter(Boolean).join(`
`)}function Uj(o,s){if(typeof o!=="string")return!1;let t=o.trimEnd(),n=0,i=0;for(let r=0;r<=c;r++){if(n=t.indexOf(`
`,n),n===-1)break;i++,n++}if(n!==-1&&n<t.length)return!0;if(s===void 0)return!1;let e=Math.max(s-h,10),a=c+1,l=c*e*4;if(t.length>l)return!0;if(i===0){let r=a*e;if(t.length<=r)return!1;return re(t)>r}let f=0;for(let r of t.split(`
`))if(f+=Math.max(1,Math.ceil(re(r)/e)),f>a)return!0;return!1}
export{$Ps,Uj};
