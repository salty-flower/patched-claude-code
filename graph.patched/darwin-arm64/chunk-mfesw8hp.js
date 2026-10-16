// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Kt}from"./chunk-bkygtq8f.js";import{pUt,n5n,qht}from"./chunk-718k5xe7.js";import{X0e}from"./chunk-d9vq4daa.js";import{a}from"./chunk-k4g6y57j.js";import{woe}from"./chunk-0s456jge.js";import{Peo}from"./chunk-kf9da6y4.js";import{Ahr}from"./chunk-996thspe.js";import{Cn}from"./chunk-ey98m06z.js";var j9r=["Docs"],m=new Set(["claudedocs","claudepages"]);function Esr(e){return e.tier==="core"&&j9r.some((o)=>woe(e.title)===woe(o))}var MQo="The Docs type is filled only through the first-party Claude Docs connector, which is not attached in this session: for a document, make a page instead of starting from that type.";function WVt(e){return e.config.type==="claudeai-proxy"&&X0e(e.config)&&Ahr(e.config)||Peo()&&e.config.type==="sdk"&&Kt(e.name)!==null&&m.has(qht(e.serverInfo?.name??""))||a.CLAUDE_CODE_REMOTE===!0&&e.config.type==="http"&&e.config.scope==="dynamic"&&(n5n(e.config)||pUt.has(e.name))}function vsr(e){return e.some((o)=>(o.type==="connected"||o.type==="pending"||o.type==="cached")&&WVt(o))}var u="Claude Preview",p="Claude Browser",d=Cn(u),C=Cn(p),f=new Set([d,C]);function dVe(e){return f.has(Cn(e))}var E=new Set(["description","activeForm"]);function Kkn(e,o,t,i){let r=`mcp__${Cn(e)}__${o}`;return{async checkPermissions(){return{behavior:"ask",message:`${e} requires permission.`,suggestions:[{type:"addRules",rules:[{toolName:r,ruleContent:void 0}],behavior:"allow",destination:"session"}],metadata:{command:{name:r,chrome:{hostHandlesOriginConsent:!0}}}}},...t!==void 0&&Object.hasOwn(t,"code")&&{toAutoClassifierInput(s){let c=Object.keys(s).filter((n)=>!E.has(n));return i(Object.fromEntries(c.map((n)=>[n,s[n]])),o)}}}}
export{j9r,Esr,MQo,WVt,vsr,dVe,Kkn};
