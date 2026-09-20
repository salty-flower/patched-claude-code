// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{_ht}from"./chunk-qma0s5eg.js";import{eN,Mie}from"./chunk-sgamszzq.js";import{dt}from"./chunk-enzwewwd.js";import{vr}from"./chunk-jxdnn2j1.js";import{Br}from"./chunk-pt9thc2d.js";import{Om,n4n,SS,rQ}from"./chunk-rdygj5c6.js";import{Nh}from"./chunk-4yxzpjjz.js";var T_=(o,t,n)=>(n??dt().loadedModules).some((r)=>r.hooks(o)&&(t===void 0||Object.entries(t).every(([s,e])=>_ht(r.matcherFor(o),s,e))));function Bwe(o){if(Br("hooks"))return[];let t=eN()?.[o]??[];if(SS())return t.filter((e)=>!("pluginRoot"in e)&&!("deviceOwner"in e));let n=Om(),r=n&&!vr()?Nh():null,s=n4n();return[...rQ()?.[o]??[],...n?[]:Mie()?.[o]??[],...t.filter((e)=>!(n&&("pluginRoot"in e)&&!r?.has(e.pluginId))&&!(s&&("deviceOwner"in e)))]}function Vjn(){return!Br("hooks")&&!SS()&&!vr()}var Rde=(o)=>o.link!==void 0;export{T_,Bwe,Vjn,Rde};
