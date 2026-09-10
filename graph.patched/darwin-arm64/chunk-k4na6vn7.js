// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{t}from"./chunk-wbbe5mtc.js";import{S,g}from"./chunk-a25t2bvk.js";import{l6,K3,_x,wF,Av}from"./chunk-e55d0yhx.js";import{PN}from"./chunk-qcca2nv8.js";async function Cqe(){K3(),Av(),l6(),wF(),_x.emit();try{await PN.rehome(),S("skill_directory_reload")}catch(r){t(`directory change: re-targeting the skill watcher failed (continuing with the previous watch): ${r}`,{level:"error"}),g("skill_directory_reload","rehome_failed")}}
export{Cqe};
