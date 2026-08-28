// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{phb as f,qhb as T}from"./_502.js";import{oBc as l,rBc as P}from"./_694.js";import{$ad as b,Zad as a}from"./_800.js";import{Jid as s,Thd as n,Uhd as p,krd as k}from"./_812.js";import{Bwd as d,twd as o}from"./_836.js";import{Exd as m}from"./_839.js";import{readFile as g}from"fs/promises";class u{firedSites=new Set;fire(e){if(this.firedSites.has(e))return;this.firedSites.add(e),a("tengu_dead_probe_adopt_ticks_token",{site:o(e)})}reset(){this.firedSites.clear()}}function _(){return S.of(s().host)}function h(e){_().fire(e)}async function v(e){return null}async function R(e,t,r){if(r!==void 0){if(await l(e,{skipCache:!0})!==r)return}else if(t!==void 0){if(h("kill_gate"),await v(e)!==t)return}else return;await f(e,"SIGTERM").catch(()=>{})}var S;var w=m(()=>{k();p();b();d();P();T();S=new n(()=>new u)});
export{h as aE,v as bE,R as cE,w as dE};
