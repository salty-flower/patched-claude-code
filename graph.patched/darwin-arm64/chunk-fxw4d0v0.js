// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{I}from"./chunk-hp9wjta4.js";import{ae}from"./chunk-q9edv607.js";import{o,t,pn}from"./chunk-htcaw08y.js";import{g}from"./chunk-8mr77ghb.js";import{Bi}from"./chunk-cmntj0tz.js";import{FFe}from"./chunk-5a3k1xsy.js";import{xme}from"./chunk-8nvksk02.js";import{e}from"./chunk-80eepr01.js";function v(s,m,i=!1){if(s.trim()==="")return"Details empty.";let r=s.split(`
`),l=Math.max(1,m-6),a=r.flatMap((n)=>FFe(n,l).lines.map((f)=>f.text));return[i?`Draft preview, ${r.length} ${I(r.length,"line")}:`:`${r.length} ${I(r.length,"line")}:`,...a.map((n)=>`> ${n}`),i?"End of preview. Review the full draft with /feedback.":"End of details."].join(`
`)}function R(s,m,i){let r=[],l=0;for(let a of s.split(`
`)){let n=FFe(a,Math.max(1,m)).lines;if(l+n.length<=i){r.push(a),l+=n.length;continue}let f=i-l;if(f>0){let p=n[f]?.startOffset;r.push(p===void 0?a:a.slice(0,p).trimEnd())}return r.push("\u2026"),r.join(`
`)}return s}function rCe(z){let A=g(8),{value:w,bold:u,dim:c,columns:b,maxRows:h,preview:x}=z,d=pn(),k;if(A[0]!==u||A[1]!==b||A[2]!==c||A[3]!==d||A[4]!==h||A[5]!==x||A[6]!==w){let y=xme(w);let M=h===void 0?y:R(y,Math.max(1,b-2),h);k=e(o,{borderStyle:d?void 0:"single",borderLeft:!0,borderTop:!1,borderBottom:!1,borderRight:!1,borderDimColor:!0,paddingLeft:d?0:1,flexDirection:"column",children:d?e(t,{bold:u,dimColor:c,wrap:"wrap",children:v(M,b,x)}):ae.level===0?e(t,{bold:u,dimColor:c,wrap:"wrap",children:M}):e(Bi,{promptMode:!0,skipTokenCache:!0,children:M})});A[0]=u,A[1]=b,A[2]=c,A[3]=d,A[4]=h,A[5]=x,A[6]=w,A[7]=k}else k=A[7];return k}
export{rCe};
