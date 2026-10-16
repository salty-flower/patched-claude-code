// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{U}from"./chunk-w7m8nded.js";import{Be}from"./chunk-r2xfgg0x.js";import{g,m,f}from"./chunk-rhe3yjtx.js";import{_}from"./chunk-cwsn6mdf.js";import{l}from"./chunk-9pt2nr7j.js";import{wRr,vRr,ERr}from"./chunk-dpk0tdne.js";import{Qbn,wVr}from"./chunk-1bmh8z6t.js";import{Ctt}from"./chunk-b66b4rj9.js";import{statfs as u}from"fs/promises";import{availableParallelism as d,totalmem as p}from"os";var c=["gcloud","aws","az","gh","brew","apt","sqlite3","ffmpeg","rg","jq"],s=2000,a=2n**30n;function qZn(){try{return Ctt()&&Qbn("basic")!=="off"}catch(t){return l(U(t)),!1}}async function MQs(t){try{if(!qZn())return;let[e,r]=await Promise.all([wVr({includeMcpServers:!1,signal:AbortSignal.timeout(s),alsoLookFor:c,maxTools:wRr}),Be(u(t,{bigint:!0}),s).catch(()=>{return})]);if(e===void 0){m("remote_tools_host_inventory","unsupported_platform");return}let n=r===void 0?-1n:r.bavail*r.bsize;if(!e.complete)f("remote_tools_host_inventory","deadline");else if(n<0n)f("remote_tools_host_inventory","disk_unread");else g("remote_tools_host_inventory");let i={...!e.complete&&{incomplete:!0},cpus:d(),memory_gb:Math.round(p()/Number(a)),...n>=0n&&{disk_free_gb:Math.min(Number(n/a),vRr)}},o=e.profile.tools;while(o.length>0&&_({tools:o,...i}).length>ERr)o=o.slice(0,-1);return{tools:o,...i}}catch(e){l(U(e)),m("remote_tools_host_inventory","error");return}}
export{qZn,MQs};
