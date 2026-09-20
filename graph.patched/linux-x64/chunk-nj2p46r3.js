// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{Upe,xv}from"./chunk-3bn1z6rt.js";import{a}from"./chunk-q2vrcqny.js";import{yf}from"./chunk-b8169sgj.js";import{j_}from"./chunk-bb220g96.js";import{RS}from"./chunk-tpht1k6q.js";import{bMr}from"./chunk-0h2z9cza.js";import{t2,$l,tb,Yrn}from"./chunk-v4zgc4qd.js";import{TNt}from"./chunk-qxsf33a1.js";import{PNt,hKe}from"./chunk-ncxvhzwf.js";import{bi,uc}from"./chunk-er8eeww9.js";var p=new Set([j_,RS]),c=["subscribe_pr_activity","unsubscribe_pr_activity"];function T(o){return c.some((e)=>o.endsWith(e))}var f=new Set([yf,"github"]);function vSn(o,e){if(e.length===0)return o;let t=e.map((n)=>[n,bi(n)]),r=o.filter((n)=>!t.some(([s,i])=>uc(n,s,i)));return r.length===o.length?o:r}function u(o){return o.mcpInfo?.cliOwned===!0&&o.mcpInfo.serverName===yf}var l=((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-1h5fhymj.js");function MSt(){return(process.env.CLAUDE_CODE_COORDINATOR_EXTRA_TOOLS??"").split(",").map((o)=>o.trim()).filter(Boolean)}function ESn(o,e=MSt()){if(PNt(o)||f.has(o.name))return!0;let t=bi(o.name);return e.some((r)=>r.startsWith(t))}function Lzr(o){let e=a.CLAUDE_CODE_BRIEF,t=new Set(MSt());return o.filter((r)=>TNt.has(r.name)||T(r.name)||u(r)||hKe(r)||e&&p.has(r.name)||xv(r,t))}function YYe(o,e,t,r){let[n,s]=t2(Yrn($l([...o,...e],"name"),r),tb),i=[...s.sort(Upe),...n.sort(Upe)];if(l){if(l.isCoordinatorMode())return Lzr(i)}return i}function XYe(o,e){let t=o.length===1?o[0]:void 0;if(t&&bMr(e,t))return[];return o}
export{vSn,MSt,ESn,Lzr,YYe,XYe};
