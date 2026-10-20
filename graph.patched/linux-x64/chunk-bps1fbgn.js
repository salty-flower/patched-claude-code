// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{d}from"./chunk-ekgz6skk.js";import{t}from"./chunk-n5v91jc3.js";import{FW}from"./chunk-4qs43hr1.js";import{i$}from"./chunk-bby2psmd.js";import{XNe,Vcs}from"./chunk-xqemmb4z.js";import{m1e}from"./chunk-txe4w4xs.js";var XPn=async(n,r)=>{let o=r.toolState.get(i$);if(n==="consent")try{return await XNe(o,"agent_design_projects",r.credentials),{type:"text",value:`Design agent access granted for your Claude Design projects. Use /design revoke to undo.
${m1e}`}}catch(e){if(FW())return t(`/design consent failed in a cloud session: ${d(e)}`,{level:"error"}),{type:"text",value:"Couldn't record Design agent access for your Claude Design projects from this cloud session. Try again, or grant it at claude.ai/design/settings and then retry your Design request."};return{type:"text",value:`Couldn't record Design agent access for ${"your Claude Design projects"} \u2014 ${d(e)}. Try again, or run /design-login to authorize Claude Design for this account.`}}try{return await Vcs(o,"agent_design_projects",r.credentials),{type:"text",value:"Design agent access revoked for your Claude Design projects."}}catch(e){if(FW())return t(`/design revoke failed in a cloud session: ${d(e)}`,{level:"error"}),{type:"text",value:"Couldn't revoke Design agent access for your Claude Design projects from this cloud session. Try again, or revoke it at claude.ai/design/settings."};return{type:"text",value:`Couldn't revoke Design agent access for ${"your Claude Design projects"} \u2014 ${d(e)}. Try again, or run /design-login to authorize Claude Design for this account.`}}};
export{XPn};
