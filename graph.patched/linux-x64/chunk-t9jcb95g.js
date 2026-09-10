// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{t}from"./chunk-cmg3b5hg.js";import{b,g}from"./chunk-t5df5mky.js";import{Q2,NV,dx,fN,vk}from"./chunk-2byjyg85.js";import{k$}from"./chunk-c7mt6ad3.js";async function g3e(){NV(),vk(),Q2(),fN(),dx.emit();try{await k$.rehome(),b("skill_directory_reload")}catch(r){t(`directory change: re-targeting the skill watcher failed (continuing with the previous watch): ${r}`,{level:"error"}),g("skill_directory_reload","rehome_failed")}}
export{g3e};
