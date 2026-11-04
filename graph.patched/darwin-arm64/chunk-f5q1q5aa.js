// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{Xo}from"./chunk-zmmnrc9r.js";import{Yt,J$,iAe,Sv}from"./chunk-72phbcv2.js";function Kcs(t){return"  "+t.replace(uYe,`
`).split(`
`).join(`
  `)}var qcs=G1,uYe=/\r\n?|[\u001c-\u001e\u2028\u2029\u0085\v\f]/g;function pYe(t){return t.replace(uYe,`
`)}var R0e=/[\p{Cf}\p{Default_Ignorable_Code_Point}]/gu,{open:e,close:s,slash:i}=J$;function KXt(t,r){return r.replace(R0e,"").replace(new RegExp(`[${e}]([\\s${i}]*${Xo(t)}\\b(?:${iAe(`^${e}${s}`,2)}[${s}])?)`,"giu"),(n,o)=>"["+o)}var qXt="forwarded_user_turns",tWe="forwarded_turn",p=["transcript",qXt,tWe];function uut(t){let r=t;for(let n of p)r=KXt(n,r);return r}function G1(t){return"  "+uut(pYe(t)).split(`
`).join(`
  `)}var a=/[\x00-\x08\x0b-\x1f\x7f-\x9f]/g;function cao(t){return Kcs(Yt(Sv(pYe(t).replace(R0e,"").replace(a,""))))}
export{Kcs,qcs,uYe,pYe,R0e,KXt,qXt,tWe,uut,G1,cao};
