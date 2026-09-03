// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{wO,iI,lF}from"./chunk-9664bvyv.js";import"./chunk-rtn1b1w3.js";import{q}from"./chunk-bge67taw.js";var e=q(wO(),1),o=q(iI(),1),r=q(lF(),1);class t extends e.OTLPExporterBase{constructor(p={}){super(r.createOtlpHttpExportDelegate(r.convertLegacyHttpOptions(p,"TRACES","v1/traces",{"Content-Type":"application/x-protobuf"}),o.ProtobufTraceSerializer))}}export{t as OTLPTraceExporter};
