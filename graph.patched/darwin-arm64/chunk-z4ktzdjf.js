// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{z,F}from"./chunk-vd0a9d2s.js";import{d}from"./chunk-eak61y8v.js";import{i}from"./chunk-ne43gjnt.js";import{Al}from"./chunk-yxxcd79r.js";import{aw}from"./chunk-d2m17704.js";import{readFile as a}from"fs/promises";class n{firedSites=new Set;fire(e){if(this.firedSites.has(e))return;this.firedSites.add(e),i("tengu_dead_probe_adopt_ticks_token",{site:d(e)})}reset(){this.firedSites.clear()}}var l=new z(()=>new n);function f(){return l.of(F().host)}function xxr(e){f().fire(e)}async function eMt(e){return null}async function h9e(e,t,r){if(r!==void 0){if(await Al(e,{skipCache:!0})!==r)return}else if(t!==void 0){if(xxr("kill_gate"),await eMt(e)!==t)return}else return;await aw(e,"SIGTERM").catch(()=>{})}
export{xxr,eMt,h9e};
