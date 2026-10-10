// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{q,B}from"./chunk-4bw62nzm.js";import{d}from"./chunk-76anb6yt.js";import{i}from"./chunk-4nygtnjw.js";import{Ul}from"./chunk-3sda67c1.js";import{Mw}from"./chunk-25vrbr0v.js";import{readFile as a}from"fs/promises";class n{firedSites=new Set;fire(e){if(this.firedSites.has(e))return;this.firedSites.add(e),i("tengu_dead_probe_adopt_ticks_token",{site:d(e)})}reset(){this.firedSites.clear()}}var l=new q(()=>new n);function f(){return l.of(B().host)}function DDr(e){f().fire(e)}async function LFt(e){return null}async function WXe(e,t,r){if(r!==void 0){if(await Ul(e,{skipCache:!0})!==r)return}else if(t!==void 0){if(DDr("kill_gate"),await LFt(e)!==t)return}else return;await Mw(e,"SIGTERM").catch(()=>{})}
export{DDr,LFt,WXe};
