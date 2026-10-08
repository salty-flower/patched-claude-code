// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{nb,eTe}from"./chunk-rmyzjj97.js";import{sg}from"./chunk-jf53b9z1.js";import{Rts}from"./chunk-v0y2d8ee.js";import{basename as r,sep as n}from"path";function mjo(i){let s=sg(),{listedOwnerships:t}=s;t.clear(),s.listedSkillsAnswer="none_yet";for(let e of i){let l;try{l=nb(r(eTe(e.name,n)))}catch{continue}if(!t.has(l))t.set(l,{listedName:e.name,ownership:Rts(e),savedFromAChat:typeof e.backing_plugin_id==="string"})}s.listedSkillsAnswer="a_list"}function w1r(i){return sg().listedOwnerships.get(nb(i))}
export{mjo,w1r};
