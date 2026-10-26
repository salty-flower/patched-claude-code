// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{N}from"./chunk-36ysyspx.js";import{Pe}from"./chunk-3kevgx4j.js";import{g,m,p}from"./chunk-wn8xtaqg.js";import{_}from"./chunk-d7b0m8qy.js";import{l}from"./chunk-thm21ca7.js";import{FWr,$Wr,UWr}from"./chunk-epan1q4y.js";import{zOn,Yoo}from"./chunk-cy2wjj4v.js";import{fdt}from"./chunk-hqkn7evc.js";import{statfs as f}from"fs/promises";import{availableParallelism as u,totalmem as d}from"os";var c=["gcloud","aws","az","gh","brew","apt","sqlite3","ffmpeg","rg","jq"],s=2000,a=2n**30n;function Shr(){try{return fdt()&&zOn("basic")!=="off"}catch(t){return l(N(t)),!1}}async function Fki(t){try{if(!Shr())return;let[e,r]=await Promise.all([Yoo({includeMcpServers:!1,signal:AbortSignal.timeout(s),alsoLookFor:c,maxTools:FWr}),Pe(f(t,{bigint:!0}),s).catch(()=>{return})]);if(e===void 0){m("remote_tools_host_inventory","unsupported_platform");return}let n=r===void 0?-1n:r.bavail*r.bsize;if(!e.complete)p("remote_tools_host_inventory","deadline");else if(n<0n)p("remote_tools_host_inventory","disk_unread");else g("remote_tools_host_inventory");let i={...!e.complete&&{incomplete:!0},cpus:u(),memory_gb:Math.round(d()/Number(a)),...n>=0n&&{disk_free_gb:Math.min(Number(n/a),$Wr)}},o=e.profile.tools;while(o.length>0&&_({tools:o,...i}).length>UWr)o=o.slice(0,-1);return{tools:o,...i}}catch(e){l(N(e)),m("remote_tools_host_inventory","error");return}}
export{Shr,Fki};
