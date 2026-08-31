// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{$P,px,hN}from"./chunk-et0f1qnp.js";import"./chunk-hgwmc0x6.js";import{j}from"./chunk-5nnrmmhw.js";var e=j($P(),1),o=j(px(),1),r=j(hN(),1);class t extends e.OTLPExporterBase{constructor(p={}){super(r.createOtlpHttpExportDelegate(r.convertLegacyHttpOptions(p,"TRACES","v1/traces",{"Content-Type":"application/x-protobuf"}),o.ProtobufTraceSerializer))}}export{t as OTLPTraceExporter};
