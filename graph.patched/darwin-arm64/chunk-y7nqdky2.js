// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{ee}from"./chunk-t2kfemrk.js";import{userInfo as s}from"os";var t="com.anthropic.claudecode",qyt="HKLM\\SOFTWARE\\Policies\\ClaudeCode",Gyt="HKCU\\SOFTWARE\\Policies\\ClaudeCode",FDe="Settings",$Xn="/usr/bin/plutil",BXn=["-convert","json","-o","-","--"],UXn=5000,syn="/mnt/c/Windows/System32/reg.exe",rk="/mnt/c/Program Files/ClaudeCode";function $De(){return!1}function jXn(){let e="";try{e=s().username}catch{}let r=[];if(e)r.push({path:`/Library/Managed Preferences/${e}/${t}.plist`,label:"per-user managed preferences"});return r.push({path:`/Library/Managed Preferences/${t}.plist`,label:"device-level managed preferences"}),r}
export{qyt,Gyt,FDe,$Xn,BXn,UXn,syn,rk,$De,jXn};
