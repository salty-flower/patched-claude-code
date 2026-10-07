// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{q}from"./chunk-fqsygynq.js";import{Qe}from"./chunk-ws170zqm.js";import{y,m,p}from"./chunk-e3gw32ew.js";import{S}from"./chunk-f8eqwxpt.js";import{c}from"./chunk-qfs4y3ww.js";import{asr,lsr,csr}from"./chunk-ax2crbgp.js";import{fnn,ACr}from"./chunk-kg4ae6kj.js";import{i4e}from"./chunk-kfgst0y0.js";import{statfs as a}from"fs/promises";import{availableParallelism as _,totalmem as f}from"os";var u=["gcloud","aws","az","gh","brew","apt","sqlite3","ffmpeg","rg","jq"],s=2000,l=2n**30n;function bUn(){try{return i4e()&&fnn("basic")!=="off"}catch(t){return c(q(t)),!1}}async function Tws(t){try{if(!bUn())return;let[e,r]=await Promise.all([ACr({includeMcpServers:!1,signal:AbortSignal.timeout(s),alsoLookFor:u,maxTools:asr}),Qe(a(t,{bigint:!0}),s).catch(()=>{return})]);if(e===void 0){m("remote_tools_host_inventory","unsupported_platform");return}let n=r===void 0?-1n:r.bavail*r.bsize;if(!e.complete)p("remote_tools_host_inventory","deadline");else if(n<0n)p("remote_tools_host_inventory","disk_unread");else y("remote_tools_host_inventory");let i={...!e.complete&&{incomplete:!0},cpus:_(),memory_gb:Math.round(f()/Number(l)),...n>=0n&&{disk_free_gb:Math.min(Number(n/l),lsr)}},o=e.profile.tools;while(o.length>0&&S({tools:o,...i}).length>csr)o=o.slice(0,-1);return{tools:o,...i}}catch(e){c(q(e)),m("remote_tools_host_inventory","error");return}}
export{bUn,Tws};
