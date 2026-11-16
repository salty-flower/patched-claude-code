// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{cn}from"./chunk-0sn0736b.js";import{v6}from"./chunk-mv17c2d4.js";import{nYe}from"./chunk-kyjdbcnc.js";import{execFile as i}from"child_process";import{promisify as n}from"util";var s=n(i);async function x9n(o){let t=v6("git");if(t===null||nYe(t,process.env))return[];try{let{stdout:r}=await s(t,["-c","core.hooksPath=/dev/null","-c","core.fsmonitor=","worktree","list","--porcelain"],{cwd:o,timeout:5000,windowsHide:!0});if(!r)return[];return r.split(`
`).filter((e)=>e.startsWith("worktree ")).map((e)=>cn(e.slice(9)))}catch{return[]}}
export{x9n};
