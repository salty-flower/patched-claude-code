// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{Ql}from"./chunk-nxc9btm2.js";import{O,je}from"./chunk-tngcxdsg.js";var d=O(function(i){Object.defineProperty(i,"__esModule",{value:!0});i.getMachineId=void 0;var t=je("fs"),r=Ql();async function s(){let c=["/etc/machine-id","/var/lib/dbus/machine-id"];for(let a of c)try{return(await t.promises.readFile(a,{encoding:"utf8"})).trim()}catch(e){r.diag.debug(`error reading machine id: ${e}`)}return}i.getMachineId=s});export default d();
