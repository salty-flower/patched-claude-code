// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{Te}from"./chunk-2cavdc9w.js";import{userInfo as s}from"os";var t="com.anthropic.claudecode",iHt="HKLM\\SOFTWARE\\Policies\\ClaudeCode",aHt="HKCU\\SOFTWARE\\Policies\\ClaudeCode",prt="Settings",xOn="/usr/bin/plutil",ffr=["-convert","json","-o","-","--"],mfr=["-lint","-s","--"],gfr=5000,EXt=2097152,hfr="/mnt/c/Windows/System32/reg.exe",eH="/mnt/c/Program Files/ClaudeCode";function Bje(){return!1}function yfr(){let e="";try{e=s().username}catch{}let r=[];if(e)r.push({path:`/Library/Managed Preferences/${e}/${t}.plist`,label:"per-user managed preferences"});return r.push({path:`/Library/Managed Preferences/${t}.plist`,label:"device-level managed preferences"}),r}
export{iHt,aHt,prt,xOn,ffr,mfr,gfr,EXt,hfr,eH,Bje,yfr};
