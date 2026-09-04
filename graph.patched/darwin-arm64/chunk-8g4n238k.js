// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{z,q}from"./chunk-yhfssb7x.js";import{s}from"./chunk-v5cr82c7.js";import{u}from"./chunk-g1553wr3.js";import{za}from"./chunk-zjsfxnh6.js";import{Dw}from"./chunk-0ddsyx0p.js";import{readFile as a}from"fs/promises";class o{firedSites=new Set;fire(e){if(this.firedSites.has(e))return;this.firedSites.add(e),s("tengu_dead_probe_adopt_ticks_token",{site:u(e)})}reset(){this.firedSites.clear()}}var l=new z(()=>new o);function f(){return l.of(q().host)}function rnn(e){f().fire(e)}async function RIe(e){return null}async function iSe(e,t,r){if(r!==void 0){if(await za(e,{skipCache:!0})!==r)return}else if(t!==void 0){if(rnn("kill_gate"),await RIe(e)!==t)return}else return;await Dw(e,"SIGTERM").catch(()=>{})}
export{rnn,RIe,iSe};
