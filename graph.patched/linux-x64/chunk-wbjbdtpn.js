// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{j_,Jve}from"./chunk-jnfzpp4p.js";import{l5o,N_}from"./chunk-3499swv4.js";import{basename as r,sep as n}from"path";function yDo(i){let s=N_(),{listedOwnerships:t}=s;t.clear(),s.listedSkillsAnswer="none_yet";for(let e of i){let l;try{l=j_(r(Jve(e.name,n)))}catch{continue}if(!t.has(l))t.set(l,{listedName:e.name,ownership:l5o(e),savedFromAChat:typeof e.backing_plugin_id==="string"})}s.listedSkillsAnswer="a_list"}function GDr(i){return N_().listedOwnerships.get(j_(i))}
export{yDo,GDr};
