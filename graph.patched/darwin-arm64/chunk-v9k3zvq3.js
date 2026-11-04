// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{i}from"./chunk-n1cpnz94.js";import{E$}from"./chunk-2pfahbtc.js";import{LYr,Whe,eS}from"./chunk-0x9x817t.js";import{qd}from"./chunk-09rtwwys.js";import{eFo}from"./chunk-d2avtggq.js";import{Ni}from"./chunk-wv7b91vf.js";import{Zr}from"./chunk-0rfh1g70.js";function Fbt(o,e=!1){return l(o,[...Ni()?Whe():[],...LYr()?[eS]:[],...qd()?(E$()??[]).filter(eFo):[],...e?s():[]])}function s(){return[]}function Wzs(o,e){return l(o,[...Ni()?Whe():[],...LYr()&&!i.CLAUDE_CODE_SIMPLE?[eS]:[]].filter((t)=>t.isEnabled()&&!Zr(e,t)))}function l(o,e){if(e.length===0)return o;let t=new Set(o.map((n)=>n.name)),r=e.filter((n)=>!t.has(n.name));return r.length>0?[...o,...r]:o}
export{Fbt,Wzs};
