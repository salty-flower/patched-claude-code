// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{Vt}from"./chunk-9sbknd2z.js";import{YVt,hsr,GRe}from"./chunk-hdf6qbgr.js";import{Cpe}from"./chunk-cemwep0x.js";import{i}from"./chunk-9a41hw1t.js";import{Zae}from"./chunk-561n43et.js";import{gbo}from"./chunk-bkr0w26r.js";import{Lxr}from"./chunk-31gxg38t.js";var qSo=["Docs"],t=new Set(["claudedocs","claudepages"]);function rTr(o){return o.tier==="core"&&qSo.some((e)=>Zae(o.title)===Zae(e))}var MRs="The Docs type is filled only through the first-party Claude Docs connector, which is not attached in this session: for a document, make a page instead of starting from that type.";function rtn(o){return o.config.type==="claudeai-proxy"&&Cpe(o.config)&&Lxr(o.config)||gbo()&&o.config.type==="sdk"&&Vt(o.name)!==null&&t.has(GRe(o.serverInfo?.name??""))||i.CLAUDE_CODE_REMOTE===!0&&o.config.type==="http"&&o.config.scope==="dynamic"&&(hsr(o.config)||YVt.has(o.name))}function oTr(o){return o.some((e)=>(e.type==="connected"||e.type==="pending"||e.type==="cached")&&rtn(e))}
export{qSo,rTr,MRs,rtn,oTr};
