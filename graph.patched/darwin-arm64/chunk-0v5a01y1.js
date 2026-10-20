// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{j}from"./chunk-kpqr86hf.js";import{c}from"./chunk-ny2cqbmq.js";import{W}from"./chunk-cne7d53x.js";import{i}from"./chunk-dj0gyv94.js";import{td}from"./chunk-wpyqskvz.js";import{dv}from"./chunk-1n7emb86.js";import{readFile as a}from"fs/promises";class n{firedSites=new Set;fire(e){if(this.firedSites.has(e))return;this.firedSites.add(e),i("tengu_dead_probe_adopt_ticks_token",{site:c(e)})}reset(){this.firedSites.clear()}}var l=new W(()=>new n);function f(){return l.of(j().host)}function Z5r(e){f().fire(e)}async function ZVt(e){return null}async function Nrt(e,t,r){if(r!==void 0){if(await td(e,{skipCache:!0})!==r)return}else if(t!==void 0){if(Z5r("kill_gate"),await ZVt(e)!==t)return}else return;await dv(e,"SIGTERM").catch(()=>{})}
export{Z5r,ZVt,Nrt};
