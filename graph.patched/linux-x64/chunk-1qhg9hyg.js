// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{A,u,F}from"./chunk-v59pjxqq.js";F();var vS=150,Fi=250;function Sc(e,n=vS){let t=Date.now()-e;return t>=0&&t<n}function oje(e){let[n,t]=u(()=>({key:e,at:Date.now()}));if(n.key!==e)t({key:e,at:Date.now()});return function(){return Sc(n.at)}}function kge(){let[e,n]=u();return A(()=>{if(e!==void 0)n(void 0)},[e]),[e,n]}
export{vS,Fi,Sc,oje,kge};
