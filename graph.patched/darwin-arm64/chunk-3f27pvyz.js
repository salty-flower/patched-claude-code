// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{bt,vr}from"./chunk-behv2vm9.js";import{yo}from"./chunk-nc59dpfy.js";import{C,g,M}from"./chunk-757fgf90.js";import{Xi,ds}from"./chunk-1b3j5jte.js";import{Yo}from"./chunk-59zy4j10.js";import{mo}from"./chunk-fz8va2ct.js";M();function bpe(d,{selfOpened:t,onCancelled:f}){let[l,r]=g(!1),n=C(!1),[i,p]=g(!1),e=C(!1),h=vr(t?yo:null),u=!t||h,m=bt()?!0:!1,S=Xi(yo),{refusedWithin:b,noteRefused:R}=ds();function E(){if(t&&(S()||b(yo)))return R(),!0;return!1}let c=mo(()=>{if(e.current)return;let o=n.current;n.current=!0;let a=f(o);if(a===void 0){e.current=!0,Yo(1);return}r(!0),s(a)},void 0,t&&!i);function x(){if(n.current||!u)return!1;return n.current=!0,r(!0),!0}function s(o){if(e.current)return;e.current=!0,p(!0),d(o)}return{choicesDisabled:!u&&!m,decided:l,take:x,refuseInput:E,settled:()=>e.current,handBack:s,exit:c,exitHintShowing:c.pending&&!i}}
export{bpe};
