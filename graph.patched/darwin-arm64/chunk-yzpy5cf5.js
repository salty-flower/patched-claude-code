// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Me}from"./chunk-8drz5tx3.js";import{userInfo as s}from"os";var t="com.anthropic.claudecode",fFn="HKLM\\SOFTWARE\\Policies\\ClaudeCode",mFn="HKCU\\SOFTWARE\\Policies\\ClaudeCode",Z7t="Settings",qmo="/usr/bin/plutil",p_s=["-convert","json","-o","-","--"],f_s=["-lint","-s","--"],m_s=5000,LSr=2097152,g_s="/mnt/c/Windows/System32/reg.exe",o0="/mnt/c/Program Files/ClaudeCode";function Cxt(){return!1}function h_s(){let e="";try{e=s().username}catch{}let r=[];if(e)r.push({path:`/Library/Managed Preferences/${e}/${t}.plist`,label:"per-user managed preferences"});return r.push({path:`/Library/Managed Preferences/${t}.plist`,label:"device-level managed preferences"}),r}
export{fFn,mFn,Z7t,qmo,p_s,f_s,m_s,LSr,g_s,o0,Cxt,h_s};
