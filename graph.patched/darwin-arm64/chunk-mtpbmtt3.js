// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{ve}from"./chunk-agfzafth.js";import{userInfo as s}from"os";var t="com.anthropic.claudecode",Yvt="HKLM\\SOFTWARE\\Policies\\ClaudeCode",Jvt="HKCU\\SOFTWARE\\Policies\\ClaudeCode",ket="Settings",SHn="/usr/bin/plutil",Bur=["-convert","json","-o","-","--"],jur=["-lint","-s","--"],Wur=5000,g8t=2097152,Gur="/mnt/c/Windows/System32/reg.exe",jx="/mnt/c/Program Files/ClaudeCode";function HBe(){return!1}function qur(){let e="";try{e=s().username}catch{}let r=[];if(e)r.push({path:`/Library/Managed Preferences/${e}/${t}.plist`,label:"per-user managed preferences"});return r.push({path:`/Library/Managed Preferences/${t}.plist`,label:"device-level managed preferences"}),r}
export{Yvt,Jvt,ket,SHn,Bur,jur,Wur,g8t,Gur,jx,HBe,qur};
