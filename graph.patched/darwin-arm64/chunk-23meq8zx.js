// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{ce}from"./chunk-bk5ct2gw.js";import{cn}from"./chunk-wtch2p0g.js";import{fe}from"./chunk-x0dc37w9.js";import{QC,f3}from"./chunk-g135h42d.js";function i(){return c(f3(ce().env,"globalConfig"),cn("userSettings")?f3(fe("userSettings")?.env,"userSettings"):{},f3(fe("flagSettings")?.env,"flagSettings"),f3(fe("policySettings")?.env,"policySettings"))}function mCt(){return g(QC(),i())}function g(s,r){let n=new Set(Object.keys(r).map((e)=>e.toUpperCase())),t={...s};for(let e of Object.keys(t))if(!(e in r)&&n.has(e.toUpperCase()))delete t[e];return Object.assign(t,r)}function c(...s){let r=new Map;for(let t of s)for(let[e,o]of Object.entries(t))r.set(e.toUpperCase(),{key:e,value:o});let n={};for(let{key:t,value:e}of r.values())n[t]=e;return n}
export{mCt};
