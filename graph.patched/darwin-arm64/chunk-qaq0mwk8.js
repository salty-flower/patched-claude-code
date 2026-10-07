// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{Jt}from"./chunk-12mdvf4x.js";import{zkt,d0n,xrt}from"./chunk-6pm26t04.js";import{sot}from"./chunk-nqb0d8cm.js";import{a}from"./chunk-j77txbjn.js";import{sQ}from"./chunk-kjrk4vtn.js";import{lLr}from"./chunk-cqszyzxj.js";import{v8n}from"./chunk-y0b3kvx1.js";import{Tn}from"./chunk-c9cd6k8r.js";var oxr=["Docs"],m=new Set(["claudedocs","claudepages"]);function P2n(e){return e.tier==="core"&&oxr.some((o)=>sQ(e.title)===sQ(o))}var axo="The Docs type is filled only through the first-party Claude Docs connector, which is not attached in this session: for a document, make a page instead of starting from that type.";function HHt(e){return e.config.type==="claudeai-proxy"&&sot(e.config)&&v8n(e.config)||lLr()&&e.config.type==="sdk"&&Jt(e.name)!==null&&m.has(xrt(e.serverInfo?.name??""))||a.CLAUDE_CODE_REMOTE===!0&&e.config.type==="http"&&e.config.scope==="dynamic"&&(d0n(e.config)||zkt.has(e.name))}function I2n(e){return e.some((o)=>(o.type==="connected"||o.type==="pending"||o.type==="cached")&&HHt(o))}var u="Claude Preview",p="Claude Browser",d=Tn(u),C=Tn(p),f=new Set([d,C]);function p$e(e){return f.has(Tn(e))}var E=new Set(["description","activeForm"]);function lsn(e,o,t,i){let r=`mcp__${Tn(e)}__${o}`;return{async checkPermissions(){return{behavior:"ask",message:`${e} requires permission.`,suggestions:[{type:"addRules",rules:[{toolName:r,ruleContent:void 0}],behavior:"allow",destination:"session"}],metadata:{command:{name:r,chrome:{hostHandlesOriginConsent:!0}}}}},...t!==void 0&&Object.hasOwn(t,"code")&&{toAutoClassifierInput(s){let c=Object.keys(s).filter((n)=>!E.has(n));return i(Object.fromEntries(c.map((n)=>[n,s[n]])),o)}}}}
export{oxr,P2n,axo,HHt,I2n,p$e,lsn};
