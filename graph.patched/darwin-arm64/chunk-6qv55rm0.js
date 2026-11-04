// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{S,p}from"./chunk-h58p4vvs.js";import{l}from"./chunk-hm8vbfs0.js";import{Vqe,Jte,G9,LVr,HVr}from"./chunk-hj38dg2q.js";var Gqe={accepted:"Allowed",declined:"Not allowed",unset:"Not asked yet"},t="Turned off by your organization's settings (remoteTools.allowUnattendedServing)",o="Turned off in your user settings (remoteTools.allowUnattendedServing: false in ~/.claude/settings.json) \u2014 remove it there to re-enable";function fyn(){return LVr()==="user"?o:t}function pJn(e){return Jte()!=="unset"||HVr()||e}function fJn(){return Jte()==="accepted"||HVr()}async function mJn(e){if(e==="accepted"&&G9())return"forbidden";let n=e==="accepted"?"accepted":Jte()==="accepted"?"revoked":"declined";if(!await Vqe(e))return"not_saved";return l("tengu_served_unattended_consent",{action:p(n),surface:S("cli")}),"saved"}
export{Gqe,fyn,pJn,fJn,mJn};
