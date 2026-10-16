// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Ne}from"./chunk-a2q6egn2.js";var x5n="HKLM\\SOFTWARE\\Policies\\ClaudeCode",P5n="HKCU\\SOFTWARE\\Policies\\ClaudeCode",_cn="Settings";var Jzs=5000,bLo=2097152,Qzs="/mnt/c/Windows/System32/reg.exe",$M="/mnt/c/Program Files/ClaudeCode";function yUt(){if(process.env.WSL_DISTRO_NAME)return!0;try{let e=Ne("fs").readFileSync("/proc/version","utf8").toLowerCase();return e.includes("microsoft")||e.includes("wsl")}catch{return!1}}
export{x5n,P5n,_cn,Jzs,bLo,Qzs,$M,yUt};
