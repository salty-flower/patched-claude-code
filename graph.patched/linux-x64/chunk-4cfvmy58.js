// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{um,z5}from"./chunk-n6s5n8rn.js";import{kp,zLs}from"./chunk-h4za065g.js";import{basename as r,sep as n}from"path";function Mps(i){let s=kp(),{listedOwnerships:t}=s;t.clear(),s.listedSkillsAnswer="none_yet";for(let e of i){let l;try{l=um(r(z5(e.name,n)))}catch{continue}if(!t.has(l))t.set(l,{listedName:e.name,ownership:zLs(e),savedFromAChat:typeof e.backing_plugin_id==="string"})}s.listedSkillsAnswer="a_list"}function uso(i){return kp().listedOwnerships.get(um(i))}
export{Mps,uso};
