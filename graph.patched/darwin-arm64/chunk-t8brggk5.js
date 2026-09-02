// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{J,G}from"./chunk-38213y7h.js";import{s}from"./chunk-qw5jhqey.js";import{c}from"./chunk-9rhc0mtn.js";import{Ga}from"./chunk-49gs1y6m.js";import{GE}from"./chunk-dmw41ak1.js";import{readFile as a}from"fs/promises";class o{firedSites=new Set;fire(e){if(this.firedSites.has(e))return;this.firedSites.add(e),s("tengu_dead_probe_adopt_ticks_token",{site:c(e)})}reset(){this.firedSites.clear()}}var l=new J(()=>new o);function f(){return l.of(G().host)}function gYt(e){f().fire(e)}async function Cke(e){return null}async function kge(e,t,r){if(r!==void 0){if(await Ga(e,{skipCache:!0})!==r)return}else if(t!==void 0){if(gYt("kill_gate"),await Cke(e)!==t)return}else return;await GE(e,"SIGTERM").catch(()=>{})}
export{gYt,Cke,kge};
