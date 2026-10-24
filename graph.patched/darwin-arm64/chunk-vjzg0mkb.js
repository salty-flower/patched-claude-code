// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{d}from"./chunk-36ysyspx.js";import{t}from"./chunk-d7b0m8qy.js";import{xM}from"./chunk-z3m0wxsd.js";import{L$}from"./chunk-whs6jraw.js";import{M1e,gCs}from"./chunk-d7xy9enz.js";import{G2e}from"./chunk-ts7wf5b1.js";var NNn=async(n,r)=>{let o=r.toolState.get(L$);if(n==="consent")try{return await M1e(o,"agent_design_projects",r.credentials),{type:"text",value:`Design agent access granted for your Claude Design projects. Use /design revoke to undo.
${G2e}`}}catch(e){if(xM())return t(`/design consent failed in a cloud session: ${d(e)}`,{level:"error"}),{type:"text",value:"Couldn't record Design agent access for your Claude Design projects from this cloud session. Try again, or grant it at claude.ai/design/settings and then retry your Design request."};return{type:"text",value:`Couldn't record Design agent access for ${"your Claude Design projects"} \u2014 ${d(e)}. Try again, or run /design-login to authorize Claude Design for this account.`}}try{return await gCs(o,"agent_design_projects",r.credentials),{type:"text",value:"Design agent access revoked for your Claude Design projects."}}catch(e){if(xM())return t(`/design revoke failed in a cloud session: ${d(e)}`,{level:"error"}),{type:"text",value:"Couldn't revoke Design agent access for your Claude Design projects from this cloud session. Try again, or revoke it at claude.ai/design/settings."};return{type:"text",value:`Couldn't revoke Design agent access for ${"your Claude Design projects"} \u2014 ${d(e)}. Try again, or run /design-login to authorize Claude Design for this account.`}}};
export{NNn};
