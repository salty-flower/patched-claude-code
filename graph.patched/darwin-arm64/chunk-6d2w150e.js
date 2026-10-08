// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Qe,Fr}from"./chunk-8pkmgy8b.js";import{Ao}from"./chunk-ph30vf0p.js";import{T,g,N}from"./chunk-f6geyac8.js";import{ha,us}from"./chunk-arb8ehdq.js";import{Ts}from"./chunk-nwqfvmza.js";import{$o}from"./chunk-abvs637z.js";N();function BSe(d,{selfOpened:t,onCancelled:f}){let[l,r]=g(!1),n=T(!1),[i,p]=g(!1),e=T(!1),h=Fr(t?Ao:null),u=!t||h,m=Qe()?!0:!1,C=ha(Ao),{refusedWithin:S,noteRefused:b}=us();function R(){if(t&&(C()||S(Ao)))return b(),!0;return!1}let c=$o(()=>{if(e.current)return;let o=n.current;n.current=!0;let a=f(o);if(a===void 0){e.current=!0,Ts(1);return}r(!0),s(a)},void 0,t&&!i);function E(){if(n.current||!u)return!1;return n.current=!0,r(!0),!0}function s(o){if(e.current)return;e.current=!0,p(!0),d(o)}return{choicesDisabled:!u&&!m,decided:l,take:E,refuseInput:R,settled:()=>e.current,handBack:s,exit:c,exitHintShowing:c.pending&&!i}}
export{BSe};
