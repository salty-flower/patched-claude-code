// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{t8n}from"./chunk-ddmccyhv.js";import{Pd}from"./chunk-5z5dtbrz.js";import{D,Ve}from"./chunk-jxn7cbw7.js";var u=D(function(n){Object.defineProperty(n,"__esModule",{value:!0});n.getMachineId=void 0;var r=Ve("fs"),i=t8n(),t=Pd();async function c(){try{return(await r.promises.readFile("/etc/hostid",{encoding:"utf8"})).trim()}catch(e){t.diag.debug(`error reading machine id: ${e}`)}try{return(await i.execAsync("kenv -q smbios.system.uuid")).stdout.trim()}catch(e){t.diag.debug(`error reading machine id: ${e}`)}return}n.getMachineId=c});export default u();
