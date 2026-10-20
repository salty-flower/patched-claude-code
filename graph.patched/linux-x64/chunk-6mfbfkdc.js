// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Vt}from"./chunk-grpzqw3p.js";import{djt,ZXn,Abt}from"./chunk-65jn763j.js";import{MDe}from"./chunk-m7gr14b0.js";import{a}from"./chunk-cd1a8ced.js";import{kse}from"./chunk-vsjk601x.js";import{Tlo}from"./chunk-mq9q6ahw.js";import{Abr}from"./chunk-rncrmfyt.js";import{Bn}from"./chunk-pkf28rpz.js";var slo=["Docs"],m=new Set(["claudedocs","claudepages"]);function qgr(e){return e.tier==="core"&&slo.some((o)=>kse(e.title)===kse(o))}var oms="The Docs type is filled only through the first-party Claude Docs connector, which is not attached in this session: for a document, make a page instead of starting from that type.";function c9t(e){return e.config.type==="claudeai-proxy"&&MDe(e.config)&&Abr(e.config)||Tlo()&&e.config.type==="sdk"&&Vt(e.name)!==null&&m.has(Abt(e.serverInfo?.name??""))||a.CLAUDE_CODE_REMOTE===!0&&e.config.type==="http"&&e.config.scope==="dynamic"&&(ZXn(e.config)||djt.has(e.name))}function Ygr(e){return e.some((o)=>(o.type==="connected"||o.type==="pending"||o.type==="cached")&&c9t(o))}var u="Claude Preview",p="Claude Browser",d=Bn(u),C=Bn(p),f=new Set([d,C]);function OYe(e){return f.has(Bn(e))}var E=new Set(["description","activeForm"]);function AHn(e,o,t,i){let r=`mcp__${Bn(e)}__${o}`;return{async checkPermissions(){return{behavior:"ask",message:`${e} requires permission.`,suggestions:[{type:"addRules",rules:[{toolName:r,ruleContent:void 0}],behavior:"allow",destination:"session"}],metadata:{command:{name:r,chrome:{hostHandlesOriginConsent:!0}}}}},...t!==void 0&&Object.hasOwn(t,"code")&&{toAutoClassifierInput(s){let c=Object.keys(s).filter((n)=>!E.has(n));return i(Object.fromEntries(c.map((n)=>[n,s[n]])),o)}}}}
export{slo,qgr,oms,c9t,Ygr,OYe,AHn};
