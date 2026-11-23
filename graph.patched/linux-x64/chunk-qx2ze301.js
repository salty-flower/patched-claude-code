// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{b,f}from"./chunk-zt4gdxqw.js";import{l}from"./chunk-hs29jdk6.js";import{dQe,Sae,mJ,Dco,Lco}from"./chunk-2d5d5s4q.js";var aQe={accepted:"Allowed",declined:"Not allowed",unset:"Not asked yet"},t="Turned off by your organization's settings (remoteTools.allowUnattendedServing)",o="Turned off in your user settings (remoteTools.allowUnattendedServing: false in ~/.claude/settings.json) \u2014 remove it there to re-enable";function A0n(){return Dco()==="user"?o:t}function Tyr(e){return Sae()!=="unset"||Lco()||e}function Ayr(){return Sae()==="accepted"||Lco()}async function Cyr(e){if(e==="accepted"&&mJ())return"forbidden";let n=e==="accepted"?"accepted":Sae()==="accepted"?"revoked":"declined";if(!await dQe(e))return"not_saved";return l("tengu_served_unattended_consent",{action:f(n),surface:b("cli")}),"saved"}
export{aQe,A0n,Tyr,Ayr,Cyr};
