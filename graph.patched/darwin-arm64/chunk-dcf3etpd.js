// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{nt}from"./chunk-pc3a0ej6.js";import{h}from"./chunk-s0y4aasp.js";import{S,V}from"./chunk-cmkfpkth.js";import{Uf}from"./chunk-j7mzcbtg.js";import{i,A,k,nn,Le,F}from"./chunk-ca00k0wg.js";var a=h(()=>nn({version:F(1),session_ingress_token:i().min(1),api_base_url:i(),sources:k(nn({type:i(),git_info:nn({type:i(),repo:i(),ref:i().nullish()}).optional()})).optional().catch(void 0),auth:k(nn({type:i(),token:i()})).optional().catch(void 0),claude_code_args:Le(i(),i()).optional().catch(void 0),mcp_config:nn({content:i(),path:i().optional(),mode:A().optional()}).optional().catch(void 0),environment_variables:Le(i(),i()).optional().catch(void 0)}));function jDn(o){let r=Buffer.from(o,"base64url").toString("utf-8"),e=V(r),t=a().safeParse(e);if(t.success)return t.data;let n=new Set(t.error.issues.map((s)=>s.path[0]));if(n.has(void 0)||n.has("version"))throw Error(`Unsupported work secret version: ${e&&typeof e==="object"&&"version"in e?e.version:"unknown"}`);if(n.has("session_ingress_token"))throw Error("Invalid work secret: missing or empty session_ingress_token");throw Error("Invalid work secret: missing api_base_url")}function rxt(o,r){if(o===r)return!0;let e=o.slice(o.lastIndexOf("_")+1),t=r.slice(r.lastIndexOf("_")+1);return e.length>=4&&e===t}function eUe(o,r){return Uf(r,"sessionId"),`${o.replace(/\/+$/,"")}/v1/code/sessions/${r}`}async function Int(o,r){let e=await nt.post(`${o}/worker/register`,{},{headers:{Authorization:`Bearer ${r}`,"Content-Type":"application/json","anthropic-version":"2023-06-01"},timeout:1e4}),t=e.data?.worker_epoch,n=typeof t==="string"?Number(t):t;if(typeof n!=="number"||!Number.isFinite(n)||!Number.isSafeInteger(n))throw Error(`registerWorker: invalid worker_epoch in response: ${S(e.data)}`);return n}
export{jDn,rxt,eUe,Int};
