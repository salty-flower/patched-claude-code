// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{BCb as H,CCb as M,ICb as b,JCb as w,xCb as k}from"./_558.js";import{e5b as m,g5b as I}from"./_635.js";import{pFc as l,uGc as S}from"./_701.js";import{mgd as p,xgd as v}from"./_810.js";import{Epd as c,jqd as f,krd as P}from"./_812.js";import{$vd as g,rwd as y}from"./_835.js";import{Exd as s}from"./_839.js";function x(){let o=l("policySettings")?.enabledPlugins;if(!o)return null;let e=new Set;for(let[n,r]of Object.entries(o)){if(typeof r!=="boolean"||!n.includes("@"))continue;let i=g(n,"@");if(i)e.add(i)}return e.size>0?e:null}function u(){let o=l("policySettings")?.enabledPlugins;if(!o)return null;let e=new Set;for(let[n,r]of Object.entries(o))if(r===!0&&n.includes("@"))e.add(n);return e.size>0?e:null}var d=s(()=>{S();y()});function a(o){if(m("hooks"))return[];let e=c()?.[o]??[];if(M())return e.filter((t)=>!("pluginRoot"in t)&&!("deviceOwner"in t));let n=k(),r=n&&!p()?u():null,i=H();return[...b()?.[o]??[],...n?[]:f()?.[o]??[],...e.filter((t)=>!(n&&("pluginRoot"in t)&&!r?.has(t.pluginId))&&!(i&&("deviceOwner"in t)))]}var h=s(()=>{P();I();v();d();w()});function N(){return a("WorktreeCreate").length>0}function q(){return a("WorktreeRemove").length>0}var C=s(()=>{h()});
export{x as lnb,u as mnb,d as nnb,a as onb,h as pnb,N as qnb,q as rnb,C as snb};
