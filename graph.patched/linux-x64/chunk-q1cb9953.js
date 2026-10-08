// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Qe,$r}from"./chunk-13cxqtms.js";import{Ao}from"./chunk-mgp0ba5z.js";import{C,g,N}from"./chunk-y6zm4y48.js";import{ha,us}from"./chunk-j12s153g.js";import{Cs}from"./chunk-g263vvvn.js";import{$o}from"./chunk-pdbtq3y6.js";N();function Hbe(d,{selfOpened:t,onCancelled:f}){let[l,r]=g(!1),n=C(!1),[i,p]=g(!1),e=C(!1),h=$r(t?Ao:null),u=!t||h,m=Qe()?!0:!1,S=ha(Ao),{refusedWithin:b,noteRefused:R}=us();function E(){if(t&&(S()||b(Ao)))return R(),!0;return!1}let c=$o(()=>{if(e.current)return;let o=n.current;n.current=!0;let a=f(o);if(a===void 0){e.current=!0,Cs(1);return}r(!0),s(a)},void 0,t&&!i);function x(){if(n.current||!u)return!1;return n.current=!0,r(!0),!0}function s(o){if(e.current)return;e.current=!0,p(!0),d(o)}return{choicesDisabled:!u&&!m,decided:l,take:x,refuseInput:E,settled:()=>e.current,handBack:s,exit:c,exitHintShowing:c.pending&&!i}}
export{Hbe};
