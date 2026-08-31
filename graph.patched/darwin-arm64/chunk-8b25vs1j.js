// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{ue}from"./chunk-rqyyny1n.js";import{userInfo as s}from"os";var t="com.anthropic.claudecode",Zwt="HKLM\\SOFTWARE\\Policies\\ClaudeCode",eTt="HKCU\\SOFTWARE\\Policies\\ClaudeCode",NNe="Settings",Dor="/usr/bin/plutil",Oor=["-convert","json","-o","-","--"],Lor=5000,kEn="/mnt/c/Windows/System32/reg.exe",s0="/mnt/c/Program Files/ClaudeCode";function FNe(){return!1}function Mor(){let e="";try{e=s().username}catch{}let r=[];if(e)r.push({path:`/Library/Managed Preferences/${e}/${t}.plist`,label:"per-user managed preferences"});return r.push({path:`/Library/Managed Preferences/${t}.plist`,label:"device-level managed preferences"}),r}
export{Zwt,eTt,NNe,Dor,Oor,Lor,kEn,s0,FNe,Mor};
