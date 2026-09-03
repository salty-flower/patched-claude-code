// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{X,G}from"./chunk-hdbxv3pp.js";import{s}from"./chunk-kzyd0fd4.js";import{u}from"./chunk-2avye5sw.js";import{ja}from"./chunk-m2hw088w.js";import{yA}from"./chunk-jvsvycez.js";import{readFile as a}from"fs/promises";class o{firedSites=new Set;fire(e){if(this.firedSites.has(e))return;this.firedSites.add(e),s("tengu_dead_probe_adopt_ticks_token",{site:u(e)})}reset(){this.firedSites.clear()}}var l=new X(()=>new o);function f(){return l.of(G().host)}function VZt(e){f().fire(e)}async function d0e(e){return null}async function cye(e,t,r){if(r!==void 0){if(await ja(e,{skipCache:!0})!==r)return}else if(t!==void 0){if(VZt("kill_gate"),await d0e(e)!==t)return}else return;await yA(e,"SIGTERM").catch(()=>{})}
export{VZt,d0e,cye};
