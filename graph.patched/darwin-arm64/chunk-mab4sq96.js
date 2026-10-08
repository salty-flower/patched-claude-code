// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Xt}from"./chunk-drh3s4e9.js";import{pxt,RNn,zit}from"./chunk-630hazsp.js";import{lTe}from"./chunk-5g70wphz.js";import{a}from"./chunk-70qqbqq4.js";import{RZ}from"./chunk-ent8ek8t.js";import{jjr}from"./chunk-ha3kvhcw.js";import{IZn}from"./chunk-nwqfvmza.js";import{Pn}from"./chunk-d590xdyd.js";var IDr=["Docs"],m=new Set(["claudedocs","claudepages"]);function Cqn(e){return e.tier==="core"&&IDr.some((o)=>RZ(e.title)===RZ(o))}var YLo="The Docs type is filled only through the first-party Claude Docs connector, which is not attached in this session: for a document, make a page instead of starting from that type.";function CNt(e){return e.config.type==="claudeai-proxy"&&lTe(e.config)&&IZn(e.config)||jjr()&&e.config.type==="sdk"&&Xt(e.name)!==null&&m.has(zit(e.serverInfo?.name??""))||a.CLAUDE_CODE_REMOTE===!0&&e.config.type==="http"&&e.config.scope==="dynamic"&&(RNn(e.config)||pxt.has(e.name))}function Aqn(e){return e.some((o)=>(o.type==="connected"||o.type==="pending"||o.type==="cached")&&CNt(o))}var u="Claude Preview",p="Claude Browser",d=Pn(u),C=Pn(p),f=new Set([d,C]);function HUe(e){return f.has(Pn(e))}var E=new Set(["description","activeForm"]);function Lcn(e,o,t,i){let r=`mcp__${Pn(e)}__${o}`;return{async checkPermissions(){return{behavior:"ask",message:`${e} requires permission.`,suggestions:[{type:"addRules",rules:[{toolName:r,ruleContent:void 0}],behavior:"allow",destination:"session"}],metadata:{command:{name:r,chrome:{hostHandlesOriginConsent:!0}}}}},...t!==void 0&&Object.hasOwn(t,"code")&&{toAutoClassifierInput(s){let c=Object.keys(s).filter((n)=>!E.has(n));return i(Object.fromEntries(c.map((n)=>[n,s[n]])),o)}}}}
export{IDr,Cqn,YLo,CNt,Aqn,HUe,Lcn};
