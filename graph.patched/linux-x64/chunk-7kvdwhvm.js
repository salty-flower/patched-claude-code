// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{EZn}from"./chunk-sa3b9awd.js";import{kwt}from"./chunk-wqzch7fb.js";import{Ce}from"./chunk-81912758.js";import{Be}from"./chunk-ye9f1kvm.js";var PJn="HKLM\\SOFTWARE\\Policies\\ClaudeCode",IJn="HKCU\\SOFTWARE\\Policies\\ClaudeCode",Dmn="Settings";var l8s=5000,UWo=2097152,Bze="/mnt/c/Windows/System32/reg.exe",cP="/mnt/c/Program Files/ClaudeCode",o=Ce({isCoworkCloud:void 0},(e)=>{e.isCoworkCloud=void 0});function Ajt(){if(o.isCoworkCloud===void 0){let e=process.env.CLAUDE_CODE_ENTRYPOINT;o.isCoworkCloud=EZn.some((r)=>r===e)}return o.isCoworkCloud}function d8s(){o.isCoworkCloud=void 0,Ajt()}function Cjt(){let e=Ajt();if(process.env.WSL_DISTRO_NAME&&!e)return!0;try{let r=Be("fs").readFileSync("/proc/version","utf8").toLowerCase();return kwt(r)}catch{return!1}}
export{PJn,IJn,Dmn,l8s,UWo,Bze,cP,Ajt,d8s,Cjt};
