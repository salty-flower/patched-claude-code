// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{Ms}from"./chunk-e02s7cks.js";import{Got}from"./chunk-b25zq5qa.js";import{w}from"./chunk-bkhfcpjc.js";var o=w(function(i){Object.defineProperty(i,"__esModule",{value:!0});i.getMachineId=void 0;var s=Got(),d=Ms();async function u(){try{let t=(await(0,s.execAsync)('ioreg -rd1 -c "IOPlatformExpertDevice"')).stdout.split(`
`).find((c)=>c.includes("IOPlatformUUID"));if(!t)return;let r=t.split('" = "');if(r.length===2)return r[1].slice(0,-1)}catch(e){d.diag.debug(`error reading machine id: ${e}`)}return}i.getMachineId=u});export default o();
