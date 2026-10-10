// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Im,YK}from"./chunk-hwtkjv40.js";import{Gu}from"./chunk-82stne6k.js";import{Uds}from"./chunk-x1hnhzq0.js";import{basename as r,sep as n}from"path";function g4o(i){let s=Gu(),{listedOwnerships:t}=s;t.clear(),s.listedSkillsAnswer="none_yet";for(let e of i){let l;try{l=Im(r(YK(e.name,n)))}catch{continue}if(!t.has(l))t.set(l,{listedName:e.name,ownership:Uds(e),savedFromAChat:typeof e.backing_plugin_id==="string"})}s.listedSkillsAnswer="a_list"}function CVr(i){return Gu().listedOwnerships.get(Im(i))}
export{g4o,CVr};
