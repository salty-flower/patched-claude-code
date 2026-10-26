// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{HG,DG,l_,dh,cg,Fx}from"./chunk-27xjmczp.js";function n(){let e=l_();if(e==="opus"&&HG()&&!Fx(dh()))return{alias:"opus[1m]",name:"Opus 1M",multiplier:5};else if(e==="sonnet"&&DG()&&!Fx(cg()))return{alias:"sonnet[1m]",name:"Sonnet 1M",multiplier:5};return null}function mEe(e){let t=n();if(!t)return null;switch(e){case"warning":return`/model ${t.alias}`;case"tip":return`Tip: You have access to ${t.name} with ${t.multiplier}x more context`;default:return null}}var M7t="No messages to compact",KHn="Compaction failed \xB7 conversation could not be reduced below the context limit",qHn="Compaction failed \xB7 attached media exceeds size limits",H7t="Error during compaction: ";
export{mEe,M7t,KHn,qHn,H7t};
