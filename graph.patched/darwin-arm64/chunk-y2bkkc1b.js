// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{ot,$r}from"./chunk-t3eqa5fc.js";import{Lr}from"./chunk-rayzr8gq.js";import{ma,Lo}from"./chunk-7awtb930.js";import{Yn,Ks}from"./chunk-na9nw575.js";import{Qo}from"./chunk-sag00djq.js";import{A,y,B}from"./chunk-2txtxkxk.js";B();function RAe(p,{selfOpened:r,hasOpeningGrace:o=r,onCancelled:h,owedAtExit:m}){let[S,i]=y(!1),n=A(!1),[u,b]=y(!1),e=A(!1),C=$r(o?Lr:null),s=!o||C,R=ot()?!0:!1,E=ma(Lr),{refusedWithin:x,noteRefused:v}=Lo();function w(){if(o&&(E()||x(Lr)))return v(),!0;return!1}let c=Qo(()=>{if(e.current)return;let t=n.current;n.current=!0;let a=h(t);if(a===void 0){e.current=!0;let f=m?.(t);if(f===void 0){Ks(1);return}f.then((l)=>Yn(1,"other",l===void 0?void 0:{finalMessage:l}),()=>Yn(1));return}i(!0),d(a)},void 0,r&&!u);function g(){if(n.current||!s)return!1;return n.current=!0,i(!0),!0}function d(t){if(e.current)return;e.current=!0,b(!0),p(t)}return{choicesDisabled:!s&&!R,decided:S,take:g,refuseInput:w,settled:()=>e.current,handBack:d,exit:c,exitHintShowing:c.pending&&!u}}
export{RAe};
