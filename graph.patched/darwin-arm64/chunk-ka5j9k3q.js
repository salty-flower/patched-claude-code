// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{di}from"./chunk-j79dwkaq.js";import{jt,QG,iv}from"./chunk-nfgwaxf2.js";function kFo(t){return"  "+t.replace(OGe,`
`).split(`
`).join(`
  `)}var CFo=pF,OGe=/\r\n?|[\u001c-\u001e\u2028\u2029\u0085\v\f]/g;function MGe(t){return t.replace(OGe,`
`)}var rTe=/[\p{Cf}\p{Default_Ignorable_Code_Point}]/gu,{open:e,close:o,slash:i}=QG;function fBt(t,r){return r.replace(rTe,"").replace(new RegExp(`[${e}]([\\s${i}]*${di(t)}\\b(?:[^${e}${o}]*[${o}])?)`,"gi"),(n,s)=>"["+s)}var mBt="forwarded_user_turns",AHe="forwarded_turn",p=["transcript",mBt,AHe];function iZe(t){let r=t;for(let n of p)r=fBt(n,r);return r}function pF(t){return"  "+iZe(MGe(t)).split(`
`).join(`
  `)}var a=/[\x00-\x08\x0b-\x1f\x7f-\x9f]/g;function gUr(t){return kFo(jt(iv(MGe(t).replace(rTe,"").replace(a,""))))}
export{kFo,CFo,OGe,MGe,rTe,fBt,mBt,AHe,iZe,pF,gUr};
