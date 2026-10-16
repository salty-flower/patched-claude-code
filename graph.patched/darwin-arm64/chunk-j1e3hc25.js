// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Uy}from"./chunk-798vwh4r.js";import{a}from"./chunk-k4g6y57j.js";import{wt,Lfe,ME}from"./chunk-dxfmgtda.js";import{Ud}from"./chunk-tx0fhcwf.js";import{yi}from"./chunk-fbw24n5y.js";import{We}from"./chunk-1jaxs49d.js";import{nm}from"./chunk-rk99n4cg.js";import{YPs}from"./chunk-ne7rg0hk.js";import{Jdt}from"./chunk-dvmwj6gj.js";import{J1n,J_o,hAs,Men}from"./chunk-z68b6hf7.js";import{Fwe,xct}from"./chunk-yxtre0f9.js";import{rvn}from"./chunk-jm6k6jrr.js";import{kC}from"./chunk-9gxhswjq.js";import{LV}from"./chunk-kwf2mm9f.js";import{oh}from"./chunk-km9ep2ny.js";import{po,bc}from"./chunk-nsdbpz9m.js";var c=new Set([nm,Uy]);function w4r(o,e){if(e.length===0)return o;let t=e.map((i)=>[i,po(i)]),n=o.filter((i)=>!t.some(([m,r])=>bc(i,m,r)));return n.length===o.length?o:n}function f(o){return o.mcpInfo?.cliOwned===!0&&o.mcpInfo.serverName===Ud}var p=((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-t64vmtqj.js");function nvn(){return(process.env.CLAUDE_CODE_COORDINATOR_EXTRA_TOOLS??"").split(",").map((o)=>o.trim()).filter(Boolean)}function E4r(o,e=nvn()){if(Fwe(o)||J_o.includes(o.name))return!0;let t=po(o.name);return e.some((n)=>n.startsWith(t))}function jrr(o,e=()=>!1){let t=a.CLAUDE_CODE_BRIEF,n=new Set(nvn()),i=Men(),m=o.some(xct);return o.filter((r)=>J1n.has(r.name)||i&&wt(r,We)&&!oh(r)||hAs(r.name)||f(r)||xct(r)||t&&c.has(r.name)||ME(r,n)||!m&&e(r))}function _6t(o,e,t,n,i){let[m,r]=kC(rvn(yi(Jdt([...o,...e]),"name"),n),(l)=>oh(l)||LV(l)),s=[...r.sort(Lfe),...m.sort(Lfe)];if(p.isCoordinatorMode())return jrr(s,i);return s}function S6t(o,e){let t=o.length===1?o[0]:void 0;if(t&&YPs(e,t))return[];return o}
export{w4r,nvn,E4r,jrr,_6t,S6t};
