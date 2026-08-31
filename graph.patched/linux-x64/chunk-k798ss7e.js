// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{Mp}from"./chunk-j35pah18.js";import{se}from"./chunk-vs9s624w.js";function LUe(e,n){let t=Math.max(1,Math.floor(n)||1),r=n>0?Mp(e,t,{hard:!0,trim:!1}):e,l=[],i=0,o=-1,d=r.split(`
`);for(let f=0;f<d.length;f++){let s=d[f]??"";if(s.length===0){if(o=e.indexOf(`
`,o+1),o!==-1){let c=o;l.push(a({text:s,startOffset:c,isPrecededByNewline:h(e,c,f===0),endsWithNewline:!0}))}else{let c=e.length;l.push(a({text:s,startOffset:c,isPrecededByNewline:h(e,c,f===0),endsWithNewline:!1}))}continue}let u=e.indexOf(s,i);if(u===-1){let c=i;l.push(a({text:s,startOffset:c,isPrecededByNewline:h(e,c,f===0),endsWithNewline:!1})),i=c+s.length;continue}i=u+s.length;let p=u+s.length,g=p<e.length&&e[p]===`
`;if(g)o=p;l.push(a({text:s,startOffset:u,isPrecededByNewline:h(e,u,f===0),endsWithNewline:g}))}return Object.freeze({text:e,columns:t,lines:Object.freeze(l)})}function w(e,n){let t=b(n,0,Math.max(0,e.lines.length-1));return e.lines[t]??{text:"",startOffset:0,isPrecededByNewline:!0,endsWithNewline:!1}}function _Mn(e,n){if(e.lines.length===0)return{line:0,column:0};let t=b(n,0,e.text.length);for(let i=0;i<e.lines.length;i++){let o=e.lines[i],d=e.lines[i+1];if(t>=o.startOffset&&(!d||t<d.startOffset)){let f=t-o.startOffset,s;if(o.isPrecededByNewline)s=m(o.text,f);else{let u=o.text.length-o.text.trimStart().length;if(f<u)s=0;else s=m(o.text.slice(u),f-u)}return{line:i,column:s}}}let r=e.lines.length-1,l=e.lines[r];return{line:r,column:se(l.text)}}function bMn(e,n,t){if(e.lines.length===0)return 0;let r=w(e,n);if(r.text.length===0&&r.endsWithNewline)return r.startOffset;let l=r.isPrecededByNewline?0:r.text.length-r.text.trimStart().length,i=O(r.text.slice(l),Math.max(0,t))+l;return r.startOffset+i}function m(e,n){if(n<=0)return 0;if(n>=e.length)return se(e);return se(e.slice(0,n))}function O(e,n){if(n<=0||e.length===0)return 0;let t=0,r=0;for(let l of e){let i=se(l);if(t+i>n)break;t+=i,r+=l.length}return r}function h(e,n,t){if(t)return!0;return n>0&&e[n-1]===`
`}function a(e){return Object.freeze(e)}function b(e,n,t){return e<n?n:e>t?t:e}
export{LUe,_Mn,bMn};
