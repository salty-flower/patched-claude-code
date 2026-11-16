// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{S,f}from"./chunk-v8gz5b0e.js";import{l}from"./chunk-mfxenhbr.js";import{yQe,Rae,vJ,tuo,nuo}from"./chunk-yhws8a2f.js";var gQe={accepted:"Allowed",declined:"Not allowed",unset:"Not asked yet"},t="Turned off by your organization's settings (remoteTools.allowUnattendedServing)",o="Turned off in your user settings (remoteTools.allowUnattendedServing: false in ~/.claude/settings.json) \u2014 remove it there to re-enable";function jMn(){return tuo()==="user"?o:t}function Kyr(e){return Rae()!=="unset"||nuo()||e}function Yyr(){return Rae()==="accepted"||nuo()}async function Xyr(e){if(e==="accepted"&&vJ())return"forbidden";let n=e==="accepted"?"accepted":Rae()==="accepted"?"revoked":"declined";if(!await yQe(e))return"not_saved";return l("tengu_served_unattended_consent",{action:f(n),surface:S("cli")}),"saved"}
export{gQe,jMn,Kyr,Yyr,Xyr};
