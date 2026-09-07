// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{Ar,uW}from"./chunk-4rr1ghkj.js";function uhn(n,e){return e&&!n.restricted?{...n,restricted:!0}:n}function zde(n){return Ar()||uW()||[n.permissionMode,n.inheritPermissionMode,n.model,n.fallbackModel,n.effort,n.agent,n.agents,n.settings,n.appendSystemPrompt,n.appendSystemPromptFile,n.systemPrompt,n.systemPromptFile,n.systemPromptSnapshot,n.replyOnResume,n.permissionPromptTool,n.settingSources,n.managedSettings].some((e)=>e!==void 0)||Boolean(n.disableSlashCommands)||n.sessionPersistence===!1||Boolean(n.dangerouslySkipPermissions)||Boolean(n.allowDangerouslySkipPermissions)||Boolean(n.allowBypass)||Boolean(n.restricted)||Boolean(n.ide)||Boolean(n.strictMcpConfig)||(n.allowedTools??[]).length>0||(n.disallowedTools??[]).length>0||(n.tools??[]).length>0||(n.mcpConfig??[]).length>0||(n.addDir??[]).length>0||(n.pluginDir??[]).length>0||(n.pluginDirNoMcp??[]).length>0}function dhn(n){return[n.systemPrompt,n.systemPromptFile,n.appendSystemPromptFile,n.permissionPromptTool,n.settingSources,n.managedSettings].some((e)=>e!==void 0)||(n.tools??[]).some((e)=>e!=="default")}var t5e="a custom system prompt, a tool allowlist, or restricted settings";
export{uhn,zde,dhn,t5e};
