// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Oa,mO,Zc,sD}from"./chunk-r0a9v21k.js";import{t}from"./chunk-bnfhb7sj.js";import{a}from"./chunk-k4g6y57j.js";import{delimiter as l,isAbsolute as u,resolve as o}from"path";var Kor="CLAUDE_CODE_PLUGIN_DIRS",z5r="Unset CLAUDE_CODE_PLUGIN_DIRS (in the environment, or in the settings `env` block that sets it) to run without those folders.";function Yor(){let n=(a.CLAUDE_CODE_PLUGIN_DIRS??"").split(l).map((e)=>Zc(e.trim())).filter((e)=>e!==""),i=n.filter((e)=>!s(e));if(i.length>0)t(`${Kor}: skipped ${i.join(", ")}: a plugin folder here is an absolute local path or starts with ~`,{level:"warn"});return n.filter(s).map((e)=>o(e))}function V5r(){let n=Yor();if(a.CLAUDE_CODE_PLUGIN_DIRS!==void 0)a.set("CLAUDE_CODE_PLUGIN_DIRS",n.join(l));return n}function R$(...n){let i=new Map;for(let e of n.flat()){let r=o(e);if(!i.has(r))i.set(r,e)}return[...i.values()]}function n_e(n,i){let e=new Set(i.map((r)=>o(r)));return n.filter((r)=>!e.has(o(r)))}function s(n){return u(n)&&!sD(n)&&!Oa(n)&&!mO(n)}
export{Kor,z5r,Yor,V5r,R$,n_e};
