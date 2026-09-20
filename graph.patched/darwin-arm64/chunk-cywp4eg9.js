// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{Re}from"./chunk-y8wd7we8.js";import{userInfo as s}from"os";var t="com.anthropic.claudecode",A6t="HKLM\\SOFTWARE\\Policies\\ClaudeCode",C6t="HKCU\\SOFTWARE\\Policies\\ClaudeCode",Lht="Settings",sXn="/usr/bin/plutil",TBr=["-convert","json","-o","-","--"],kBr=["-lint","-s","--"],RBr=5000,ahn=2097152,xBr="/mnt/c/Windows/System32/reg.exe",T0="/mnt/c/Program Files/ClaudeCode";function k5e(){return!1}function HBr(){let e="";try{e=s().username}catch{}let r=[];if(e)r.push({path:`/Library/Managed Preferences/${e}/${t}.plist`,label:"per-user managed preferences"});return r.push({path:`/Library/Managed Preferences/${t}.plist`,label:"device-level managed preferences"}),r}
export{A6t,C6t,Lht,sXn,TBr,kBr,RBr,ahn,xBr,T0,k5e,HBr};
