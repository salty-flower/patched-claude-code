// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{J,W}from"./chunk-30zk17wm.js";import{s}from"./chunk-yqfv1yd3.js";import{c}from"./chunk-r1b219q3.js";import{Wa}from"./chunk-bqf28esr.js";import{VE}from"./chunk-15e3ezew.js";import{readFile as a}from"fs/promises";class o{firedSites=new Set;fire(e){if(this.firedSites.has(e))return;this.firedSites.add(e),s("tengu_dead_probe_adopt_ticks_token",{site:c(e)})}reset(){this.firedSites.clear()}}var l=new J(()=>new o);function f(){return l.of(W().host)}function pJt(e){f().fire(e)}async function wCe(e){try{let t=await a(`/proc/${e}/stat`,"utf-8"),r=t.lastIndexOf(")"),n=t.slice(r+2).split(" "),i=Number(n[19]);return Number.isFinite(i)?i:null}catch{return null}}async function Age(e,t,r){if(r!==void 0){if(await Wa(e,{skipCache:!0})!==r)return}else if(t!==void 0){if(pJt("kill_gate"),await wCe(e)!==t)return}else return;await VE(e,"SIGTERM").catch(()=>{})}
export{pJt,wCe,Age};
