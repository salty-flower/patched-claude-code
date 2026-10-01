// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{Ie}from"./chunk-pj3wn6z3.js";import{userInfo as s}from"os";var t="com.anthropic.claudecode",myn="HKLM\\SOFTWARE\\Policies\\ClaudeCode",gyn="HKCU\\SOFTWARE\\Policies\\ClaudeCode",hBt="Settings",j6r="/usr/bin/plutil",_2o=["-convert","json","-o","-","--"],S2o=["-lint","-s","--"],b2o=5000,v8n=2097152,w2o="/mnt/c/Windows/System32/reg.exe",ZD="/mnt/c/Program Files/ClaudeCode";function Lmt(){return!1}function E2o(){let e="";try{e=s().username}catch{}let r=[];if(e)r.push({path:`/Library/Managed Preferences/${e}/${t}.plist`,label:"per-user managed preferences"});return r.push({path:`/Library/Managed Preferences/${t}.plist`,label:"device-level managed preferences"}),r}
export{myn,gyn,hBt,j6r,_2o,S2o,b2o,v8n,w2o,ZD,Lmt,E2o};
