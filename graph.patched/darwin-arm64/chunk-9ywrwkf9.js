// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Wa,DO,cu,zD}from"./chunk-f66mhvm1.js";import{t}from"./chunk-tdxkq523.js";import{a}from"./chunk-h422gpw8.js";import{delimiter as l,isAbsolute as u,resolve as o}from"path";var _cr="CLAUDE_CODE_PLUGIN_DIRS",UQr="Unset CLAUDE_CODE_PLUGIN_DIRS (in the environment, or in the settings `env` block that sets it) to run without those folders.";function Scr(){let n=(a.CLAUDE_CODE_PLUGIN_DIRS??"").split(l).map((e)=>cu(e.trim())).filter((e)=>e!==""),i=n.filter((e)=>!s(e));if(i.length>0)t(`${_cr}: skipped ${i.join(", ")}: a plugin folder here is an absolute local path or starts with ~`,{level:"warn"});return n.filter(s).map((e)=>o(e))}function BQr(){let n=Scr();if(a.CLAUDE_CODE_PLUGIN_DIRS!==void 0)a.set("CLAUDE_CODE_PLUGIN_DIRS",n.join(l));return n}function SU(...n){let i=new Map;for(let e of n.flat()){let r=o(e);if(!i.has(r))i.set(r,e)}return[...i.values()]}function gSe(n,i){let e=new Set(i.map((r)=>o(r)));return n.filter((r)=>!e.has(o(r)))}function s(n){return u(n)&&!zD(n)&&!Wa(n)&&!DO(n)}
export{_cr,UQr,Scr,BQr,SU,gSe};
