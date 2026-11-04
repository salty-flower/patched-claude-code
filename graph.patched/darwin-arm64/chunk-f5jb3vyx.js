// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{vHn}from"./chunk-qbnkn19b.js";import{Ql}from"./chunk-nxc9btm2.js";import{O,je}from"./chunk-tngcxdsg.js";var d=O(function(s){Object.defineProperty(s,"__esModule",{value:!0});s.getMachineId=void 0;var e=je("process"),n=vHn(),c=Ql();async function o(){let t="%windir%\\System32\\REG.exe";if(e.arch==="ia32"&&"PROCESSOR_ARCHITEW6432"in e.env)t="%windir%\\sysnative\\cmd.exe /c "+t;try{let i=(await n.execAsync(`${t} QUERY HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Cryptography /v MachineGuid`)).stdout.split("REG_SZ");if(i.length===2)return i[1].trim()}catch(r){c.diag.debug(`error reading machine id: ${r}`)}return}s.getMachineId=o});export default d();
