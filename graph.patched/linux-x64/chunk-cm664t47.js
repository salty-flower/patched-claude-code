// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{j}from"./chunk-dxktn51d.js";import{c}from"./chunk-m3epja3j.js";import{W}from"./chunk-2fbnw5gg.js";import{i}from"./chunk-sr4gfmny.js";import{nd}from"./chunk-b7dsynzj.js";import{lE}from"./chunk-1vcf5z2k.js";import{readFile as a}from"fs/promises";class n{firedSites=new Set;fire(e){if(this.firedSites.has(e))return;this.firedSites.add(e),i("tengu_dead_probe_adopt_ticks_token",{site:c(e)})}reset(){this.firedSites.clear()}}var l=new W(()=>new n);function f(){return l.of(j().host)}function I5r(e){f().fire(e)}async function GVt(e){try{let t=await a(`/proc/${e}/stat`,"utf-8"),r=t.lastIndexOf(")"),s=t.slice(r+2).split(" "),o=Number(s[19]);return Number.isFinite(o)?o:null}catch{return null}}async function Ort(e,t,r){if(r!==void 0){if(await nd(e,{skipCache:!0})!==r)return}else if(t!==void 0){if(I5r("kill_gate"),await GVt(e)!==t)return}else return;await lE(e,"SIGTERM").catch(()=>{})}
export{I5r,GVt,Ort};
