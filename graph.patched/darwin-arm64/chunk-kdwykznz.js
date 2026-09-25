// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{Re}from"./chunk-q9zds4dm.js";import{userInfo as s}from"os";var t="com.anthropic.claudecode",Win="HKLM\\SOFTWARE\\Policies\\ClaudeCode",Gin="HKCU\\SOFTWARE\\Policies\\ClaudeCode",ZOt="Settings",AIr="/usr/bin/plutil",fCo=["-convert","json","-o","-","--"],mCo=["-lint","-s","--"],gCo=5000,ojn=2097152,hCo="/mnt/c/Windows/System32/reg.exe",cO="/mnt/c/Program Files/ClaudeCode";function llt(){return!1}function yCo(){let e="";try{e=s().username}catch{}let r=[];if(e)r.push({path:`/Library/Managed Preferences/${e}/${t}.plist`,label:"per-user managed preferences"});return r.push({path:`/Library/Managed Preferences/${t}.plist`,label:"device-level managed preferences"}),r}
export{Win,Gin,ZOt,AIr,fCo,mCo,gCo,ojn,hCo,cO,llt,yCo};
