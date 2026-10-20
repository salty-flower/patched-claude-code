// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{U}from"./chunk-ekgz6skk.js";import{Ne}from"./chunk-wk0rbc8w.js";import{g,m,f}from"./chunk-yzndvntb.js";import{_}from"./chunk-n5v91jc3.js";import{l}from"./chunk-jkcb7qdd.js";import{$Hr,FHr,UHr}from"./chunk-h3dn4j2q.js";import{fTn,w8r}from"./chunk-9befx4h0.js";import{pot}from"./chunk-r3pgc3n3.js";import{statfs as u}from"fs/promises";import{availableParallelism as d,totalmem as p}from"os";var c=["gcloud","aws","az","gh","brew","apt","sqlite3","ffmpeg","rg","jq"],s=2000,a=2n**30n;function qir(){try{return pot()&&fTn("basic")!=="off"}catch(t){return l(U(t)),!1}}async function Ali(t){try{if(!qir())return;let[e,r]=await Promise.all([w8r({includeMcpServers:!1,signal:AbortSignal.timeout(s),alsoLookFor:c,maxTools:$Hr}),Ne(u(t,{bigint:!0}),s).catch(()=>{return})]);if(e===void 0){m("remote_tools_host_inventory","unsupported_platform");return}let n=r===void 0?-1n:r.bavail*r.bsize;if(!e.complete)f("remote_tools_host_inventory","deadline");else if(n<0n)f("remote_tools_host_inventory","disk_unread");else g("remote_tools_host_inventory");let i={...!e.complete&&{incomplete:!0},cpus:d(),memory_gb:Math.round(p()/Number(a)),...n>=0n&&{disk_free_gb:Math.min(Number(n/a),FHr)}},o=e.profile.tools;while(o.length>0&&_({tools:o,...i}).length>UHr)o=o.slice(0,-1);return{tools:o,...i}}catch(e){l(U(e)),m("remote_tools_host_inventory","error");return}}
export{qir,Ali};
