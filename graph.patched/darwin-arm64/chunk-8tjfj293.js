// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Q5,Z5,bl,rb,z_,GA}from"./chunk-e44qnbvj.js";function n(){let e=bl();if(e==="opus"&&Q5()&&!GA(rb()))return{alias:"opus[1m]",name:"Opus 1M",multiplier:5};else if(e==="sonnet"&&Z5()&&!GA(z_()))return{alias:"sonnet[1m]",name:"Sonnet 1M",multiplier:5};return null}function FHe(e){let t=n();if(!t)return null;switch(e){case"warning":return`/model ${t.alias}`;case"tip":return`Tip: You have access to ${t.name} with ${t.multiplier}x more context`;default:return null}}
export{FHe};
