// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{rn}from"./chunk-w9w461gr.js";import{qon,SBn,wBn}from"./chunk-twxt3h9y.js";import{o4e}from"./chunk-ekshy3qa.js";import{a}from"./chunk-3a4khaz5.js";import{JK}from"./chunk-06rs36sj.js";import{jQn}from"./chunk-1gve6985.js";import{PRn}from"./chunk-h3bc7dkc.js";import{wn}from"./chunk-qg0je430.js";var lJn=["Docs"],t=new Set(["claudedocs","claudepages"]);function G_n(e){return e.tier==="core"&&lJn.some((o)=>JK(e.title)===JK(o))}var aqr="The Docs type is filled only through the first-party Claude Docs connector, which is not attached in this session: for a document, make a page instead of starting from that type.";function ryt(e){return e.config.type==="claudeai-proxy"&&o4e(e.config)&&PRn(e.config)||jQn()&&e.config.type==="sdk"&&rn(e.name)!==null&&t.has(wBn(e.serverInfo?.name??""))||a.CLAUDE_CODE_REMOTE===!0&&e.config.type==="http"&&e.config.scope==="dynamic"&&(SBn(e.config)||qon.has(e.name))}function z_n(e){return e.some((o)=>(o.type==="connected"||o.type==="pending")&&ryt(o))}var r="Claude Preview",s="Claude Browser",i=wn(r),c=wn(s),m=new Set([i,c]);function GRe(e){return m.has(wn(e))}function a6t(e,o){let n=`mcp__${wn(e)}__${o}`;return{async checkPermissions(){return{behavior:"ask",message:`${e} requires permission.`,suggestions:[{type:"addRules",rules:[{toolName:n,ruleContent:void 0}],behavior:"allow",destination:"session"}],metadata:{command:{name:n,chrome:{hostHandlesOriginConsent:!0}}}}}}}
export{lJn,G_n,aqr,ryt,z_n,GRe,a6t};
