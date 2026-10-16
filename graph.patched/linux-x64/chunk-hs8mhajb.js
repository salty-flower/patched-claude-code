// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{ot,Nr}from"./chunk-hey8xzq2.js";import{Do}from"./chunk-wc8qbvn3.js";import{Ka,as}from"./chunk-mhgwwxhn.js";import{Yn,Bs}from"./chunk-38nf1dnm.js";import{Ko}from"./chunk-2m4frgw7.js";import{R,y,F}from"./chunk-zx300qjj.js";F();function XTe(p,{selfOpened:r,hasOpeningGrace:o=r,onCancelled:h,owedAtExit:m}){let[S,i]=y(!1),n=R(!1),[u,b]=y(!1),e=R(!1),C=Nr(o?Do:null),s=!o||C,E=ot()?!0:!1,x=Ka(Do),{refusedWithin:v,noteRefused:w}=as();function g(){if(o&&(x()||v(Do)))return w(),!0;return!1}let c=Ko(()=>{if(e.current)return;let t=n.current;n.current=!0;let a=h(t);if(a===void 0){e.current=!0;let f=m?.(t);if(f===void 0){Bs(1);return}f.then((l)=>Yn(1,"other",l===void 0?void 0:{finalMessage:l}),()=>Yn(1));return}i(!0),d(a)},void 0,r&&!u);function A(){if(n.current||!s)return!1;return n.current=!0,i(!0),!0}function d(t){if(e.current)return;e.current=!0,b(!0),p(t)}return{choicesDisabled:!s&&!E,decided:S,take:A,refuseInput:g,settled:()=>e.current,handBack:d,exit:c,exitHintShowing:c.pending&&!u}}
export{XTe};
