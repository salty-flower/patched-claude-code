// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{rt,Fr}from"./chunk-wfsayads.js";import{Lr}from"./chunk-c3j2rme1.js";import{ma,Lo}from"./chunk-c3a2v9v4.js";import{Yn,Vs}from"./chunk-rncrmfyt.js";import{Qo}from"./chunk-vs84t9wy.js";import{C,y,B}from"./chunk-a2fszd78.js";B();function wCe(p,{selfOpened:r,hasOpeningGrace:o=r,onCancelled:h,owedAtExit:m}){let[S,i]=y(!1),n=C(!1),[u,b]=y(!1),e=C(!1),R=Fr(o?Lr:null),s=!o||R,E=rt()?!0:!1,x=ma(Lr),{refusedWithin:v,noteRefused:w}=Lo();function g(){if(o&&(x()||v(Lr)))return w(),!0;return!1}let c=Qo(()=>{if(e.current)return;let t=n.current;n.current=!0;let a=h(t);if(a===void 0){e.current=!0;let f=m?.(t);if(f===void 0){Vs(1);return}f.then((l)=>Yn(1,"other",l===void 0?void 0:{finalMessage:l}),()=>Yn(1));return}i(!0),d(a)},void 0,r&&!u);function A(){if(n.current||!s)return!1;return n.current=!0,i(!0),!0}function d(t){if(e.current)return;e.current=!0,b(!0),p(t)}return{choicesDisabled:!s&&!E,decided:S,take:A,refuseInput:g,settled:()=>e.current,handBack:d,exit:c,exitHintShowing:c.pending&&!u}}
export{wCe};
