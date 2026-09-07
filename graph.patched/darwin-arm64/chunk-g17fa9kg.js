// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{j,B}from"./chunk-zhtwayh2.js";import{i}from"./chunk-vtd04czk.js";import{u}from"./chunk-gnrvsty9.js";import{Da}from"./chunk-ehv9s8sq.js";import{Py}from"./chunk-8k2ye2d4.js";import{readFile as a}from"fs/promises";class n{firedSites=new Set;fire(e){if(this.firedSites.has(e))return;this.firedSites.add(e),i("tengu_dead_probe_adopt_ticks_token",{site:u(e)})}reset(){this.firedSites.clear()}}var l=new j(()=>new n);function f(){return l.of(B().host)}function YQt(e){f().fire(e)}async function jje(e){return null}async function K_e(e,t,r){if(r!==void 0){if(await Da(e,{skipCache:!0})!==r)return}else if(t!==void 0){if(YQt("kill_gate"),await jje(e)!==t)return}else return;await Py(e,"SIGTERM").catch(()=>{})}
export{YQt,jje,K_e};
