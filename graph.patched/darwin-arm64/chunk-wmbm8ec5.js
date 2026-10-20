// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{d,v}from"./chunk-nre716m4.js";import{t}from"./chunk-tdxkq523.js";import{dAs}from"./chunk-qsqmwcv9.js";import{mkdirSync as c,readFileSync as s}from"fs";import{posix as u}from"path";var dzt="/sys/fs/cgroup/cpuacct";function dbn(e){for(let n of e.split(`
`)){let[,o,...r]=n.split(":");if(o==="cpuacct"&&r.length>0)return r.join(":")}return}function cbn(e,n=c){let o=e.split("/").filter(Boolean);if(o.length<2||o.at(-1)?.startsWith("cc-")||o.includes(".."))return;let r=u.join(dzt,e,dAs);try{n(r)}catch(i){if(v(i)!=="EEXIST"){t(`Bash-tool CPU will not be measured separately, and nothing else changes: could not make the cpuacct group ${r} (${v(i)??d(i)})`);return}}return r}function ant(e){try{let n=Number(s(e,"utf8"));return Number.isFinite(n)?n/1e6:void 0}catch{return}}
export{dzt,dbn,cbn,ant};
