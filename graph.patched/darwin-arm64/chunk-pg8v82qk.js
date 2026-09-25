// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{Ft,Cr}from"./chunk-hkhfvq8c.js";import{wo}from"./chunk-x7s7q46k.js";import{Zi,ls}from"./chunk-t87gym6w.js";import{fo}from"./chunk-h3bc7dkc.js";import{$r}from"./chunk-exsk7jwc.js";import{A,g,L}from"./chunk-1cnhgfv0.js";L();function IUt(d,{selfOpened:t,onCancelled:f}){let[l,r]=g(!1),n=A(!1),[i,p]=g(!1),e=A(!1),h=Cr(t?wo:null),u=!t||h,m=Ft()?!0:!1,C=Zi(wo),{refusedWithin:S,noteRefused:b}=ls();function R(){if(t&&(C()||S(wo)))return b(),!0;return!1}let c=$r(()=>{if(e.current)return;let o=n.current;n.current=!0;let a=f(o);if(a===void 0){e.current=!0,fo(1);return}r(!0),s(a)},void 0,t&&!i);function E(){if(n.current||!u)return!1;return n.current=!0,r(!0),!0}function s(o){if(e.current)return;e.current=!0,p(!0),d(o)}return{choicesDisabled:!u&&!m,decided:l,take:E,refuseInput:R,settled:()=>e.current,handBack:s,exit:c,exitHintShowing:c.pending&&!i}}
export{IUt};
