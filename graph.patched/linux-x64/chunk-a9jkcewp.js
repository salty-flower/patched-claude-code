// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{i}from"./chunk-5g5ea6r9.js";import{JB}from"./chunk-k2zw08bd.js";import{C_o,Uwe,wS}from"./chunk-zaxe68t4.js";import{Cd}from"./chunk-41q325vj.js";import{Xrs}from"./chunk-wt9wngb7.js";import{na}from"./chunk-nbw6q6ev.js";import{Vr}from"./chunk-hhhk9c5n.js";function COt(o,e=!1){return l(o,[...na()?Uwe():[],...C_o()?[wS]:[],...Cd()?(JB()??[]).filter(Xrs):[],...e?s():[]])}function s(){return[]}function owi(o,e){return l(o,[...na()?Uwe():[],...C_o()&&!i.CLAUDE_CODE_SIMPLE?[wS]:[]].filter((t)=>t.isEnabled()&&!Vr(e,t)))}function l(o,e){if(e.length===0)return o;let t=new Set(o.map((n)=>n.name)),r=e.filter((n)=>!t.has(n.name));return r.length>0?[...o,...r]:o}
export{COt,owi};
