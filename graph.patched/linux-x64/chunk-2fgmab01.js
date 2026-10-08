// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{G,F}from"./chunk-g79wjybr.js";import{d}from"./chunk-bkr1h20c.js";import{i}from"./chunk-nayw0pf7.js";import{Tl}from"./chunk-9f88agae.js";import{iw}from"./chunk-gvd58vpb.js";import{readFile as a}from"fs/promises";class n{firedSites=new Set;fire(e){if(this.firedSites.has(e))return;this.firedSites.add(e),i("tengu_dead_probe_adopt_ticks_token",{site:d(e)})}reset(){this.firedSites.clear()}}var l=new G(()=>new n);function f(){return l.of(F().host)}function _xr(e){f().fire(e)}async function tDt(e){try{let t=await a(`/proc/${e}/stat`,"utf-8"),r=t.lastIndexOf(")"),s=t.slice(r+2).split(" "),o=Number(s[19]);return Number.isFinite(o)?o:null}catch{return null}}async function y5e(e,t,r){if(r!==void 0){if(await Tl(e,{skipCache:!0})!==r)return}else if(t!==void 0){if(_xr("kill_gate"),await tDt(e)!==t)return}else return;await iw(e,"SIGTERM").catch(()=>{})}
export{_xr,tDt,y5e};
