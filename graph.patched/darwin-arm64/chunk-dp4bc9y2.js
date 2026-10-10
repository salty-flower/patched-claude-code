// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Le}from"./chunk-txt1tvjz.js";import{userInfo as s}from"os";var t="com.anthropic.claudecode",z2n="HKLM\\SOFTWARE\\Policies\\ClaudeCode",V2n="HKCU\\SOFTWARE\\Policies\\ClaudeCode",snn="Settings",avo="/usr/bin/plutil",kxs=["-convert","json","-o","-","--"],Axs=["-lint","-s","--"],Cxs=5000,cCr=2097152,Txs="/mnt/c/Windows/System32/reg.exe",wH="/mnt/c/Program Files/ClaudeCode";function Y0t(){return!1}function Rxs(){let e="";try{e=s().username}catch{}let r=[];if(e)r.push({path:`/Library/Managed Preferences/${e}/${t}.plist`,label:"per-user managed preferences"});return r.push({path:`/Library/Managed Preferences/${t}.plist`,label:"device-level managed preferences"}),r}
export{z2n,V2n,snn,avo,kxs,Axs,Cxs,cCr,Txs,wH,Y0t,Rxs};
