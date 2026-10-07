// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{G,F}from"./chunk-aywwjcwq.js";import{d}from"./chunk-yffha6me.js";import{i}from"./chunk-s90w5q15.js";import{fl}from"./chunk-7ha2yydy.js";import{GS}from"./chunk-dx30tgp5.js";import{readFile as a}from"fs/promises";class n{firedSites=new Set;fire(e){if(this.firedSites.has(e))return;this.firedSites.add(e),i("tengu_dead_probe_adopt_ticks_token",{site:d(e)})}reset(){this.firedSites.clear()}}var l=new G(()=>new n);function f(){return l.of(F().host)}function yvr(e){f().fire(e)}async function yIt(e){try{let t=await a(`/proc/${e}/stat`,"utf-8"),r=t.lastIndexOf(")"),s=t.slice(r+2).split(" "),o=Number(s[19]);return Number.isFinite(o)?o:null}catch{return null}}async function S3e(e,t,r){if(r!==void 0){if(await fl(e,{skipCache:!0})!==r)return}else if(t!==void 0){if(yvr("kill_gate"),await yIt(e)!==t)return}else return;await GS(e,"SIGTERM").catch(()=>{})}
export{yvr,yIt,S3e};
