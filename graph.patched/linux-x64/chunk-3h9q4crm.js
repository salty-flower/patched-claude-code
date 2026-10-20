// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{d,E}from"./chunk-ekgz6skk.js";import{t}from"./chunk-n5v91jc3.js";import{kAs}from"./chunk-ssg3zzcy.js";import{mkdirSync as c,readFileSync as s}from"fs";import{posix as u}from"path";var Jzt="/sys/fs/cgroup/cpuacct";function Vbn(e){for(let n of e.split(`
`)){let[,o,...r]=n.split(":");if(o==="cpuacct"&&r.length>0)return r.join(":")}return}function qbn(e,n=c){let o=e.split("/").filter(Boolean);if(o.length<2||o.at(-1)?.startsWith("cc-")||o.includes(".."))return;let r=u.join(Jzt,e,kAs);try{n(r)}catch(i){if(E(i)!=="EEXIST"){t(`Bash-tool CPU will not be measured separately, and nothing else changes: could not make the cpuacct group ${r} (${E(i)??d(i)})`);return}}return r}function tnt(e){try{let n=Number(s(e,"utf8"));return Number.isFinite(n)?n/1e6:void 0}catch{return}}
export{Jzt,Vbn,qbn,tnt};
