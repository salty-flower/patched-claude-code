// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{j}from"./chunk-eqmywwjn.js";import{c}from"./chunk-fr28a3he.js";import{G}from"./chunk-pzq28dp7.js";import{i}from"./chunk-h723y8sa.js";import{Kl}from"./chunk-v55shcxh.js";import{Kv}from"./chunk-sdt3vs8w.js";import{readFile as a}from"fs/promises";class n{firedSites=new Set;fire(e){if(this.firedSites.has(e))return;this.firedSites.add(e),i("tengu_dead_probe_adopt_ticks_token",{site:c(e)})}reset(){this.firedSites.clear()}}var l=new G(()=>new n);function f(){return l.of(j().host)}function iKr(e){f().fire(e)}async function NGt(e){try{let t=await a(`/proc/${e}/stat`,"utf-8"),r=t.lastIndexOf(")"),s=t.slice(r+2).split(" "),o=Number(s[19]);return Number.isFinite(o)?o:null}catch{return null}}async function Dtt(e,t,r){if(r!==void 0){if(await Kl(e,{skipCache:!0})!==r)return}else if(t!==void 0){if(iKr("kill_gate"),await NGt(e)!==t)return}else return;await Kv(e,"SIGTERM").catch(()=>{})}
export{iKr,NGt,Dtt};
