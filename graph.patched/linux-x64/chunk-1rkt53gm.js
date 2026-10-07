// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{V}from"./chunk-fdatg9ax.js";import{Qe}from"./chunk-0mwsqxme.js";import{y,m,p}from"./chunk-tzahwj8w.js";import{b}from"./chunk-gvn18sr5.js";import{c}from"./chunk-z9b8syjk.js";import{Uor,Bor,jor}from"./chunk-1xqd80pz.js";import{Jtn,okr}from"./chunk-nsvzgw19.js";import{J3e}from"./chunk-30a5necz.js";import{statfs as a}from"fs/promises";import{availableParallelism as _,totalmem as f}from"os";var u=["gcloud","aws","az","gh","brew","apt","sqlite3","ffmpeg","rg","jq"],s=2000,l=2n**30n;function VUn(){try{return J3e()&&Jtn("basic")!=="off"}catch(t){return c(V(t)),!1}}async function WSs(t){try{if(!VUn())return;let[e,r]=await Promise.all([okr({includeMcpServers:!1,signal:AbortSignal.timeout(s),alsoLookFor:u,maxTools:Uor}),Qe(a(t,{bigint:!0}),s).catch(()=>{return})]);if(e===void 0){m("remote_tools_host_inventory","unsupported_platform");return}let n=r===void 0?-1n:r.bavail*r.bsize;if(!e.complete)p("remote_tools_host_inventory","deadline");else if(n<0n)p("remote_tools_host_inventory","disk_unread");else y("remote_tools_host_inventory");let i={...!e.complete&&{incomplete:!0},cpus:_(),memory_gb:Math.round(f()/Number(l)),...n>=0n&&{disk_free_gb:Math.min(Number(n/l),Bor)}},o=e.profile.tools;while(o.length>0&&b({tools:o,...i}).length>jor)o=o.slice(0,-1);return{tools:o,...i}}catch(e){c(V(e)),m("remote_tools_host_inventory","error");return}}
export{VUn,WSs};
