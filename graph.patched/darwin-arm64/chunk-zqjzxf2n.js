// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Kt}from"./chunk-esv3b1gm.js";import{bjt,y7n,DSt}from"./chunk-gn7avpe5.js";import{UHe}from"./chunk-q6vwcyd6.js";import{a}from"./chunk-h422gpw8.js";import{Ise}from"./chunk-y9cs70gm.js";import{edo}from"./chunk-kvs7sxbp.js";import{KSr}from"./chunk-na9nw575.js";import{Bn}from"./chunk-n1e7ys8w.js";var Blo=["Docs"],m=new Set(["claudedocs","claudepages"]);function Chr(e){return e.tier==="core"&&Blo.some((o)=>Ise(e.title)===Ise(o))}var Yms="The Docs type is filled only through the first-party Claude Docs connector, which is not attached in this session: for a document, make a page instead of starting from that type.";function $Yt(e){return e.config.type==="claudeai-proxy"&&UHe(e.config)&&KSr(e.config)||edo()&&e.config.type==="sdk"&&Kt(e.name)!==null&&m.has(DSt(e.serverInfo?.name??""))||a.CLAUDE_CODE_REMOTE===!0&&e.config.type==="http"&&e.config.scope==="dynamic"&&(y7n(e.config)||bjt.has(e.name))}function Thr(e){return e.some((o)=>(o.type==="connected"||o.type==="pending"||o.type==="cached")&&$Yt(o))}var u="Claude Preview",p="Claude Browser",d=Bn(u),C=Bn(p),f=new Set([d,C]);function W3e(e){return f.has(Bn(e))}var E=new Set(["description","activeForm"]);function Q0n(e,o,t,i){let r=`mcp__${Bn(e)}__${o}`;return{async checkPermissions(){return{behavior:"ask",message:`${e} requires permission.`,suggestions:[{type:"addRules",rules:[{toolName:r,ruleContent:void 0}],behavior:"allow",destination:"session"}],metadata:{command:{name:r,chrome:{hostHandlesOriginConsent:!0}}}}},...t!==void 0&&Object.hasOwn(t,"code")&&{toAutoClassifierInput(s){let c=Object.keys(s).filter((n)=>!E.has(n));return i(Object.fromEntries(c.map((n)=>[n,s[n]])),o)}}}}
export{Blo,Chr,Yms,$Yt,Thr,W3e,Q0n};
