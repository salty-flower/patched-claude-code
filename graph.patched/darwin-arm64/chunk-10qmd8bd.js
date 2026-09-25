// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{Gt,p8,Nb}from"./chunk-mvgykbex.js";import{a}from"./chunk-3a4khaz5.js";import{Be}from"./chunk-n875m8bj.js";import{rf}from"./chunk-emn764wn.js";import{Zy}from"./chunk-vn3m1gs0.js";import{Jy}from"./chunk-kg44xfte.js";import{zmo}from"./chunk-n321ny0e.js";import{Fl,Xbe}from"./chunk-etkg2s89.js";import{dBe}from"./chunk-pphmweh8.js";import{Oh,MJt,hTt}from"./chunk-3ph1vk6s.js";import{XJt,Hnt}from"./chunk-4yt7y51a.js";import{efn}from"./chunk-8v5tkwj5.js";import{NM}from"./chunk-7afrz5mb.js";import{fi,Kc}from"./chunk-apr1pmkm.js";var c=new Set([Zy,Jy]),f=["subscribe_pr_activity","unsubscribe_pr_activity"];function T(o){return f.some((e)=>o.endsWith(e))}var u=new Set([rf,"github"]);function _3n(o,e){if(e.length===0)return o;let t=e.map((r)=>[r,fi(r)]),n=o.filter((r)=>!t.some(([s,i])=>Kc(r,s,i)));return n.length===o.length?o:n}function O(o){return o.mcpInfo?.cliOwned===!0&&o.mcpInfo.serverName===rf}var m=((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-5w4xgnjs.js");function v$t(){return(process.env.CLAUDE_CODE_COORDINATOR_EXTRA_TOOLS??"").split(",").map((o)=>o.trim()).filter(Boolean)}function S3n(o,e=v$t()){if(XJt(o)||u.has(o.name))return!0;let t=fi(o.name);return e.some((n)=>n.startsWith(t))}function rxo(o){let e=a.CLAUDE_CODE_BRIEF,t=new Set(v$t()),n=hTt();return o.filter((r)=>MJt.has(r.name)||n&&Gt(r,Be)&&!Oh(r)||T(r.name)||O(r)||Hnt(r)||e&&c.has(r.name)||Nb(r,t))}function Cut(o,e,t,n){let[r,s]=NM(efn(Fl(dBe([...o,...e]),"name"),n),(l)=>Oh(l)||Xbe(l)),i=[...s.sort(p8),...r.sort(p8)];if(m){if(m.isCoordinatorMode())return rxo(i)}return i}function Aut(o,e){let t=o.length===1?o[0]:void 0;if(t&&zmo(e,t))return[];return o}
export{_3n,v$t,S3n,rxo,Cut,Aut};
