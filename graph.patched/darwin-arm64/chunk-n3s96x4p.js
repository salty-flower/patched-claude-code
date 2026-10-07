// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{_,d}from"./chunk-hdvxmrfb.js";import{i}from"./chunk-qbf9wv32.js";import{xRe,TK,w2,sVn,iVn}from"./chunk-pvqvmaqx.js";var TRe={accepted:"Allowed",declined:"Not allowed",unset:"Not asked yet"},t="Turned off by your organization's settings (remoteTools.allowUnattendedServing)",o="Turned off in your user settings (remoteTools.allowUnattendedServing: false in ~/.claude/settings.json) \u2014 remove it there to re-enable";function dLt(){return sVn()==="user"?o:t}function ucn(e){return TK()!=="unset"||iVn()||e}function pcn(){return TK()==="accepted"||iVn()}async function fcn(e){if(e==="accepted"&&w2())return"forbidden";let n=e==="accepted"?"accepted":TK()==="accepted"?"revoked":"declined";if(!await xRe(e))return"not_saved";return i("tengu_served_unattended_consent",{action:d(n),surface:_("cli")}),"saved"}
export{TRe,dLt,ucn,pcn,fcn};
