// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{bte}from"./chunk-yvh97n7n.js";import{Ra}from"./chunk-tfd4rw1n.js";import{aft}from"./chunk-pvyjzfv6.js";import{FU}from"./chunk-mj52rk1p.js";function f_e(){return bte().status==="ok"&&Ra()!==null}function o(){let t=Ra();if(t===null)return null;let n=FU(t);return n!==null&&typeof n==="object"&&!Array.isArray(n)?n:null}function $cn(){let t=o(),n=t!==null&&"act_as_bot"in t?t.act_as_bot:void 0;return n===!0||n==="true"}function kVn(){let t=o();if(t===null)return!1;let n=(e)=>typeof e==="string"&&e!=="";return!(("account_uuid"in t)||("sub"in t))&&"org_service_name"in t&&n(t.org_service_name)&&"code_agent_id"in t&&n(t.code_agent_id)}var iFt="/v1/code/agent-proxy",s=/^\/v1\/code\/sessions\/([^/]+)\/?$/;function r(){if(aft()){let t=bte();if(t.status==="ok"){let n=s.exec(new URL(t.url).pathname)?.[1];if(n!==void 0)return`/v1/code/sessions/${n}/agent-proxy`}}return iFt}function TVn(t){let n=t.startsWith("/api/frame/")?t.slice(10):t;return`${r()}/frame${n}`}var o_="artifact_mount";function m_e(t,n){return`${r()}/artifact/${encodeURIComponent(t)}${n}`}function h_e(t){return{"x-frame-asset-token":t}}
export{f_e,$cn,kVn,iFt,TVn,o_,m_e,h_e};
