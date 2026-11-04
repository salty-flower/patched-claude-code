// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{vHn}from"./chunk-qbnkn19b.js";import{Ql}from"./chunk-nxc9btm2.js";import{O}from"./chunk-tngcxdsg.js";var o=O(function(c){Object.defineProperty(c,"__esModule",{value:!0});c.getMachineId=void 0;var i=vHn(),n=Ql();async function u(){try{let t=(await i.execAsync('ioreg -rd1 -c "IOPlatformExpertDevice"')).stdout.split(`
`).find((d)=>d.includes("IOPlatformUUID"));if(!t)return;let r=t.split('" = "');if(r.length===2)return r[1].slice(0,-1)}catch(e){n.diag.debug(`error reading machine id: ${e}`)}return}c.getMachineId=u});export default o();
