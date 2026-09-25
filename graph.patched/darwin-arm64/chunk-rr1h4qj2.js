// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{V,W}from"./chunk-s8xs8s76.js";import{c}from"./chunk-gas689jj.js";import{i}from"./chunk-9cfndpw0.js";import{Gl}from"./chunk-m3rjj2qj.js";import{Jb}from"./chunk-wyewzwe1.js";import{readFile as a}from"fs/promises";class n{firedSites=new Set;fire(e){if(this.firedSites.has(e))return;this.firedSites.add(e),i("tengu_dead_probe_adopt_ticks_token",{site:c(e)})}reset(){this.firedSites.clear()}}var l=new V(()=>new n);function f(){return l.of(W().host)}function g9n(e){f().fire(e)}async function omt(e){return null}async function t1e(e,t,r){if(r!==void 0){if(await Gl(e,{skipCache:!0})!==r)return}else if(t!==void 0){if(g9n("kill_gate"),await omt(e)!==t)return}else return;await Jb(e,"SIGTERM").catch(()=>{})}
export{g9n,omt,t1e};
