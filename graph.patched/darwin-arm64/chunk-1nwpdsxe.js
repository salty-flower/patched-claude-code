// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{d,v}from"./chunk-36ysyspx.js";import{t}from"./chunk-d7b0m8qy.js";import{nUs}from"./chunk-9sg451z1.js";import{mkdirSync as c,readFileSync as s}from"fs";import{posix as u}from"path";var B4t="/sys/fs/cgroup/cpuacct";function wAn(e){for(let n of e.split(`
`)){let[,o,...r]=n.split(":");if(o==="cpuacct"&&r.length>0)return r.join(":")}return}function EAn(e,n=c){let o=e.split("/").filter(Boolean);if(o.length<2||o.at(-1)?.startsWith("cc-")||o.includes(".."))return;let r=u.join(B4t,e,nUs);try{n(r)}catch(i){if(v(i)!=="EEXIST"){t(`Bash-tool CPU will not be measured separately, and nothing else changes: could not make the cpuacct group ${r} (${v(i)??d(i)})`);return}}return r}function nat(e){try{let n=Number(s(e,"utf8"));return Number.isFinite(n)?n/1e6:void 0}catch{return}}
export{B4t,wAn,EAn,nat};
