// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Yu}from"./chunk-630hazsp.js";import{Xy}from"./chunk-9rdmsm2q.js";import{a}from"./chunk-70qqbqq4.js";import{Dt,ile,Xb}from"./chunk-q21zbtsq.js";import{Fe}from"./chunk-zp1a5mr6.js";import{za}from"./chunk-5g70wphz.js";import{If}from"./chunk-ccbm7724.js";import{vss}from"./chunk-p46e1dyj.js";import{dXe}from"./chunk-s28gnh55.js";import{UTn,MS,vQr,kts,Jqt}from"./chunk-j8hbva07.js";import{FTn,UEt}from"./chunk-yg6r01dh.js";import{rzn}from"./chunk-8khzfkzg.js";import{rT}from"./chunk-c4a5qdvy.js";import{yq}from"./chunk-svra5s1y.js";import{ns,ed}from"./chunk-4hk3eh7v.js";var p=new Set([If,Xy]);function y0r(o,e){if(e.length===0)return o;let t=e.map((r)=>[r,ns(r)]),n=o.filter((r)=>!t.some(([m,i])=>ed(r,m,i)));return n.length===o.length?o:n}function c(o){return o.mcpInfo?.cliOwned===!0&&o.mcpInfo.serverName===Yu}var l=((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-ccactat5.js");function Uan(){return(process.env.CLAUDE_CODE_COORDINATOR_EXTRA_TOOLS??"").split(",").map((o)=>o.trim()).filter(Boolean)}function _0r(o,e=Uan()){if(FTn(o)||vQr.includes(o.name))return!0;let t=ns(o.name);return e.some((n)=>n.startsWith(t))}function hks(o){let e=a.CLAUDE_CODE_BRIEF,t=new Set(Uan()),n=Jqt();return o.filter((r)=>UTn.has(r.name)||n&&Dt(r,Fe)&&!MS(r)||kts(r.name)||c(r)||UEt(r)||e&&p.has(r.name)||Xb(r,t))}function XDt(o,e,t,n){let[r,m]=rT(rzn(za(dXe([...o,...e]),"name"),n),(s)=>MS(s)||yq(s)),i=[...m.sort(ile),...r.sort(ile)];if(l.isCoordinatorMode())return hks(i);return i}function JDt(o,e){let t=o.length===1?o[0]:void 0;if(t&&vss(e,t))return[];return o}
export{y0r,Uan,_0r,hks,XDt,JDt};
