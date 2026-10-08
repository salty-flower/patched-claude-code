// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{S,d}from"./chunk-eak61y8v.js";import{i}from"./chunk-ne43gjnt.js";import{DPe,M3,MW,Z5n,e9n}from"./chunk-ezvprnjr.js";var HPe={accepted:"Allowed",declined:"Not allowed",unset:"Not asked yet"},t="Turned off by your organization's settings (remoteTools.allowUnattendedServing)",o="Turned off in your user settings (remoteTools.allowUnattendedServing: false in ~/.claude/settings.json) \u2014 remove it there to re-enable";function n1t(){return Z5n()==="user"?o:t}function Hfn(e){return M3()!=="unset"||e9n()||e}function Mfn(){return M3()==="accepted"||e9n()}async function Dfn(e){if(e==="accepted"&&MW())return"forbidden";let n=e==="accepted"?"accepted":M3()==="accepted"?"revoked":"declined";if(!await DPe(e))return"not_saved";return i("tengu_served_unattended_consent",{action:d(n),surface:S("cli")}),"saved"}
export{HPe,n1t,Hfn,Mfn,Dfn};
