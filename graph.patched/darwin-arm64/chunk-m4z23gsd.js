// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{i}from"./chunk-428zme0n.js";import{e2}from"./chunk-954kbre8.js";import{Z_o,Kwe,Eb}from"./chunk-wqb2b4v0.js";import{Cd}from"./chunk-wt49rsrd.js";import{wos}from"./chunk-mc3p1t9j.js";import{na}from"./chunk-xjqp3eha.js";import{Vr}from"./chunk-qa68p7q3.js";function MIt(o,e=!1){return l(o,[...na()?Kwe():[],...Z_o()?[Eb]:[],...Cd()?(e2()??[]).filter(wos):[],...e?s():[]])}function s(){return[]}function Nwi(o,e){return l(o,[...na()?Kwe():[],...Z_o()&&!i.CLAUDE_CODE_SIMPLE?[Eb]:[]].filter((t)=>t.isEnabled()&&!Vr(e,t)))}function l(o,e){if(e.length===0)return o;let t=new Set(o.map((n)=>n.name)),r=e.filter((n)=>!t.has(n.name));return r.length>0?[...o,...r]:o}
export{MIt,Nwi};
