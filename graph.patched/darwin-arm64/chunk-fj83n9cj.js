// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{vHn}from"./chunk-qbnkn19b.js";import{Ql}from"./chunk-nxc9btm2.js";import{O,je}from"./chunk-tngcxdsg.js";var u=O(function(n){Object.defineProperty(n,"__esModule",{value:!0});n.getMachineId=void 0;var r=je("fs"),i=vHn(),t=Ql();async function c(){try{return(await r.promises.readFile("/etc/hostid",{encoding:"utf8"})).trim()}catch(e){t.diag.debug(`error reading machine id: ${e}`)}try{return(await i.execAsync("kenv -q smbios.system.uuid")).stdout.trim()}catch(e){t.diag.debug(`error reading machine id: ${e}`)}return}n.getMachineId=c});export default u();
