// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{En}from"./chunk-4yezmbpn.js";var _="Claude Preview",c="Claude Browser",E=En(_),l=En(c),u=new Set([E,l]);function WUe(e){return u.has(En(e))}var FCt=["file_upload"],anr="anthropic/hostAsksPerUploadedFile",d=new Set(["description","activeForm"]);function lnr(e,o,n,i){let t=`mcp__${En(e)}__${o}`;return{async checkPermissions(){return{behavior:"ask",message:`${e} requires permission.`,suggestions:[{type:"addRules",rules:[{toolName:t,ruleContent:void 0}],behavior:"allow",destination:"session"}],metadata:{command:{name:t,chrome:{hostHandlesOriginConsent:!0}}}}},...n!==void 0&&Object.hasOwn(n,"code")&&{toAutoClassifierInput(r){let a=Object.keys(r).filter((s)=>!d.has(s));return i(Object.fromEntries(a.map((s)=>[s,r[s]])),o)}}}}
export{WUe,FCt,anr,lnr};
