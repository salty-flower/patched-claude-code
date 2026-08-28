// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{K,z}from"./chunk-2vv5hpw3.js";import{s}from"./chunk-cvykgfry.js";import{c}from"./chunk-gt4btdxr.js";import{Ka}from"./chunk-0nb3y211.js";import{Yw}from"./chunk-rt99wbba.js";import{readFile as a}from"fs/promises";class o{firedSites=new Set;fire(e){if(this.firedSites.has(e))return;this.firedSites.add(e),s("tengu_dead_probe_adopt_ticks_token",{site:c(e)})}reset(){this.firedSites.clear()}}var l=new K(()=>new o);function f(){return l.of(z().host)}function V6t(e){f().fire(e)}async function Mke(e){try{let t=await a(`/proc/${e}/stat`,"utf-8"),r=t.lastIndexOf(")"),n=t.slice(r+2).split(" "),i=Number(n[19]);return Number.isFinite(i)?i:null}catch{return null}}async function Mpe(e,t,r){if(r!==void 0){if(await Ka(e,{skipCache:!0})!==r)return}else if(t!==void 0){if(V6t("kill_gate"),await Mke(e)!==t)return}else return;await Yw(e,"SIGTERM").catch(()=>{})}
export{V6t,Mke,Mpe};
