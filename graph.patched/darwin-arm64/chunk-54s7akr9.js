// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{W_,rve}from"./chunk-me6pw0qj.js";import{D9o,F_}from"./chunk-5kvchewr.js";import{basename as r,sep as n}from"path";function LMo(i){let s=F_(),{listedOwnerships:t}=s;t.clear(),s.listedSkillsAnswer="none_yet";for(let e of i){let l;try{l=W_(r(rve(e.name,n)))}catch{continue}if(!t.has(l))t.set(l,{listedName:e.name,ownership:D9o(e),savedFromAChat:typeof e.backing_plugin_id==="string"})}s.listedSkillsAnswer="a_list"}function kMr(i){return F_().listedOwnerships.get(W_(i))}
export{LMo,kMr};
