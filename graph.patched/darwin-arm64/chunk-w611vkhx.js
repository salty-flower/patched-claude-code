// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{W,B}from"./chunk-sgyvc67j.js";import{i}from"./chunk-z0p50v56.js";import{u}from"./chunk-am8gnetv.js";import{_a}from"./chunk-ssbk02ew.js";import{AS}from"./chunk-mtsqnq09.js";import{readFile as a}from"fs/promises";class n{firedSites=new Set;fire(e){if(this.firedSites.has(e))return;this.firedSites.add(e),i("tengu_dead_probe_adopt_ticks_token",{site:u(e)})}reset(){this.firedSites.clear()}}var l=new W(()=>new n);function f(){return l.of(B().host)}function Yin(e){f().fire(e)}async function i4e(e){return null}async function Twe(e,t,r){if(r!==void 0){if(await _a(e,{skipCache:!0})!==r)return}else if(t!==void 0){if(Yin("kill_gate"),await i4e(e)!==t)return}else return;await AS(e,"SIGTERM").catch(()=>{})}
export{Yin,i4e,Twe};
