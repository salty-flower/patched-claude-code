// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{cn}from"./chunk-e5p1adf2.js";import{wG}from"./chunk-09czkwbz.js";import{YYe}from"./chunk-b707apt3.js";import{execFile as i}from"child_process";import{promisify as n}from"util";var s=n(i);async function s8n(o){let t=wG("git");if(t===null||YYe(t,process.env))return[];try{let{stdout:r}=await s(t,["-c","core.hooksPath=/dev/null","-c","core.fsmonitor=","worktree","list","--porcelain"],{cwd:o,timeout:5000,windowsHide:!0});if(!r)return[];return r.split(`
`).filter((e)=>e.startsWith("worktree ")).map((e)=>cn(e.slice(9)))}catch{return[]}}
export{s8n};
