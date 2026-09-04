// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{$O,RI,vF}from"./chunk-9wfwjq4h.js";import"./chunk-q7gs7k5v.js";import{G}from"./chunk-agfzafth.js";var t=G($O(),1),o=G(RI(),1),r=G(vF(),1);class e extends t.OTLPExporterBase{constructor(p={}){super(r.createOtlpHttpExportDelegate(r.convertLegacyHttpOptions(p,"TRACES","v1/traces",{"Content-Type":"application/json"}),o.JsonTraceSerializer))}}export{e as OTLPTraceExporter};
