// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{$Zn}from"./chunk-s8d3q5dt.js";import{Pwt}from"./chunk-pyjx5sny.js";import{Ae}from"./chunk-gxqt7wa5.js";import{Be}from"./chunk-8xa87pyw.js";import{userInfo as n}from"os";var t="com.anthropic.claudecode",V7n="HKLM\\SOFTWARE\\Policies\\ClaudeCode",K7n="HKCU\\SOFTWARE\\Policies\\ClaudeCode",Ymn="Settings",m2o="/usr/bin/plutil",B8s=["-convert","json","-o","-","--"],j8s=["-lint","-s","--"],W8s=5000,Tjr=2097152,YGe="/mnt/c/Windows/System32/reg.exe",mP="/mnt/c/Program Files/ClaudeCode",r=Ae({isCoworkCloud:void 0},(e)=>{e.isCoworkCloud=void 0});function Fjt(){if(r.isCoworkCloud===void 0){let e=process.env.CLAUDE_CODE_ENTRYPOINT;r.isCoworkCloud=$Zn.some((o)=>o===e)}return r.isCoworkCloud}function G8s(){r.isCoworkCloud=void 0,Fjt()}function $jt(){return!1}function z8s(){let e="";try{e=n().username}catch{}let o=[];if(e)o.push({path:`/Library/Managed Preferences/${e}/${t}.plist`,label:"per-user managed preferences"});return o.push({path:`/Library/Managed Preferences/${t}.plist`,label:"device-level managed preferences"}),o}
export{V7n,K7n,Ymn,m2o,B8s,j8s,W8s,Tjr,YGe,mP,Fjt,G8s,$jt,z8s};
