// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{Ry,Aye}from"./chunk-28xpm0wp.js";import{yS,$Ao}from"./chunk-p9bh21nv.js";import{basename as o,sep as s}from"path";function sdo(i){let{listedOwnerships:t}=yS();t.clear();for(let e of i){let r;try{r=Ry(o(Aye(e.name,s)))}catch{continue}if(!t.has(r))t.set(r,{listedName:e.name,ownership:$Ao(e),savedFromAChat:typeof e.backing_plugin_id==="string"})}}function smr(i){return yS().listedOwnerships.get(Ry(i))}
export{sdo,smr};
