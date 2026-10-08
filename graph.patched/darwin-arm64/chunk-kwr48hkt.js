// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{V}from"./chunk-tnh13g2g.js";import{Xe}from"./chunk-k2e8p61g.js";import{y,m,p}from"./chunk-hz0a4zf6.js";import{_}from"./chunk-b5feae42.js";import{c}from"./chunk-tdmgys2e.js";import{Uur,Bur,jur}from"./chunk-q21zbtsq.js";import{Tin,xIr}from"./chunk-5v10w9r8.js";import{Q9e}from"./chunk-8fvazwb1.js";import{statfs as a}from"fs/promises";import{availableParallelism as f,totalmem as u}from"os";var d=["gcloud","aws","az","gh","brew","apt","sqlite3","ffmpeg","rg","jq"],s=2000,l=2n**30n;function WGn(){try{return Q9e()&&Tin("basic")!=="off"}catch(t){return c(V(t)),!1}}async function IIs(t){try{if(!WGn())return;let[e,r]=await Promise.all([xIr({includeMcpServers:!1,signal:AbortSignal.timeout(s),alsoLookFor:d,maxTools:Uur}),Xe(a(t,{bigint:!0}),s).catch(()=>{return})]);if(e===void 0){m("remote_tools_host_inventory","unsupported_platform");return}let n=r===void 0?-1n:r.bavail*r.bsize;if(!e.complete)p("remote_tools_host_inventory","deadline");else if(n<0n)p("remote_tools_host_inventory","disk_unread");else y("remote_tools_host_inventory");let i={...!e.complete&&{incomplete:!0},cpus:f(),memory_gb:Math.round(u()/Number(l)),...n>=0n&&{disk_free_gb:Math.min(Number(n/l),Bur)}},o=e.profile.tools;while(o.length>0&&_({tools:o,...i}).length>jur)o=o.slice(0,-1);return{tools:o,...i}}catch(e){c(V(e)),m("remote_tools_host_inventory","error");return}}
export{WGn,IIs};
