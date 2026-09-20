// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{G,W}from"./chunk-txfrkyzp.js";import{i}from"./chunk-5a4y4a7y.js";import{c}from"./chunk-p9tbyvzw.js";import{Qa}from"./chunk-qk93vtk9.js";import{x_}from"./chunk-6h9v41ez.js";import{readFile as a}from"fs/promises";class n{firedSites=new Set;fire(e){if(this.firedSites.has(e))return;this.firedSites.add(e),i("tengu_dead_probe_adopt_ticks_token",{site:c(e)})}reset(){this.firedSites.clear()}}var l=new G(()=>new n);function f(){return l.of(W().host)}function xEn(e){f().fire(e)}async function $Je(e){try{let t=await a(`/proc/${e}/stat`,"utf-8"),r=t.lastIndexOf(")"),s=t.slice(r+2).split(" "),o=Number(s[19]);return Number.isFinite(o)?o:null}catch{return null}}async function hRe(e,t,r){if(r!==void 0){if(await Qa(e,{skipCache:!0})!==r)return}else if(t!==void 0){if(xEn("kill_gate"),await $Je(e)!==t)return}else return;await x_(e,"SIGTERM").catch(()=>{})}
export{xEn,$Je,hRe};
