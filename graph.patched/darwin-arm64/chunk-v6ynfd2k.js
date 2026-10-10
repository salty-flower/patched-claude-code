// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Jt}from"./chunk-nfna65jh.js";import{D0t,n2n,Adt}from"./chunk-c0aaqg7t.js";import{Lxe}from"./chunk-3cynezh1.js";import{a}from"./chunk-yvnhkg35.js";import{Cte}from"./chunk-k4j9t0m5.js";import{iqr}from"./chunk-8zxshpt7.js";import{wsr}from"./chunk-sfn1dbxq.js";import{In}from"./chunk-4xj6t50t.js";var zBr=["Docs"],m=new Set(["claudedocs","claudepages"]);function IYn(e){return e.tier==="core"&&zBr.some((o)=>Cte(e.title)===Cte(o))}var cGo="The Docs type is filled only through the first-party Claude Docs connector, which is not attached in this session: for a document, make a page instead of starting from that type.";function fBt(e){return e.config.type==="claudeai-proxy"&&Lxe(e.config)&&wsr(e.config)||iqr()&&e.config.type==="sdk"&&Jt(e.name)!==null&&m.has(Adt(e.serverInfo?.name??""))||a.CLAUDE_CODE_REMOTE===!0&&e.config.type==="http"&&e.config.scope==="dynamic"&&(n2n(e.config)||D0t.has(e.name))}function OYn(e){return e.some((o)=>(o.type==="connected"||o.type==="pending"||o.type==="cached")&&fBt(o))}var u="Claude Preview",p="Claude Browser",d=In(u),C=In(p),f=new Set([d,C]);function O2e(e){return f.has(In(e))}var E=new Set(["description","activeForm"]);function Hgn(e,o,t,i){let r=`mcp__${In(e)}__${o}`;return{async checkPermissions(){return{behavior:"ask",message:`${e} requires permission.`,suggestions:[{type:"addRules",rules:[{toolName:r,ruleContent:void 0}],behavior:"allow",destination:"session"}],metadata:{command:{name:r,chrome:{hostHandlesOriginConsent:!0}}}}},...t!==void 0&&Object.hasOwn(t,"code")&&{toAutoClassifierInput(s){let c=Object.keys(s).filter((n)=>!E.has(n));return i(Object.fromEntries(c.map((n)=>[n,s[n]])),o)}}}}
export{zBr,IYn,cGo,fBt,OYn,O2e,Hgn};
