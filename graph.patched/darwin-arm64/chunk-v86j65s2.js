// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{G,z}from"./chunk-sgamszzq.js";import{i}from"./chunk-jxv3x25k.js";import{c}from"./chunk-k6smmjsm.js";import{Qa}from"./chunk-gk6kz4gh.js";import{H_}from"./chunk-mk4es16h.js";import{readFile as a}from"fs/promises";class n{firedSites=new Set;fire(e){if(this.firedSites.has(e))return;this.firedSites.add(e),i("tengu_dead_probe_adopt_ticks_token",{site:c(e)})}reset(){this.firedSites.clear()}}var l=new G(()=>new n);function f(){return l.of(z().host)}function AAn(e){f().fire(e)}async function aJe(e){return null}async function PRe(e,t,r){if(r!==void 0){if(await Qa(e,{skipCache:!0})!==r)return}else if(t!==void 0){if(AAn("kill_gate"),await aJe(e)!==t)return}else return;await H_(e,"SIGTERM").catch(()=>{})}
export{AAn,aJe,PRe};
