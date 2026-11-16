// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{F}from"./chunk-r3adsed5.js";import{f}from"./chunk-zt4gdxqw.js";import{l}from"./chunk-hs29jdk6.js";import{Pc}from"./chunk-5z5dtbrz.js";import{Jw}from"./chunk-a5a37ds7.js";import{W}from"./chunk-z1a5ffdv.js";import{readFile as s}from"fs/promises";class o{firedSites=new Set;fire(e){if(this.firedSites.has(e))return;this.firedSites.add(e),l("tengu_dead_probe_adopt_ticks_token",{site:f(e)})}reset(){this.firedSites.clear()}}var a=new W(()=>new o);function u(){return a.of(F().host)}function MJo(e){u().fire(e)}async function qCn(e){try{let t=await s(`/proc/${e}/stat`,"utf-8"),r=t.lastIndexOf(")"),n=t.slice(r+2).split(" "),i=Number(n[19]);return Number.isFinite(i)?i:null}catch{return null}}async function sMt(e,t,r){if(r!==void 0){if(await Pc(e,{skipCache:!0})!==r)return}else if(t!==void 0){if(MJo("kill_gate"),await qCn(e)!==t)return}else return;await Jw(e,"SIGTERM",{groupMembersByPidToo:!0}).catch(()=>{})}
export{MJo,qCn,sMt};
