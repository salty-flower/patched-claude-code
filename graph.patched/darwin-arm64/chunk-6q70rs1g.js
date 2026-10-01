// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{_,c}from"./chunk-g9zw99sb.js";import{i}from"./chunk-aykv0zbt.js";import{uEe,pEe,z8,mIn,gIn}from"./chunk-s2hqr3pb.js";var cEe={accepted:"Allowed",declined:"Not allowed",unset:"Not asked yet"},t="Turned off by your organization's settings (remoteTools.allowUnattendedServing)",o="Turned off in your user settings (remoteTools.allowUnattendedServing: false in ~/.claude/settings.json) \u2014 remove it there to re-enable";function $Ct(){return mIn()==="user"?o:t}function d8t(e){return pEe()!=="unset"||gIn()||e}function u8t(){return pEe()==="accepted"||gIn()}async function p8t(e){if(e==="accepted"&&z8())return"forbidden";let n=e==="accepted"?"accepted":pEe()==="accepted"?"revoked":"declined";if(!await uEe(e))return"not_saved";return i("tengu_served_unattended_consent",{action:c(n),surface:_("cli")}),"saved"}
export{cEe,$Ct,d8t,u8t,p8t};
