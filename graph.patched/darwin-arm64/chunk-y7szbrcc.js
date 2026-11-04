// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{F}from"./chunk-ecyypctx.js";import{p}from"./chunk-h58p4vvs.js";import{W}from"./chunk-8915xd28.js";import{l}from"./chunk-hm8vbfs0.js";import{Bd}from"./chunk-t906yk9f.js";import{rE}from"./chunk-axsjfnwn.js";import{readFile as s}from"fs/promises";class o{firedSites=new Set;fire(e){if(this.firedSites.has(e))return;this.firedSites.add(e),l("tengu_dead_probe_adopt_ticks_token",{site:p(e)})}reset(){this.firedSites.clear()}}var a=new W(()=>new o);function f(){return a.of(F().host)}function IMo(e){f().fire(e)}async function hun(e){return null}async function Swt(e,t,r){if(r!==void 0){if(await Bd(e,{skipCache:!0})!==r)return}else if(t!==void 0){if(IMo("kill_gate"),await hun(e)!==t)return}else return;await rE(e,"SIGTERM",{groupMembersByPidToo:!0}).catch(()=>{})}
export{IMo,hun,Swt};
