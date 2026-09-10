// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{j,B}from"./chunk-cet8na02.js";import{i}from"./chunk-mx473n83.js";import{u}from"./chunk-jxvdfgn0.js";import{ja}from"./chunk-hjmm0v46.js";import{gS}from"./chunk-7arsj9fp.js";import{readFile as a}from"fs/promises";class n{firedSites=new Set;fire(e){if(this.firedSites.has(e))return;this.firedSites.add(e),i("tengu_dead_probe_adopt_ticks_token",{site:u(e)})}reset(){this.firedSites.clear()}}var l=new j(()=>new n);function f(){return l.of(B().host)}function Ton(e){f().fire(e)}async function v3e(e){return null}async function Abe(e,t,r){if(r!==void 0){if(await ja(e,{skipCache:!0})!==r)return}else if(t!==void 0){if(Ton("kill_gate"),await v3e(e)!==t)return}else return;await gS(e,"SIGTERM").catch(()=>{})}
export{Ton,v3e,Abe};
