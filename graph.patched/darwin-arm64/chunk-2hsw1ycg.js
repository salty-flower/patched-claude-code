// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{z,F}from"./chunk-8mvda08c.js";import{d}from"./chunk-hdvxmrfb.js";import{i}from"./chunk-qbf9wv32.js";import{ml}from"./chunk-9k1s2d1q.js";import{Vb}from"./chunk-t0npft1e.js";import{readFile as a}from"fs/promises";class n{firedSites=new Set;fire(e){if(this.firedSites.has(e))return;this.firedSites.add(e),i("tengu_dead_probe_adopt_ticks_token",{site:d(e)})}reset(){this.firedSites.clear()}}var l=new z(()=>new n);function f(){return l.of(F().host)}function jEr(e){f().fire(e)}async function PIt(e){return null}async function T3e(e,t,r){if(r!==void 0){if(await ml(e,{skipCache:!0})!==r)return}else if(t!==void 0){if(jEr("kill_gate"),await PIt(e)!==t)return}else return;await Vb(e,"SIGTERM").catch(()=>{})}
export{jEr,PIt,T3e};
