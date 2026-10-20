// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{b,c}from"./chunk-m3epja3j.js";import{i}from"./chunk-sr4gfmny.js";import{t$e,d9,gV,Afr,Cfr}from"./chunk-7j2hzcsm.js";var ZNe={accepted:"Allowed",declined:"Not allowed",unset:"Not asked yet"},t="Turned off by your organization's settings (remoteTools.allowUnattendedServing)",o="Turned off in your user settings (remoteTools.allowUnattendedServing: false in ~/.claude/settings.json) \u2014 remove it there to re-enable";function V5t(){return Afr()==="user"?o:t}function aIn(e){return d9()!=="unset"||Cfr()||e}function lIn(){return d9()==="accepted"||Cfr()}async function dIn(e){if(e==="accepted"&&gV())return"forbidden";let n=e==="accepted"?"accepted":d9()==="accepted"?"revoked":"declined";if(!await t$e(e))return"not_saved";return i("tengu_served_unattended_consent",{action:c(n),surface:b("cli")}),"saved"}
export{ZNe,V5t,aIn,lIn,dIn};
