// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{oht}from"./chunk-j3as1d0t.js";import{zL,xie}from"./chunk-txfrkyzp.js";import{dt}from"./chunk-ch29rnqb.js";import{Er}from"./chunk-k4wnp212.js";import{Br}from"./chunk-2h50aq1w.js";import{Hm,xKn,yb,J7}from"./chunk-rch5enmq.js";import{Lh}from"./chunk-gvnjrkx9.js";var A_=(o,t,n)=>(n??dt().loadedModules).some((r)=>r.hooks(o)&&(t===void 0||Object.entries(t).every(([s,e])=>oht(r.matcherFor(o),s,e))));function Owe(o){if(Br("hooks"))return[];let t=zL()?.[o]??[];if(yb())return t.filter((e)=>!("pluginRoot"in e)&&!("deviceOwner"in e));let n=Hm(),r=n&&!Er()?Lh():null,s=xKn();return[...J7()?.[o]??[],...n?[]:xie()?.[o]??[],...t.filter((e)=>!(n&&("pluginRoot"in e)&&!r?.has(e.pluginId))&&!(s&&("deviceOwner"in e)))]}function b2n(){return!Br("hooks")&&!yb()&&!Er()}var wde=(o)=>o.link!==void 0;export{A_,Owe,b2n,wde};
