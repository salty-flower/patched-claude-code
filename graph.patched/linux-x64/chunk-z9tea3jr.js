// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Otr}from"./chunk-hp5zbcxt.js";import{j5t}from"./chunk-j8w7gwdb.js";import{fe}from"./chunk-c63g0fmv.js";import{Ve}from"./chunk-jxn7cbw7.js";var f5r="HKLM\\SOFTWARE\\Policies\\ClaudeCode",p5r="HKCU\\SOFTWARE\\Policies\\ClaudeCode",fQn="Settings";var m5r=5000,nVo=60000,lri=2097152,zlt="/mnt/c/Windows/System32/reg.exe",CDa="unable to find the specified registry key or value",CH="/mnt/c/Program Files/ClaudeCode",o=fe({isCoworkCloud:void 0},(e)=>{e.isCoworkCloud=void 0});function HSn(){if(o.isCoworkCloud===void 0){let e=process.env.CLAUDE_CODE_ENTRYPOINT;o.isCoworkCloud=Otr.some((r)=>r===e)}return o.isCoworkCloud}function RDa(){o.isCoworkCloud=void 0,HSn()}function NSn(){let e=HSn();if(process.env.WSL_DISTRO_NAME&&!e)return!0;try{let r=Ve("fs").readFileSync("/proc/version","utf8").toLowerCase();return j5t(r)}catch{return!1}}
export{f5r,p5r,fQn,m5r,nVo,lri,zlt,CDa,CH,HSn,RDa,NSn};
