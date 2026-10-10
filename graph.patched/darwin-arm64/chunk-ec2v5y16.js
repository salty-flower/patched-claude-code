// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{G}from"./chunk-886tf6ja.js";import{ze}from"./chunk-yjc18bey.js";import{g,m,f}from"./chunk-2hb5361r.js";import{_}from"./chunk-gyf58rwf.js";import{c}from"./chunk-gsnbskq4.js";import{wyr,Eyr,vyr}from"./chunk-hwpb27as.js";import{spn,xNr}from"./chunk-01svw805.js";import{S7e}from"./chunk-k2pxx42t.js";import{statfs as a}from"fs/promises";import{availableParallelism as u,totalmem as d}from"os";var p=["gcloud","aws","az","gh","brew","apt","sqlite3","ffmpeg","rg","jq"],s=2000,l=2n**30n;function N4n(){try{return S7e()&&spn("basic")!=="off"}catch(t){return c(G(t)),!1}}async function cBs(t){try{if(!N4n())return;let[e,r]=await Promise.all([xNr({includeMcpServers:!1,signal:AbortSignal.timeout(s),alsoLookFor:p,maxTools:wyr}),ze(a(t,{bigint:!0}),s).catch(()=>{return})]);if(e===void 0){m("remote_tools_host_inventory","unsupported_platform");return}let n=r===void 0?-1n:r.bavail*r.bsize;if(!e.complete)f("remote_tools_host_inventory","deadline");else if(n<0n)f("remote_tools_host_inventory","disk_unread");else g("remote_tools_host_inventory");let i={...!e.complete&&{incomplete:!0},cpus:u(),memory_gb:Math.round(d()/Number(l)),...n>=0n&&{disk_free_gb:Math.min(Number(n/l),Eyr)}},o=e.profile.tools;while(o.length>0&&_({tools:o,...i}).length>vyr)o=o.slice(0,-1);return{tools:o,...i}}catch(e){c(G(e)),m("remote_tools_host_inventory","error");return}}
export{N4n,cBs};
