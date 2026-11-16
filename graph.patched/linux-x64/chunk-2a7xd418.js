// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Dn}from"./chunk-qjkp4v7q.js";var _="Claude Preview",c="Claude Browser",E=Dn(_),l=Dn(c),u=new Set([E,l]);function Nen(e){return u.has(Dn(e))}var evr=["file_upload"],rji="anthropic/hostAsksPerUploadedFile",d=new Set(["description","activeForm"]);function oji(e,o,n,i){let t=`mcp__${Dn(e)}__${o}`;return{async checkPermissions(){return{behavior:"ask",message:`${e} requires permission.`,suggestions:[{type:"addRules",rules:[{toolName:t,ruleContent:void 0}],behavior:"allow",destination:"session"}],metadata:{command:{name:t,chrome:{hostHandlesOriginConsent:!0}}}}},...n!==void 0&&Object.hasOwn(n,"code")&&{toAutoClassifierInput(r){let a=Object.keys(r).filter((s)=>!d.has(s));return i(Object.fromEntries(a.map((s)=>[s,r[s]])),o)}}}}
export{Nen,evr,rji,oji};
