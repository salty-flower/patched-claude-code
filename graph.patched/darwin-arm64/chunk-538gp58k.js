// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{S,c}from"./chunk-ny2cqbmq.js";import{i}from"./chunk-dj0gyv94.js";import{cFe,yY,kV,Gfr,zfr}from"./chunk-se7dra0e.js";var lFe={accepted:"Allowed",declined:"Not allowed",unset:"Not asked yet"},t="Turned off by your organization's settings (remoteTools.allowUnattendedServing)",o="Turned off in your user settings (remoteTools.allowUnattendedServing: false in ~/.claude/settings.json) \u2014 remove it there to re-enable";function n9t(){return Gfr()==="user"?o:t}function bIn(e){return yY()!=="unset"||zfr()||e}function wIn(){return yY()==="accepted"||zfr()}async function EIn(e){if(e==="accepted"&&kV())return"forbidden";let n=e==="accepted"?"accepted":yY()==="accepted"?"revoked":"declined";if(!await cFe(e))return"not_saved";return i("tengu_served_unattended_consent",{action:c(n),surface:S("cli")}),"saved"}
export{lFe,n9t,bIn,wIn,EIn};
