// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{Ee}from"./chunk-te942vjn.js";import{userInfo as s}from"os";var t="com.anthropic.claudecode",fCt="HKLM\\SOFTWARE\\Policies\\ClaudeCode",mCt="HKCU\\SOFTWARE\\Policies\\ClaudeCode",UQe="Settings",ARn="/usr/bin/plutil",Hor=["-convert","json","-o","-","--"],Ior=["-lint","-s","--"],Por=5000,OVt=2097152,Oor="/mnt/c/Windows/System32/reg.exe",dx="/mnt/c/Program Files/ClaudeCode";function oUe(){return!1}function Dor(){let e="";try{e=s().username}catch{}let r=[];if(e)r.push({path:`/Library/Managed Preferences/${e}/${t}.plist`,label:"per-user managed preferences"});return r.push({path:`/Library/Managed Preferences/${t}.plist`,label:"device-level managed preferences"}),r}
export{fCt,mCt,UQe,ARn,Hor,Ior,Por,OVt,Oor,dx,oUe,Dor};
