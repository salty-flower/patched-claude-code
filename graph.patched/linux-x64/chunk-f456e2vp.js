// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{kW,TW,xy,ih,Zm,dT}from"./chunk-7p6jp6kj.js";function n(){let e=xy();if(e==="opus"&&kW()&&!dT(ih()))return{alias:"opus[1m]",name:"Opus 1M",multiplier:5};else if(e==="sonnet"&&TW()&&!dT(Zm()))return{alias:"sonnet[1m]",name:"Sonnet 1M",multiplier:5};return null}function fbe(e){let t=n();if(!t)return null;switch(e){case"warning":return`/model ${t.alias}`;case"tip":return`Tip: You have access to ${t.name} with ${t.multiplier}x more context`;default:return null}}var BYt="No messages to compact",dRn="Compaction failed \xB7 conversation could not be reduced below the context limit",cRn="Compaction failed \xB7 attached media exceeds size limits",jYt="Error during compaction: ";
export{fbe,BYt,dRn,cRn,jYt};
