// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{U}from"./chunk-nre716m4.js";import{Ne}from"./chunk-2ckwvz0j.js";import{g,m,p}from"./chunk-53e7d9dh.js";import{_}from"./chunk-tdxkq523.js";import{l}from"./chunk-277zhca1.js";import{iHr,aHr,lHr}from"./chunk-f4yykyp9.js";import{xCn,G8r}from"./chunk-zcamj47r.js";import{yot}from"./chunk-1wdyz8vp.js";import{statfs as f}from"fs/promises";import{availableParallelism as u,totalmem as d}from"os";var c=["gcloud","aws","az","gh","brew","apt","sqlite3","ffmpeg","rg","jq"],s=2000,a=2n**30n;function Jir(){try{return yot()&&xCn("basic")!=="off"}catch(t){return l(U(t)),!1}}async function sdi(t){try{if(!Jir())return;let[e,r]=await Promise.all([G8r({includeMcpServers:!1,signal:AbortSignal.timeout(s),alsoLookFor:c,maxTools:iHr}),Ne(f(t,{bigint:!0}),s).catch(()=>{return})]);if(e===void 0){m("remote_tools_host_inventory","unsupported_platform");return}let n=r===void 0?-1n:r.bavail*r.bsize;if(!e.complete)p("remote_tools_host_inventory","deadline");else if(n<0n)p("remote_tools_host_inventory","disk_unread");else g("remote_tools_host_inventory");let i={...!e.complete&&{incomplete:!0},cpus:u(),memory_gb:Math.round(d()/Number(a)),...n>=0n&&{disk_free_gb:Math.min(Number(n/a),aHr)}},o=e.profile.tools;while(o.length>0&&_({tools:o,...i}).length>lHr)o=o.slice(0,-1);return{tools:o,...i}}catch(e){l(U(e)),m("remote_tools_host_inventory","error");return}}
export{Jir,sdi};
