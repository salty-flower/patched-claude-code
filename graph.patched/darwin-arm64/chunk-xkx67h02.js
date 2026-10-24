// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{U}from"./chunk-ersar6wn.js";import{c}from"./chunk-ydpbzmt4.js";import{W}from"./chunk-3y73jbfr.js";import{a}from"./chunk-wq923bwc.js";import{vd}from"./chunk-tzqhxyjb.js";import{Dw}from"./chunk-27xjmczp.js";import{readFile as s}from"fs/promises";class o{firedSites=new Set;fire(e){if(this.firedSites.has(e))return;this.firedSites.add(e),a("tengu_dead_probe_adopt_ticks_token",{site:c(e)})}reset(){this.firedSites.clear()}}var l=new W(()=>new o);function f(){return l.of(U().host)}function Gno(e){f().fire(e)}async function v8t(e){return null}async function Alt(e,t,r){if(r!==void 0){if(await vd(e,{skipCache:!0})!==r)return}else if(t!==void 0){if(Gno("kill_gate"),await v8t(e)!==t)return}else return;await Dw(e,"SIGTERM").catch(()=>{})}
export{Gno,v8t,Alt};
