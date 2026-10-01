// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{Jt}from"./chunk-ypa64mmn.js";import{vmt,Dhn,L9n}from"./chunk-fmk5eq99.js";import{VYe}from"./chunk-zpb414p7.js";import{a}from"./chunk-1fpwxv0g.js";import{sY}from"./chunk-9w0zazch.js";import{Xhr}from"./chunk-nsh961t5.js";import{NLn}from"./chunk-59zy4j10.js";import{wn}from"./chunk-ema6t5de.js";var jhr=["Docs"],n=new Set(["claudedocs","claudepages"]);function _Hn(e){return e.tier==="core"&&jhr.some((o)=>sY(e.title)===sY(o))}var Suo="The Docs type is filled only through the first-party Claude Docs connector, which is not attached in this session: for a document, make a page instead of starting from that type.";function DTt(e){return e.config.type==="claudeai-proxy"&&VYe(e.config)&&NLn(e.config)||Xhr()&&e.config.type==="sdk"&&Jt(e.name)!==null&&n.has(L9n(e.serverInfo?.name??""))||a.CLAUDE_CODE_REMOTE===!0&&e.config.type==="http"&&e.config.scope==="dynamic"&&(Dhn(e.config)||vmt.has(e.name))}function SHn(e){return e.some((o)=>(o.type==="connected"||o.type==="pending"||o.type==="cached")&&DTt(o))}var r="Claude Preview",s="Claude Browser",i=wn(r),c=wn(s),m=new Set([i,c]);function SOe(e){return m.has(wn(e))}function jXt(e,o){let t=`mcp__${wn(e)}__${o}`;return{async checkPermissions(){return{behavior:"ask",message:`${e} requires permission.`,suggestions:[{type:"addRules",rules:[{toolName:t,ruleContent:void 0}],behavior:"allow",destination:"session"}],metadata:{command:{name:t,chrome:{hostHandlesOriginConsent:!0}}}}}}}
export{jhr,_Hn,Suo,DTt,SHn,SOe,jXt};
