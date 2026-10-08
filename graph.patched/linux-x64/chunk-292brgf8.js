// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{q}from"./chunk-5g6j8x8p.js";import{Xe}from"./chunk-670y7hd9.js";import{y,m,p}from"./chunk-68vq239n.js";import{_}from"./chunk-p46wpkfz.js";import{c}from"./chunk-3s94kw4m.js";import{bur,Sur,wur}from"./chunk-vecj8twx.js";import{gin,iIr}from"./chunk-shjceyzk.js";import{K5e}from"./chunk-vtsdwf2c.js";import{statfs as a}from"fs/promises";import{availableParallelism as f,totalmem as u}from"os";var d=["gcloud","aws","az","gh","brew","apt","sqlite3","ffmpeg","rg","jq"],s=2000,l=2n**30n;function LGn(){try{return K5e()&&gin("basic")!=="off"}catch(t){return c(q(t)),!1}}async function YPs(t){try{if(!LGn())return;let[e,r]=await Promise.all([iIr({includeMcpServers:!1,signal:AbortSignal.timeout(s),alsoLookFor:d,maxTools:bur}),Xe(a(t,{bigint:!0}),s).catch(()=>{return})]);if(e===void 0){m("remote_tools_host_inventory","unsupported_platform");return}let n=r===void 0?-1n:r.bavail*r.bsize;if(!e.complete)p("remote_tools_host_inventory","deadline");else if(n<0n)p("remote_tools_host_inventory","disk_unread");else y("remote_tools_host_inventory");let i={...!e.complete&&{incomplete:!0},cpus:f(),memory_gb:Math.round(u()/Number(l)),...n>=0n&&{disk_free_gb:Math.min(Number(n/l),Sur)}},o=e.profile.tools;while(o.length>0&&_({tools:o,...i}).length>wur)o=o.slice(0,-1);return{tools:o,...i}}catch(e){c(q(e)),m("remote_tools_host_inventory","error");return}}
export{LGn,YPs};
