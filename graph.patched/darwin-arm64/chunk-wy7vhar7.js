// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{No}from"./chunk-b5xhmzas.js";import{Qt,WF,Tye,aC}from"./chunk-pj4gmx93.js";function m6s(t){return"  "+t.replace(Tot,`
`).split(`
`).join(`
  `)}var h6s=dW,Tot=/\r\n?|[\u001c-\u001e\u2028\u2029\u0085\v\f]/g;function sKe(t){return t.replace(Tot,`
`)}var zUe=/[\p{Cf}\p{Default_Ignorable_Code_Point}]/gu,{open:e,close:s,slash:i}=WF;function ffn(t,r){return r.replace(zUe,"").replace(new RegExp(`[${e}]([\\s${i}]*${No(t)}\\b(?:${Tye(`^${e}${s}`,2)}[${s}])?)`,"giu"),(n,o)=>"["+o)}var pfn="forwarded_user_turns",iKe="forwarded_turn",p=["transcript",pfn,iKe];function VEt(t){let r=t;for(let n of p)r=ffn(n,r);return r}function dW(t){return"  "+VEt(sKe(t)).split(`
`).join(`
  `)}var a=/[\x00-\x08\x0b-\x1f\x7f-\x9f]/g;function OMo(t){return m6s(Qt(aC(sKe(t).replace(zUe,"").replace(a,""))))}
export{m6s,h6s,Tot,sKe,zUe,ffn,pfn,iKe,VEt,dW,OMo};
