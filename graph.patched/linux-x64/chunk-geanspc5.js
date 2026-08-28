// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{kBe}from"./chunk-eqnw0pk4.js";import{fr}from"./chunk-zhb2wr7q.js";import{d}from"./chunk-by569dsf.js";var a=d(function(i){Object.defineProperty(i,"__esModule",{value:!0});i.getMachineId=void 0;var s=kBe(),u=fr();async function o(){try{let t=(await(0,s.execAsync)('ioreg -rd1 -c "IOPlatformExpertDevice"')).stdout.split(`
`).find((c)=>c.includes("IOPlatformUUID"));if(!t)return;let r=t.split('" = "');if(r.length===2)return r[1].slice(0,-1)}catch(e){u.diag.debug(`error reading machine id: ${e}`)}return}i.getMachineId=o});export default a();
