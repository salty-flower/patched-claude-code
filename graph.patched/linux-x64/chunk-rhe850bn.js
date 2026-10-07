// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{_,d}from"./chunk-yffha6me.js";import{i}from"./chunk-s90w5q15.js";import{TRe,E4,pW,Zqn,eVn}from"./chunk-0rmawb95.js";var ERe={accepted:"Allowed",declined:"Not allowed",unset:"Not asked yet"},t="Turned off by your organization's settings (remoteTools.allowUnattendedServing)",o="Turned off in your user settings (remoteTools.allowUnattendedServing: false in ~/.claude/settings.json) \u2014 remove it there to re-enable";function aLt(){return Zqn()==="user"?o:t}function fcn(e){return E4()!=="unset"||eVn()||e}function mcn(){return E4()==="accepted"||eVn()}async function gcn(e){if(e==="accepted"&&pW())return"forbidden";let n=e==="accepted"?"accepted":E4()==="accepted"?"revoked":"declined";if(!await TRe(e))return"not_saved";return i("tengu_served_unattended_consent",{action:d(n),surface:_("cli")}),"saved"}
export{ERe,aLt,fcn,mcn,gcn};
