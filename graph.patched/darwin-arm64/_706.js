// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{Exd as s,Hxd as o}from"./_839.js";import{userInfo as n}from"os";function m(){return!1}function R(){let e="";try{e=n().username}catch{}let r=[];if(e)r.push({path:`/Library/Managed Preferences/${e}/${t}.plist`,label:"per-user managed preferences"});return r.push({path:`/Library/Managed Preferences/${t}.plist`,label:"device-level managed preferences"}),r}var t="com.anthropic.claudecode",p="HKLM\\SOFTWARE\\Policies\\ClaudeCode",l="HKCU\\SOFTWARE\\Policies\\ClaudeCode",_="Settings",E="/usr/bin/plutil",u,S=5000,f="/mnt/c/Windows/System32/reg.exe",d="/mnt/c/Program Files/ClaudeCode";var a=s(()=>{u=["-convert","json","-o","-","--"]});
export{p as iIc,l as jIc,_ as kIc,E as lIc,u as mIc,S as nIc,f as oIc,d as pIc,m as qIc,R as rIc,a as sIc};
