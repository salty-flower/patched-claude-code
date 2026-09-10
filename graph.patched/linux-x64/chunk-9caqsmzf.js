// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{z,B}from"./chunk-6n7yk222.js";import{i}from"./chunk-nx6yj2w6.js";import{u}from"./chunk-0rpkhv24.js";import{_a}from"./chunk-664fvn0k.js";import{vb}from"./chunk-y7kdfmz6.js";import{readFile as a}from"fs/promises";class n{firedSites=new Set;fire(e){if(this.firedSites.has(e))return;this.firedSites.add(e),i("tengu_dead_probe_adopt_ticks_token",{site:u(e)})}reset(){this.firedSites.clear()}}var l=new z(()=>new n);function f(){return l.of(B().host)}function din(e){f().fire(e)}async function FKe(e){try{let t=await a(`/proc/${e}/stat`,"utf-8"),r=t.lastIndexOf(")"),s=t.slice(r+2).split(" "),o=Number(s[19]);return Number.isFinite(o)?o:null}catch{return null}}async function pwe(e,t,r){if(r!==void 0){if(await _a(e,{skipCache:!0})!==r)return}else if(t!==void 0){if(din("kill_gate"),await FKe(e)!==t)return}else return;await vb(e,"SIGTERM").catch(()=>{})}
export{din,FKe,pwe};
