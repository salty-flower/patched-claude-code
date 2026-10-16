// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Le}from"./chunk-71kjn9x8.js";import{userInfo as s}from"os";var t="com.anthropic.claudecode",z5n="HKLM\\SOFTWARE\\Policies\\ClaudeCode",V5n="HKCU\\SOFTWARE\\Policies\\ClaudeCode",Mcn="Settings",VLo="/usr/bin/plutil",PGs=["-convert","json","-o","-","--"],IGs=["-lint","-s","--"],OGs=5000,fNr=2097152,HGs="/mnt/c/Windows/System32/reg.exe",j0="/mnt/c/Program Files/ClaudeCode";function xUt(){return!1}function MGs(){let e="";try{e=s().username}catch{}let r=[];if(e)r.push({path:`/Library/Managed Preferences/${e}/${t}.plist`,label:"per-user managed preferences"});return r.push({path:`/Library/Managed Preferences/${t}.plist`,label:"device-level managed preferences"}),r}
export{z5n,V5n,Mcn,VLo,PGs,IGs,OGs,fNr,HGs,j0,xUt,MGs};
