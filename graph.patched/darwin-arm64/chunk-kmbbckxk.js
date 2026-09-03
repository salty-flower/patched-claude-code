// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{Ce}from"./chunk-bge67taw.js";import{userInfo as s}from"os";var t="com.anthropic.claudecode",sCt="HKLM\\SOFTWARE\\Policies\\ClaudeCode",aCt="HKCU\\SOFTWARE\\Policies\\ClaudeCode",Q$e="Settings",Sar="/usr/bin/plutil",bar=["-convert","json","-o","-","--"],Tar=5000,SRn="/mnt/c/Windows/System32/reg.exe",Hx="/mnt/c/Program Files/ClaudeCode";function Z$e(){return!1}function war(){let e="";try{e=s().username}catch{}let r=[];if(e)r.push({path:`/Library/Managed Preferences/${e}/${t}.plist`,label:"per-user managed preferences"});return r.push({path:`/Library/Managed Preferences/${t}.plist`,label:"device-level managed preferences"}),r}
export{sCt,aCt,Q$e,Sar,bar,Tar,SRn,Hx,Z$e,war};
