// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{Bi}from"./chunk-h6md7820.js";import{T,Ce}from"./chunk-bge67taw.js";var d=T(function(t){Object.defineProperty(t,"__esModule",{value:!0});t.getMachineId=void 0;var c=Ce("fs"),a=Bi();async function s(){let i=["/etc/machine-id","/var/lib/dbus/machine-id"];for(let n of i)try{return(await c.promises.readFile(n,{encoding:"utf8"})).trim()}catch(e){a.diag.debug(`error reading machine id: ${e}`)}return}t.getMachineId=s});export default d();
