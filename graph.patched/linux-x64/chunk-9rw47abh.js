// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{b,c}from"./chunk-fr28a3he.js";import{i}from"./chunk-h723y8sa.js";import{wLe,g8,MF,ulr,plr}from"./chunk-ndrjwkf9.js";var SLe={accepted:"Allowed",declined:"Not allowed",unset:"Not asked yet"},t="Turned off by your organization's settings (remoteTools.allowUnattendedServing)",o="Turned off in your user settings (remoteTools.allowUnattendedServing: false in ~/.claude/settings.json) \u2014 remove it there to re-enable";function nYt(){return ulr()==="user"?o:t}function dRn(e){return g8()!=="unset"||plr()||e}function cRn(){return g8()==="accepted"||plr()}async function uRn(e){if(e==="accepted"&&MF())return"forbidden";let n=e==="accepted"?"accepted":g8()==="accepted"?"revoked":"declined";if(!await wLe(e))return"not_saved";return i("tengu_served_unattended_consent",{action:c(n),surface:b("cli")}),"saved"}
export{SLe,nYt,dRn,cRn,uRn};
