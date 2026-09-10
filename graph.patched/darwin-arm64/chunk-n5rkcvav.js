// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{ke}from"./chunk-bkhfcpjc.js";import{userInfo as s}from"os";var t="com.anthropic.claudecode",tIt="HKLM\\SOFTWARE\\Policies\\ClaudeCode",nIt="HKCU\\SOFTWARE\\Policies\\ClaudeCode",Pst="Settings",zNn="/usr/bin/plutil",Ayr=["-convert","json","-o","-","--"],vyr=["-lint","-s","--"],Cyr=5000,bZt=2097152,Tyr="/mnt/c/Windows/System32/reg.exe",AH="/mnt/c/Program Files/ClaudeCode";function UWe(){return!1}function kyr(){let e="";try{e=s().username}catch{}let r=[];if(e)r.push({path:`/Library/Managed Preferences/${e}/${t}.plist`,label:"per-user managed preferences"});return r.push({path:`/Library/Managed Preferences/${t}.plist`,label:"device-level managed preferences"}),r}
export{tIt,nIt,Pst,zNn,Ayr,vyr,Cyr,bZt,Tyr,AH,UWe,kyr};
