// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{t}from"./chunk-w930ag8r.js";import{S,g}from"./chunk-qc0xda2j.js";import{$j,k3,nx,ZN,lC}from"./chunk-tavwd3sq.js";import{dN}from"./chunk-qzpcjkq1.js";async function r4e(){k3(),lC(),$j(),ZN(),nx.emit();try{await dN.rehome(),S("skill_directory_reload")}catch(r){t(`directory change: re-targeting the skill watcher failed (continuing with the previous watch): ${r}`,{level:"error"}),g("skill_directory_reload","rehome_failed")}}
export{r4e};
