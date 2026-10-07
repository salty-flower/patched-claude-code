// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{Pe}from"./chunk-rnxw3wwn.js";import{userInfo as s}from"os";var t="com.anthropic.claudecode",q0n="HKLM\\SOFTWARE\\Policies\\ClaudeCode",K0n="HKCU\\SOFTWARE\\Policies\\ClaudeCode",Y9t="Settings",jio="/usr/bin/plutil",kls=["-convert","json","-o","-","--"],Als=["-lint","-s","--"],Tls=5000,Gpr=2097152,Rls="/mnt/c/Windows/System32/reg.exe",RO="/mnt/c/Program Files/ClaudeCode";function nAt(){return!1}function xls(){let e="";try{e=s().username}catch{}let r=[];if(e)r.push({path:`/Library/Managed Preferences/${e}/${t}.plist`,label:"per-user managed preferences"});return r.push({path:`/Library/Managed Preferences/${t}.plist`,label:"device-level managed preferences"}),r}
export{q0n,K0n,Y9t,jio,kls,Als,Tls,Gpr,Rls,RO,nAt,xls};
