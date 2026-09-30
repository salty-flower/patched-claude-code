// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{zi,dk,zc,SP}from"./chunk-2j7zyd8v.js";import{t}from"./chunk-3wz0srxw.js";import{a}from"./chunk-1fpwxv0g.js";import{delimiter as l,isAbsolute as u,resolve as o}from"path";var qEn="CLAUDE_CODE_PLUGIN_DIRS",str="Unset CLAUDE_CODE_PLUGIN_DIRS (in the environment, or in the settings `env` block that sets it) to run without those folders.";function KEn(){let n=(a.CLAUDE_CODE_PLUGIN_DIRS??"").split(l).map((e)=>zc(e.trim())).filter((e)=>e!==""),i=n.filter((e)=>!s(e));if(i.length>0)t(`${qEn}: skipped ${i.join(", ")}: a plugin folder here is an absolute local path or starts with ~`,{level:"warn"});return n.filter(s).map((e)=>o(e))}function itr(){let n=KEn();if(a.CLAUDE_CODE_PLUGIN_DIRS!==void 0)a.set("CLAUDE_CODE_PLUGIN_DIRS",n.join(l));return n}function aF(...n){let i=new Map;for(let e of n.flat()){let r=o(e);if(!i.has(r))i.set(r,e)}return[...i.values()]}function T_t(n,i){let e=new Set(i.map((r)=>o(r)));return n.filter((r)=>!e.has(o(r)))}function s(n){return u(n)&&!SP(n)&&!zi(n)&&!dk(n)}
export{qEn,str,KEn,itr,aF,T_t};
