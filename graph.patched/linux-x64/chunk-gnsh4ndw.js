// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{Xe,$r}from"./chunk-c66e3zm1.js";import{vo}from"./chunk-2zvd1wjd.js";import{A,g,L}from"./chunk-1mwacejt.js";import{Ca,gs}from"./chunk-r96qnd83.js";import{ws}from"./chunk-9wqh5j7s.js";import{Do}from"./chunk-me8b9qrj.js";L();function Hye(d,{selfOpened:t,onCancelled:f}){let[l,r]=g(!1),n=A(!1),[i,p]=g(!1),e=A(!1),h=$r(t?vo:null),u=!t||h,m=Xe()?!0:!1,C=Ca(vo),{refusedWithin:S,noteRefused:b}=gs();function R(){if(t&&(C()||S(vo)))return b(),!0;return!1}let c=Do(()=>{if(e.current)return;let o=n.current;n.current=!0;let a=f(o);if(a===void 0){e.current=!0,ws(1);return}r(!0),s(a)},void 0,t&&!i);function E(){if(n.current||!u)return!1;return n.current=!0,r(!0),!0}function s(o){if(e.current)return;e.current=!0,p(!0),d(o)}return{choicesDisabled:!u&&!m,decided:l,take:E,refuseInput:R,settled:()=>e.current,handBack:s,exit:c,exitHintShowing:c.pending&&!i}}
export{Hye};
