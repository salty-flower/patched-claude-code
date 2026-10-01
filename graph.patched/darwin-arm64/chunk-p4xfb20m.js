// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{q,j}from"./chunk-a7cah040.js";import{c}from"./chunk-g9zw99sb.js";import{i}from"./chunk-aykv0zbt.js";import{oc}from"./chunk-jqre7qs5.js";import{kS}from"./chunk-bq7qbt1w.js";import{readFile as a}from"fs/promises";class n{firedSites=new Set;fire(e){if(this.firedSites.has(e))return;this.firedSites.add(e),i("tengu_dead_probe_adopt_ticks_token",{site:c(e)})}reset(){this.firedSites.clear()}}var l=new q(()=>new n);function f(){return l.of(j().host)}function nor(e){f().fire(e)}async function cbt(e){return null}async function Uje(e,t,r){if(r!==void 0){if(await oc(e,{skipCache:!0})!==r)return}else if(t!==void 0){if(nor("kill_gate"),await cbt(e)!==t)return}else return;await kS(e,"SIGTERM").catch(()=>{})}
export{nor,cbt,Uje};
