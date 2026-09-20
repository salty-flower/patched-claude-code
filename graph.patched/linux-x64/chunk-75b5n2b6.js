// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{At}from"./chunk-30p0nwys.js";var Lxn="ccr-triggers-2026-01-30";function Npr(t){if(!t)return;let e=new Date(t);return e.getTime()>0?e:void 0}async function $pr(t){let e=await At.get("/v1/code/triggers",{auth:"teleport-org",headers:{"anthropic-beta":Lxn},credentials:t});if(!e.ok)throw Error(e.reason==="no-auth"?e.detail:`triggers unavailable: ${e.reason}`);return e.data.data??[]}
export{Lxn,Npr,$pr};
