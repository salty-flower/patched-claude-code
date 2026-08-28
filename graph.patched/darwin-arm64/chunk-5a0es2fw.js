// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{K,W}from"./chunk-g4zaymy2.js";import{s}from"./chunk-3jdapt8v.js";import{c}from"./chunk-jqgad8sa.js";import{Ka}from"./chunk-r3k3kcs0.js";import{Xw}from"./chunk-g3cz8tma.js";import{readFile as a}from"fs/promises";class o{firedSites=new Set;fire(e){if(this.firedSites.has(e))return;this.firedSites.add(e),s("tengu_dead_probe_adopt_ticks_token",{site:c(e)})}reset(){this.firedSites.clear()}}var l=new K(()=>new o);function f(){return l.of(W().host)}function LGt(e){f().fire(e)}async function ACe(e){return null}async function Npe(e,t,r){if(r!==void 0){if(await Ka(e,{skipCache:!0})!==r)return}else if(t!==void 0){if(LGt("kill_gate"),await ACe(e)!==t)return}else return;await Xw(e,"SIGTERM").catch(()=>{})}
export{LGt,ACe,Npe};
