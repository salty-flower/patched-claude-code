// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{tg,d5}from"./chunk-mn12ssyh.js";import{ap}from"./chunk-kbcgvt43.js";import{qAs}from"./chunk-5x6a0yn5.js";import{basename as r,sep as n}from"path";function Mss(i){let s=ap(),{listedOwnerships:t}=s;t.clear(),s.listedSkillsAnswer="none_yet";for(let e of i){let l;try{l=tg(r(d5(e.name,n)))}catch{continue}if(!t.has(l))t.set(l,{listedName:e.name,ownership:qAs(e),savedFromAChat:typeof e.backing_plugin_id==="string"})}s.listedSkillsAnswer="a_list"}function _Zr(i){return ap().listedOwnerships.get(tg(i))}
export{Mss,_Zr};
