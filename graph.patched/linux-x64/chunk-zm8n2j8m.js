// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{Jt}from"./chunk-b7wdy41p.js";import{HTt,qOn,Srt}from"./chunk-jnystawq.js";import{sot}from"./chunk-p72qafcy.js";import{a}from"./chunk-869zfth6.js";import{JQ}from"./chunk-qjq8ax1c.js";import{A0r}from"./chunk-sdzg74pc.js";import{n8n}from"./chunk-9wqh5j7s.js";import{Cn}from"./chunk-zqyfcgvx.js";var PRr=["Docs"],m=new Set(["claudedocs","claudepages"]);function cWn(e){return e.tier==="core"&&PRr.some((o)=>JQ(e.title)===JQ(o))}var ERo="The Docs type is filled only through the first-party Claude Docs connector, which is not attached in this session: for a document, make a page instead of starting from that type.";function bHt(e){return e.config.type==="claudeai-proxy"&&sot(e.config)&&n8n(e.config)||A0r()&&e.config.type==="sdk"&&Jt(e.name)!==null&&m.has(Srt(e.serverInfo?.name??""))||a.CLAUDE_CODE_REMOTE===!0&&e.config.type==="http"&&e.config.scope==="dynamic"&&(qOn(e.config)||HTt.has(e.name))}function dWn(e){return e.some((o)=>(o.type==="connected"||o.type==="pending"||o.type==="cached")&&bHt(o))}var u="Claude Preview",p="Claude Browser",d=Cn(u),C=Cn(p),f=new Set([d,C]);function oFe(e){return f.has(Cn(e))}var E=new Set(["description","activeForm"]);function Won(e,o,t,i){let r=`mcp__${Cn(e)}__${o}`;return{async checkPermissions(){return{behavior:"ask",message:`${e} requires permission.`,suggestions:[{type:"addRules",rules:[{toolName:r,ruleContent:void 0}],behavior:"allow",destination:"session"}],metadata:{command:{name:r,chrome:{hostHandlesOriginConsent:!0}}}}},...t!==void 0&&Object.hasOwn(t,"code")&&{toAutoClassifierInput(s){let c=Object.keys(s).filter((n)=>!E.has(n));return i(Object.fromEntries(c.map((n)=>[n,s[n]])),o)}}}}
export{PRr,cWn,ERo,bHt,dWn,oFe,Won};
