// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{Ce}from"./chunk-3anr60sp.js";var NHt="HKLM\\SOFTWARE\\Policies\\ClaudeCode",FHt="HKCU\\SOFTWARE\\Policies\\ClaudeCode",yst="Settings";var Bhr=5000,g$n=2097152,jhr="/mnt/c/Windows/System32/reg.exe",mI="/mnt/c/Program Files/ClaudeCode";function xWe(){if(process.env.WSL_DISTRO_NAME)return!0;try{let e=Ce("fs").readFileSync("/proc/version","utf8").toLowerCase();return e.includes("microsoft")||e.includes("wsl")}catch{return!1}}
export{NHt,FHt,yst,Bhr,g$n,jhr,mI,xWe};
