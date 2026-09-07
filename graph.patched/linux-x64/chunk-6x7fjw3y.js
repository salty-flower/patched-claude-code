// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{d,N}from"./chunk-vm1tjjym.js";N();var RH=150,fo=250;function la(e,n=RH){let t=Date.now()-e;return t>=0&&t<n}function eFn(e){let[n,t]=d(()=>({key:e,at:Date.now()}));if(n.key!==e)t({key:e,at:Date.now()});return function(){return la(n.at)}}
export{RH,fo,la,eFn};
