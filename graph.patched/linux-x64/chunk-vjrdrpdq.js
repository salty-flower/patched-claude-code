// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Xu}from"./chunk-wdbbywcf.js";import{Yy}from"./chunk-hfpf4cs3.js";import{a}from"./chunk-rptge3r8.js";import{Dt,ele,YS}from"./chunk-vecj8twx.js";import{$e}from"./chunk-hesrqedr.js";import{za}from"./chunk-5zqw5ss6.js";import{If}from"./chunk-fs1m5djd.js";import{Fos}from"./chunk-tkepzc5h.js";import{rXe}from"./chunk-yk41gxr5.js";import{vCn,Mb,YQr,Ues,LKt}from"./chunk-nq8z0wsm.js";import{SCn,xvt}from"./chunk-gk0wbd41.js";import{z2n}from"./chunk-h8et53c1.js";import{eC}from"./chunk-gef68xj8.js";import{cK}from"./chunk-cpxwxt65.js";import{ns,Zc}from"./chunk-zk0yxkwh.js";var p=new Set([If,Yy]);function JOr(o,e){if(e.length===0)return o;let t=e.map((r)=>[r,ns(r)]),n=o.filter((r)=>!t.some(([m,i])=>Zc(r,m,i)));return n.length===o.length?o:n}function c(o){return o.mcpInfo?.cliOwned===!0&&o.mcpInfo.serverName===Xu}var l=((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-g5k2mt8p.js");function kan(){return(process.env.CLAUDE_CODE_COORDINATOR_EXTRA_TOOLS??"").split(",").map((o)=>o.trim()).filter(Boolean)}function QOr(o,e=kan()){if(SCn(o)||YQr.includes(o.name))return!0;let t=ns(o.name);return e.some((n)=>n.startsWith(t))}function HEs(o){let e=a.CLAUDE_CODE_BRIEF,t=new Set(kan()),n=LKt();return o.filter((r)=>vCn.has(r.name)||n&&Dt(r,$e)&&!Mb(r)||Ues(r.name)||c(r)||xvt(r)||e&&p.has(r.name)||YS(r,t))}function $0t(o,e,t,n){let[r,m]=eC(z2n(za(rXe([...o,...e]),"name"),n),(s)=>Mb(s)||cK(s)),i=[...m.sort(ele),...r.sort(ele)];if(l.isCoordinatorMode())return HEs(i);return i}function F0t(o,e){let t=o.length===1?o[0]:void 0;if(t&&Fos(e,t))return[];return o}
export{JOr,kan,QOr,HEs,$0t,F0t};
