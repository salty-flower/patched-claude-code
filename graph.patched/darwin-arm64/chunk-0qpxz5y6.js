// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{S,c}from"./chunk-ydpbzmt4.js";import{a}from"./chunk-wq923bwc.js";import{F1e,f7,wq,Cvr,Tvr}from"./chunk-tnt0dnyd.js";var L1e={accepted:"Allowed",declined:"Not allowed",unset:"Not asked yet"},t="Turned off by your organization's settings (remoteTools.allowUnattendedServing)",o="Turned off in your user settings (remoteTools.allowUnattendedServing: false in ~/.claude/settings.json) \u2014 remove it there to re-enable";function FQt(){return Cvr()==="user"?o:t}function KNn(e){return f7()!=="unset"||Tvr()||e}function qNn(){return f7()==="accepted"||Tvr()}async function YNn(e){if(e==="accepted"&&wq())return"forbidden";let n=e==="accepted"?"accepted":f7()==="accepted"?"revoked":"declined";if(!await F1e(e))return"not_saved";return a("tengu_served_unattended_consent",{action:c(n),surface:S("cli")}),"saved"}
export{L1e,FQt,KNn,qNn,YNn};
