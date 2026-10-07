// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{Pe}from"./chunk-grvgfqgm.js";var xMn="HKLM\\SOFTWARE\\Policies\\ClaudeCode",PMn="HKCU\\SOFTWARE\\Policies\\ClaudeCode",O5t="Settings";var $as=5000,dio=2097152,Fas="/mnt/c/Windows/System32/reg.exe",TO="/mnt/c/Program Files/ClaudeCode";function GTt(){if(process.env.WSL_DISTRO_NAME)return!0;try{let e=Pe("fs").readFileSync("/proc/version","utf8").toLowerCase();return e.includes("microsoft")||e.includes("wsl")}catch{return!1}}
export{xMn,PMn,O5t,$as,dio,Fas,TO,GTt};
