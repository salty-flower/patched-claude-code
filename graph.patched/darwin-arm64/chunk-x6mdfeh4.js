// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{qpe,PE}from"./chunk-qe3f6kd6.js";import{a}from"./chunk-wkhfcbsj.js";import{yf}from"./chunk-vwjr2pkc.js";import{W_}from"./chunk-jmhxqcfx.js";import{Hb}from"./chunk-8797texs.js";import{tLr}from"./chunk-tk9shsyf.js";import{cj,$l,rS,gon}from"./chunk-nq62bgfy.js";import{WNt}from"./chunk-j391hx3t.js";import{KNt,xVe}from"./chunk-61exgj65.js";import{Si,pc}from"./chunk-kmhka96v.js";var p=new Set([W_,Hb]),c=["subscribe_pr_activity","unsubscribe_pr_activity"];function T(o){return c.some((e)=>o.endsWith(e))}var f=new Set([yf,"github"]);function hwn(o,e){if(e.length===0)return o;let t=e.map((n)=>[n,Si(n)]),r=o.filter((n)=>!t.some(([s,i])=>pc(n,s,i)));return r.length===o.length?o:r}function u(o){return o.mcpInfo?.cliOwned===!0&&o.mcpInfo.serverName===yf}var l=((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-xmzr90jw.js");function gwt(){return(process.env.CLAUDE_CODE_COORDINATOR_EXTRA_TOOLS??"").split(",").map((o)=>o.trim()).filter(Boolean)}function ywn(o,e=gwt()){if(KNt(o)||f.has(o.name))return!0;let t=Si(o.name);return e.some((r)=>r.startsWith(t))}function vWr(o){let e=a.CLAUDE_CODE_BRIEF,t=new Set(gwt());return o.filter((r)=>WNt.has(r.name)||T(r.name)||u(r)||xVe(r)||e&&p.has(r.name)||PE(r,t))}function S7e(o,e,t,r){let[n,s]=cj(gon($l([...o,...e],"name"),r),rS),i=[...s.sort(qpe),...n.sort(qpe)];if(l){if(l.isCoordinatorMode())return vWr(i)}return i}function b7e(o,e){let t=o.length===1?o[0]:void 0;if(t&&tLr(e,t))return[];return o}
export{hwn,gwt,ywn,vWr,S7e,b7e};
