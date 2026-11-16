// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{E9n}from"./chunk-ff6e9ga4.js";import{xd}from"./chunk-29cd2nzs.js";import{D,Ve}from"./chunk-fn3dzsec.js";var u=D(function(n){Object.defineProperty(n,"__esModule",{value:!0});n.getMachineId=void 0;var r=Ve("fs"),i=E9n(),t=xd();async function c(){try{return(await r.promises.readFile("/etc/hostid",{encoding:"utf8"})).trim()}catch(e){t.diag.debug(`error reading machine id: ${e}`)}try{return(await i.execAsync("kenv -q smbios.system.uuid")).stdout.trim()}catch(e){t.diag.debug(`error reading machine id: ${e}`)}return}n.getMachineId=c});export default u();
