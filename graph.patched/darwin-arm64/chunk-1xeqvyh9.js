// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{_N,VD,U2}from"./chunk-zavfjjks.js";import"./chunk-0cqkb30y.js";import{Se}from"./chunk-y8wd7we8.js";var t=Se(_N()),e=Se(VD()),o=Se(U2());class r extends t.OTLPExporterBase{constructor(p={}){super(o.createOtlpHttpExportDelegate(o.convertLegacyHttpOptions(p,"LOGS","v1/logs",{"Content-Type":"application/x-protobuf"}),e.ProtobufLogsSerializer))}}export{r as OTLPLogExporter};
