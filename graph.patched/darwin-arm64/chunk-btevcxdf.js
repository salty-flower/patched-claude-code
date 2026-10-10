// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{S,d}from"./chunk-76anb6yt.js";import{i}from"./chunk-4nygtnjw.js";import{m0e,Z4,ZG,BJn,jJn}from"./chunk-vq5xch6f.js";var p0e={accepted:"Allowed",declined:"Not allowed",unset:"Not asked yet"},t="Turned off by your organization's settings (remoteTools.allowUnattendedServing)",o="Turned off in your user settings (remoteTools.allowUnattendedServing: false in ~/.claude/settings.json) \u2014 remove it there to re-enable";function G2t(){return BJn()==="user"?o:t}function cSn(e){return Z4()!=="unset"||jJn()||e}function dSn(){return Z4()==="accepted"||jJn()}async function uSn(e){if(e==="accepted"&&ZG())return"forbidden";let n=e==="accepted"?"accepted":Z4()==="accepted"?"revoked":"declined";if(!await m0e(e))return"not_saved";return i("tengu_served_unattended_consent",{action:d(n),surface:S("cli")}),"saved"}
export{p0e,G2t,cSn,dSn,uSn};
