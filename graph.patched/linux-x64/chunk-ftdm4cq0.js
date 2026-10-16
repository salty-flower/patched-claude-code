// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Fy}from"./chunk-694thzp1.js";import{a}from"./chunk-xwn0mfnc.js";import{wt,Pfe,Mv}from"./chunk-dpk0tdne.js";import{Ud}from"./chunk-v5v0bm5h.js";import{yi}from"./chunk-4m7tg52y.js";import{We}from"./chunk-dzt95g1x.js";import{nm}from"./chunk-bsdd04br.js";import{cPs}from"./chunk-sxgf7ra0.js";import{Wdt}from"./chunk-7f1jmyrt.js";import{MBn,v_o,ITs,ben}from"./chunk-6yyxz3wk.js";import{oh}from"./chunk-8k4b8b64.js";import{Owe,wct}from"./chunk-8s0jy8kv.js";import{Svn}from"./chunk-mgm49vqe.js";import{wT}from"./chunk-xhd8rxkk.js";import{CK}from"./chunk-egrh0qap.js";import{po,Sc}from"./chunk-peqw4kvv.js";var c=new Set([nm,Fy]);function q4r(o,e){if(e.length===0)return o;let t=e.map((i)=>[i,po(i)]),n=o.filter((i)=>!t.some(([m,r])=>Sc(i,m,r)));return n.length===o.length?o:n}function f(o){return o.mcpInfo?.cliOwned===!0&&o.mcpInfo.serverName===Ud}var p=((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-panea0ek.js");function bvn(){return(process.env.CLAUDE_CODE_COORDINATOR_EXTRA_TOOLS??"").split(",").map((o)=>o.trim()).filter(Boolean)}function Y4r(o,e=bvn()){if(Owe(o)||v_o.includes(o.name))return!0;let t=po(o.name);return e.some((n)=>n.startsWith(t))}function trr(o,e=()=>!1){let t=a.CLAUDE_CODE_BRIEF,n=new Set(bvn()),i=ben(),m=o.some(wct);return o.filter((r)=>MBn.has(r.name)||i&&wt(r,We)&&!oh(r)||ITs(r.name)||f(r)||wct(r)||t&&c.has(r.name)||Mv(r,n)||!m&&e(r))}function V2t(o,e,t,n,i){let[m,r]=wT(Svn(yi(Wdt([...o,...e]),"name"),n),(l)=>oh(l)||CK(l)),s=[...r.sort(Pfe),...m.sort(Pfe)];if(p.isCoordinatorMode())return trr(s,i);return s}function K2t(o,e){let t=o.length===1?o[0]:void 0;if(t&&cPs(e,t))return[];return o}
export{q4r,bvn,Y4r,trr,V2t,K2t};
