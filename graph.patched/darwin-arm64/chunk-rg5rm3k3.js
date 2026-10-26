// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{Ua,LR,Gu,tD}from"./chunk-gp4v3dbd.js";import{t}from"./chunk-d7b0m8qy.js";import{i}from"./chunk-9a41hw1t.js";import{delimiter as a,isAbsolute as u,resolve as s}from"path";var ZSr="CLAUDE_CODE_PLUGIN_DIRS",dco="Unset CLAUDE_CODE_PLUGIN_DIRS (in the environment, or in the settings `env` block that sets it) to run without those folders.";function ebr(){let n=(i.CLAUDE_CODE_PLUGIN_DIRS??"").split(a).map((e)=>Gu(e.trim())).filter((e)=>e!==""),r=n.filter((e)=>!l(e));if(r.length>0)t(`${ZSr}: skipped ${r.join(", ")}: a plugin folder here is an absolute local path or starts with ~`,{level:"warn"});return n.filter(l).map((e)=>s(e))}function cco(){let n=ebr();if(i.CLAUDE_CODE_PLUGIN_DIRS!==void 0)i.set("CLAUDE_CODE_PLUGIN_DIRS",n.join(a));return n}function eB(...n){let r=new Map;for(let e of n.flat()){let o=s(e);if(!r.has(o))r.set(o,e)}return[...r.values()]}function fEe(n,r){let e=new Set(r.map((o)=>s(o)));return n.filter((o)=>!e.has(s(o)))}function l(n){return u(n)&&!tD(n)&&!Ua(n)&&!LR(n)}
export{ZSr,dco,ebr,cco,eB,fEe};
