// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Ln}from"./chunk-grskjf89.js";var _="Claude Preview",c="Claude Browser",E=Ln(_),l=Ln(c),u=new Set([E,l]);function jen(e){return u.has(Ln(e))}var Nwr=["file_upload"],l2i="anthropic/hostAsksPerUploadedFile",d=new Set(["description","activeForm"]);function d2i(e,o,n,i){let t=`mcp__${Ln(e)}__${o}`;return{async checkPermissions(){return{behavior:"ask",message:`${e} requires permission.`,suggestions:[{type:"addRules",rules:[{toolName:t,ruleContent:void 0}],behavior:"allow",destination:"session"}],metadata:{command:{name:t,chrome:{hostHandlesOriginConsent:!0}}}}},...n!==void 0&&Object.hasOwn(n,"code")&&{toAutoClassifierInput(r){let a=Object.keys(r).filter((s)=>!d.has(s));return i(Object.fromEntries(a.map((s)=>[s,r[s]])),o)}}}}
export{jen,Nwr,l2i,d2i};
