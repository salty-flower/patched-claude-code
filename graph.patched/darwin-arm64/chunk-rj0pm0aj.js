// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{S6e}from"./chunk-nrbn573b.js";import{rt,Vr}from"./chunk-7car90a2.js";import{Zr,Lfe}from"./chunk-6d9n0jaa.js";import{Ma,Go}from"./chunk-r9bmmfnw.js";import{Xn,ai}from"./chunk-31gxg38t.js";import{ds}from"./chunk-2bwm2gye.js";import{A,y,j}from"./chunk-s8vmszp2.js";j();j();function h(){let[o]=y(()=>S6e()?Lfe:Zr);return o}function CPe(o,{selfOpened:u,hasOpeningGrace:r=u,onCancelled:S,owedAtExit:b}){let[C,s]=y(!1),n=A(!1),[c,R]=y(!1),e=A(!1),i=h(),E=Vr(r?i:null),d=!r||E,x=rt()?!0:!1,g=Ma(i),{refusedWithin:v,noteRefused:w}=Go();function _(){if(r&&(g()||v(i)))return w(),!0;return!1}let a=ds(()=>{if(e.current)return;let t=n.current;n.current=!0;let l=S(t);if(l===void 0){e.current=!0;let p=b?.(t);if(p===void 0){ai(1);return}p.then((m)=>Xn(1,"other",m===void 0?void 0:{finalMessage:m}),()=>Xn(1));return}s(!0),f(l)},void 0,u&&!c);function D(){if(n.current||!d)return!1;return n.current=!0,s(!0),!0}function f(t){if(e.current)return;e.current=!0,R(!0),o(t)}return{choicesDisabled:!d&&!x,decided:C,take:D,refuseInput:_,settled:()=>e.current,handBack:f,exit:a,exitHintShowing:a.pending&&!c}}
export{CPe};
