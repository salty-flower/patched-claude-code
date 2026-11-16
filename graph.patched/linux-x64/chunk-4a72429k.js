// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{No}from"./chunk-h4js79s0.js";import{tn,$F,yye,oA}from"./chunk-nd02r7dv.js";function M2s(t){return"  "+t.replace(hot,`
`).split(`
`).join(`
  `)}var D2s=a2,hot=/\r\n?|[\u001c-\u001e\u2028\u2029\u0085\v\f]/g;function e3e(t){return t.replace(hot,`
`)}var j1e=/[\p{Cf}\p{Default_Ignorable_Code_Point}]/gu,{open:e,close:s,slash:i}=$F;function Yun(t,r){return r.replace(j1e,"").replace(new RegExp(`[${e}]([\\s${i}]*${No(t)}\\b(?:${yye(`^${e}${s}`,2)}[${s}])?)`,"giu"),(n,o)=>"["+o)}var Xun="forwarded_user_turns",t3e="forwarded_turn",p=["transcript",Xun,t3e];function Bvt(t){let r=t;for(let n of p)r=Yun(n,r);return r}function a2(t){return"  "+Bvt(e3e(t)).split(`
`).join(`
  `)}var a=/[\x00-\x08\x0b-\x1f\x7f-\x9f]/g;function s0o(t){return M2s(tn(oA(e3e(t).replace(j1e,"").replace(a,""))))}
export{M2s,D2s,hot,e3e,j1e,Yun,Xun,t3e,Bvt,a2,s0o};
