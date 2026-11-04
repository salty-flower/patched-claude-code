// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{Lm,LZ}from"./chunk-9yh8vn2r.js";import{cp}from"./chunk-2pfahbtc.js";import{Khr}from"./chunk-tnnqa9hb.js";import{basename as o,sep as n}from"path";function Cni(s){let e=cp(),{listedOwnerships:i}=e;i.clear(),e.listedSkillsAnswer="none_yet";for(let t of s){let l;try{l=Lm(o(LZ(t.name,n)))}catch{continue}if(!i.has(l))i.set(l,{listedName:t.name,ownership:Khr(t),savedFromAChat:typeof t.backing_plugin_id==="string"})}e.listedSkillsAnswer="a_list",e.lastRoundCouldNotAsk=!1}function wKr(s){return cp().listedOwnerships.get(Lm(s))}
export{Cni,wKr};
