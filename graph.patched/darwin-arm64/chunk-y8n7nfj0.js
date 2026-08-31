// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{k}from"./chunk-04aem4bh.js";import{ae}from"./chunk-zgjbv493.js";import{o,t,hn}from"./chunk-hm4dvvtr.js";import{_}from"./chunk-rykc5fv4.js";import{Ni}from"./chunk-xvnw5v00.js";import{LBe}from"./chunk-8d2g7ehp.js";import{H_e}from"./chunk-68txa76k.js";import{e}from"./chunk-wk3xnwvn.js";function M(s,m,i=!1){if(s.trim()==="")return"Details empty.";let r=s.split(`
`),l=Math.max(1,m-6),a=r.flatMap((n)=>LBe(n,l).lines.map((f)=>f.text));return[i?`Draft preview, ${r.length} ${k(r.length,"line")}:`:`${r.length} ${k(r.length,"line")}:`,...a.map((n)=>`> ${n}`),i?"End of preview. Review the full draft with /feedback.":"End of details."].join(`
`)}function v(s,m,i){let r=[],l=0;for(let a of s.split(`
`)){let n=LBe(a,Math.max(1,m)).lines;if(l+n.length<=i){r.push(a),l+=n.length;continue}let f=i-l;if(f>0){let p=n[f]?.startOffset;r.push(p===void 0?a:a.slice(0,p).trimEnd())}return r.push("\u2026"),r.join(`
`)}return s}function XRe(z){let A=_(8),{value:g,bold:u,dim:c,columns:b,maxRows:h,preview:w}=z,d=hn(),R;if(A[0]!==u||A[1]!==b||A[2]!==c||A[3]!==d||A[4]!==h||A[5]!==w||A[6]!==g){let y=H_e(g);let x=h===void 0?y:v(y,Math.max(1,b-2),h);R=e(o,{borderStyle:d?void 0:"single",borderLeft:!0,borderTop:!1,borderBottom:!1,borderRight:!1,borderDimColor:!0,paddingLeft:d?0:1,flexDirection:"column",children:d?e(t,{bold:u,dimColor:c,wrap:"wrap",children:M(x,b,w)}):ae.level===0?e(t,{bold:u,dimColor:c,wrap:"wrap",children:x}):e(Ni,{promptMode:!0,skipTokenCache:!0,children:x})});A[0]=u,A[1]=b,A[2]=c,A[3]=d,A[4]=h,A[5]=w,A[6]=g,A[7]=R}else R=A[7];return R}
export{XRe};
