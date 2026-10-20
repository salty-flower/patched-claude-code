// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{c}from"./chunk-ny2cqbmq.js";import{i}from"./chunk-dj0gyv94.js";import{ur}from"./chunk-b8vhamvd.js";import{Pu}from"./chunk-7gmqb108.js";var a=[ur,"raw.githubusercontent.com","objects.githubusercontent.com","gist.githubusercontent.com","gitlab.com","bitbucket.org","codeberg.org","dev.azure.com","ssh.dev.azure.com","storage.googleapis.com"];function l(t){let e,n=/^[^@/]+@([^:/]+):/.exec(t);if(n)e=n[1];else try{e=new URL(t).hostname}catch{return"unknown"}let u=e.toLowerCase();return a.find((r)=>r===u)??"other"}function m(t){return t.includes(`anthropics/${Pu}`)}function PM(t,e,n,u,r,s,o){i("tengu_plugin_remote_fetch",{source:c(t),host:c(e?l(e):"unknown"),is_official:t==="plugin_catalog"||(e?m(e):!1),outcome:c(n),duration_ms:Math.round(u),...r&&{error_kind:c(r)},...s!==void 0?{is_directory:s}:{},...o&&{submodule_selection:c(o.fetched==="all"?"all":"selected"),submodules_recorded:o.recorded,submodules_fetched:o.fetched==="all"?o.recorded:o.fetched}})}function DK(t){let e=String(t?.message??t);if(/ENOTFOUND|ECONNREFUSED|EAI_AGAIN|Could not resolve host|Connection refused/i.test(e))return"dns_or_refused";if(/ETIMEDOUT|timed out|timeout/i.test(e))return"timeout";if(/ECONNRESET|socket hang up|Connection reset by peer|remote end hung up/i.test(e))return"conn_reset";if(/403|401|authentication|permission denied/i.test(e))return"auth";if(/404|not found|repository not found/i.test(e))return"not_found";if(/certificate|SSL|TLS|unable to get local issuer/i.test(e))return"tls";if(/Invalid response format|Invalid marketplace schema/i.test(e))return"invalid_schema";return"other"}
export{PM,DK};
