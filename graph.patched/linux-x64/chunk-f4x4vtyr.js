// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{b,d}from"./chunk-bkr1h20c.js";import{i}from"./chunk-nayw0pf7.js";import{IPe,PY,Tz,J3n,Q3n}from"./chunk-23sxjvtd.js";var xPe={accepted:"Allowed",declined:"Not allowed",unset:"Not asked yet"},t="Turned off by your organization's settings (remoteTools.allowUnattendedServing)",o="Turned off in your user settings (remoteTools.allowUnattendedServing: false in ~/.claude/settings.json) \u2014 remove it there to re-enable";function QFt(){return J3n()==="user"?o:t}function Dfn(e){return PY()!=="unset"||Q3n()||e}function Lfn(){return PY()==="accepted"||Q3n()}async function Nfn(e){if(e==="accepted"&&Tz())return"forbidden";let n=e==="accepted"?"accepted":PY()==="accepted"?"revoked":"declined";if(!await IPe(e))return"not_saved";return i("tengu_served_unattended_consent",{action:d(n),surface:b("cli")}),"saved"}
export{xPe,QFt,Dfn,Lfn,Nfn};
