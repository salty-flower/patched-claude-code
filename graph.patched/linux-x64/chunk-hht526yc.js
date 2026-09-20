// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{Re}from"./chunk-bbmh8g33.js";var azt="HKLM\\SOFTWARE\\Policies\\ClaudeCode",lzt="HKCU\\SOFTWARE\\Policies\\ClaudeCode",wht="Settings";var GUr=5000,IXn=2097152,qUr="/mnt/c/Windows/System32/reg.exe",SI="/mnt/c/Program Files/ClaudeCode";function g8e(){if(process.env.WSL_DISTRO_NAME)return!0;try{let e=Re("fs").readFileSync("/proc/version","utf8").toLowerCase();return e.includes("microsoft")||e.includes("wsl")}catch{return!1}}
export{azt,lzt,wht,GUr,IXn,qUr,SI,g8e};
