// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{tg,t5}from"./chunk-ahved7z2.js";import{lp}from"./chunk-zyq5ptt2.js";import{lAs}from"./chunk-avky75vv.js";import{basename as r,sep as n}from"path";function Los(i){let s=lp(),{listedOwnerships:t}=s;t.clear(),s.listedSkillsAnswer="none_yet";for(let e of i){let l;try{l=tg(r(t5(e.name,n)))}catch{continue}if(!t.has(l))t.set(l,{listedName:e.name,ownership:lAs(e),savedFromAChat:typeof e.backing_plugin_id==="string"})}s.listedSkillsAnswer="a_list"}function T7r(i){return lp().listedOwnerships.get(tg(i))}
export{Los,T7r};
