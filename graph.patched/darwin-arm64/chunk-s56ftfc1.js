// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{Qlr}from"./chunk-ydtwpsfw.js";import{QTt}from"./chunk-vqcstnkm.js";import{$e}from"./chunk-meds60nn.js";import{Ee}from"./chunk-f9xfyhm1.js";import{userInfo as n}from"os";var t="com.anthropic.claudecode",qsr="HKLM\\SOFTWARE\\Policies\\ClaudeCode",Ysr="HKCU\\SOFTWARE\\Policies\\ClaudeCode",Jwn="Settings",cXo="/usr/bin/plutil",Wli=["-convert","json","-o","-","--"],Gli=["-lint","-s","--"],zli=5000,p5r=2097152,YKe="/mnt/c/Windows/System32/reg.exe",TI="/mnt/c/Program Files/ClaudeCode",r=Ee({isCoworkCloud:void 0},(e)=>{e.isCoworkCloud=void 0});function hKt(){if(r.isCoworkCloud===void 0){let e=process.env.CLAUDE_CODE_ENTRYPOINT;r.isCoworkCloud=Qlr.some((o)=>o===e)}return r.isCoworkCloud}function Vli(){r.isCoworkCloud=void 0,hKt()}function yKt(){return!1}function Kli(){let e="";try{e=n().username}catch{}let o=[];if(e)o.push({path:`/Library/Managed Preferences/${e}/${t}.plist`,label:"per-user managed preferences"});return o.push({path:`/Library/Managed Preferences/${t}.plist`,label:"device-level managed preferences"}),o}
export{qsr,Ysr,Jwn,cXo,Wli,Gli,zli,p5r,YKe,TI,hKt,Vli,yKt,Kli};
