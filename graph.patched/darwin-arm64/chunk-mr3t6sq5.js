// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{S,c}from"./chunk-dnq93t1z.js";import{i}from"./chunk-52pf9qag.js";import{PLe,k8,$$,Olr,Hlr}from"./chunk-s50bsytd.js";var xLe={accepted:"Allowed",declined:"Not allowed",unset:"Not asked yet"},t="Turned off by your organization's settings (remoteTools.allowUnattendedServing)",o="Turned off in your user settings (remoteTools.allowUnattendedServing: false in ~/.claude/settings.json) \u2014 remove it there to re-enable";function h3t(){return Olr()==="user"?o:t}function IRn(e){return k8()!=="unset"||Hlr()||e}function ORn(){return k8()==="accepted"||Hlr()}async function HRn(e){if(e==="accepted"&&$$())return"forbidden";let n=e==="accepted"?"accepted":k8()==="accepted"?"revoked":"declined";if(!await PLe(e))return"not_saved";return i("tengu_served_unattended_consent",{action:c(n),surface:S("cli")}),"saved"}
export{xLe,h3t,IRn,ORn,HRn};
