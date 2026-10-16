// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{qt}from"./chunk-bfqfmbd0.js";import{tUt,$6n,$ht}from"./chunk-zkbf0zdp.js";import{WMe}from"./chunk-9155m2kg.js";import{a}from"./chunk-xwn0mfnc.js";import{moe}from"./chunk-p4wp85q4.js";import{BZr}from"./chunk-f69sfgjy.js";import{shr}from"./chunk-38nf1dnm.js";import{Tn}from"./chunk-j025vf7m.js";var d3r=["Docs"],m=new Set(["claudedocs","claudepages"]);function Jor(e){return e.tier==="core"&&d3r.some((o)=>moe(e.title)===moe(o))}var qQo="The Docs type is filled only through the first-party Claude Docs connector, which is not attached in this session: for a document, make a page instead of starting from that type.";function AKt(e){return e.config.type==="claudeai-proxy"&&WMe(e.config)&&shr(e.config)||BZr()&&e.config.type==="sdk"&&qt(e.name)!==null&&m.has($ht(e.serverInfo?.name??""))||a.CLAUDE_CODE_REMOTE===!0&&e.config.type==="http"&&e.config.scope==="dynamic"&&($6n(e.config)||tUt.has(e.name))}function Qor(e){return e.some((o)=>(o.type==="connected"||o.type==="pending"||o.type==="cached")&&AKt(o))}var u="Claude Preview",p="Claude Browser",d=Tn(u),C=Tn(p),f=new Set([d,C]);function tKe(e){return f.has(Tn(e))}var E=new Set(["description","activeForm"]);function Tkn(e,o,t,i){let r=`mcp__${Tn(e)}__${o}`;return{async checkPermissions(){return{behavior:"ask",message:`${e} requires permission.`,suggestions:[{type:"addRules",rules:[{toolName:r,ruleContent:void 0}],behavior:"allow",destination:"session"}],metadata:{command:{name:r,chrome:{hostHandlesOriginConsent:!0}}}}},...t!==void 0&&Object.hasOwn(t,"code")&&{toAutoClassifierInput(s){let c=Object.keys(s).filter((n)=>!E.has(n));return i(Object.fromEntries(c.map((n)=>[n,s[n]])),o)}}}}
export{d3r,Jor,qQo,AKt,Qor,tKe,Tkn};
