// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{C}from"./chunk-764j5mtt.js";import{ae}from"./chunk-02dpwhns.js";import{o,t,hn}from"./chunk-snr8xejh.js";import{y}from"./chunk-a5ahs27a.js";import{Ni}from"./chunk-vk8yj1bh.js";import{LUe}from"./chunk-k798ss7e.js";import{yye}from"./chunk-n4m4crcz.js";import{e}from"./chunk-ys8dsnqt.js";function M(s,m,i=!1){if(s.trim()==="")return"Details empty.";let r=s.split(`
`),l=Math.max(1,m-6),a=r.flatMap((n)=>LUe(n,l).lines.map((f)=>f.text));return[i?`Draft preview, ${r.length} ${C(r.length,"line")}:`:`${r.length} ${C(r.length,"line")}:`,...a.map((n)=>`> ${n}`),i?"End of preview. Review the full draft with /feedback.":"End of details."].join(`
`)}function v(s,m,i){let r=[],l=0;for(let a of s.split(`
`)){let n=LUe(a,Math.max(1,m)).lines;if(l+n.length<=i){r.push(a),l+=n.length;continue}let f=i-l;if(f>0){let p=n[f]?.startOffset;r.push(p===void 0?a:a.slice(0,p).trimEnd())}return r.push("\u2026"),r.join(`
`)}return s}function qTe(A){let N=y(8),{value:g,bold:u,dim:c,columns:b,maxRows:h,preview:w}=A,d=hn(),R;if(N[0]!==u||N[1]!==b||N[2]!==c||N[3]!==d||N[4]!==h||N[5]!==w||N[6]!==g){let k=yye(g);let x=h===void 0?k:v(k,Math.max(1,b-2),h);R=e(o,{borderStyle:d?void 0:"single",borderLeft:!0,borderTop:!1,borderBottom:!1,borderRight:!1,borderDimColor:!0,paddingLeft:d?0:1,flexDirection:"column",children:d?e(t,{bold:u,dimColor:c,wrap:"wrap",children:M(x,b,w)}):ae.level===0?e(t,{bold:u,dimColor:c,wrap:"wrap",children:x}):e(Ni,{promptMode:!0,skipTokenCache:!0,children:x})});N[0]=u,N[1]=b,N[2]=c,N[3]=d,N[4]=h,N[5]=w,N[6]=g,N[7]=R}else R=N[7];return R}
export{qTe};
