// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{F}from"./chunk-m8nhymg4.js";import{f}from"./chunk-v8gz5b0e.js";import{l}from"./chunk-mfxenhbr.js";import{Pc}from"./chunk-29cd2nzs.js";import{Qw}from"./chunk-e44qnbvj.js";import{W}from"./chunk-z1a5ffdv.js";import{readFile as s}from"fs/promises";class o{firedSites=new Set;fire(e){if(this.firedSites.has(e))return;this.firedSites.add(e),l("tengu_dead_probe_adopt_ticks_token",{site:f(e)})}reset(){this.firedSites.clear()}}var a=new W(()=>new o);function u(){return a.of(F().host)}function DQo(e){u().fire(e)}async function MRn(e){return null}async function C0t(e,t,r){if(r!==void 0){if(await Pc(e,{skipCache:!0})!==r)return}else if(t!==void 0){if(DQo("kill_gate"),await MRn(e)!==t)return}else return;await Qw(e,"SIGTERM",{groupMembersByPidToo:!0}).catch(()=>{})}
export{DQo,MRn,C0t};
