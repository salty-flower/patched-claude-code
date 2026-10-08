// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Xt}from"./chunk-28fj72x7.js";import{txt,dNn,Lit}from"./chunk-wdbbywcf.js";import{oCe}from"./chunk-5zqw5ss6.js";import{a}from"./chunk-rptge3r8.js";import{vZ}from"./chunk-rt7477ym.js";import{rjr}from"./chunk-4gqt9ywy.js";import{dZn}from"./chunk-g263vvvn.js";import{Pn}from"./chunk-699w2z4t.js";var ZDr=["Docs"],m=new Set(["claudedocs","claudepages"]);function eKn(e){return e.tier==="core"&&ZDr.some((o)=>vZ(e.title)===vZ(o))}var dLo="The Docs type is filled only through the first-party Claude Docs connector, which is not attached in this session: for a document, make a page instead of starting from that type.";function lNt(e){return e.config.type==="claudeai-proxy"&&oCe(e.config)&&dZn(e.config)||rjr()&&e.config.type==="sdk"&&Xt(e.name)!==null&&m.has(Lit(e.serverInfo?.name??""))||a.CLAUDE_CODE_REMOTE===!0&&e.config.type==="http"&&e.config.scope==="dynamic"&&(dNn(e.config)||txt.has(e.name))}function tKn(e){return e.some((o)=>(o.type==="connected"||o.type==="pending"||o.type==="cached")&&lNt(o))}var u="Claude Preview",p="Claude Browser",d=Pn(u),C=Pn(p),f=new Set([d,C]);function TBe(e){return f.has(Pn(e))}var E=new Set(["description","activeForm"]);function fcn(e,o,t,i){let r=`mcp__${Pn(e)}__${o}`;return{async checkPermissions(){return{behavior:"ask",message:`${e} requires permission.`,suggestions:[{type:"addRules",rules:[{toolName:r,ruleContent:void 0}],behavior:"allow",destination:"session"}],metadata:{command:{name:r,chrome:{hostHandlesOriginConsent:!0}}}}},...t!==void 0&&Object.hasOwn(t,"code")&&{toAutoClassifierInput(s){let c=Object.keys(s).filter((n)=>!E.has(n));return i(Object.fromEntries(c.map((n)=>[n,s[n]])),o)}}}}
export{ZDr,eKn,dLo,lNt,tKn,TBe,fcn};
