// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{tb,JSe}from"./chunk-sgyvc67j.js";import"./chunk-8yfx63va.js";import"./chunk-95e36pja.js";import"./chunk-0yrss36a.js";import{i}from"./chunk-z0p50v56.js";var m=async(t,o)=>{let e=!tb();return JSe(e),o.sessionState?.notifyInternalMetadataChanged({memory_toggled_off:e?!0:null}),i("tengu_memory_toggled",{toggled_off:e}),{type:"text",value:e?`Memory paused for this session \xB7 this conversation will not write or read new memories, and previously-loaded memory content should not be referenced.

Run /pause-memory again to resume.`:"Memory resumed \xB7 memory content may be referenced and new memories can be saved."}};export{m as call};
