// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{W3e}from"./chunk-xyph8x0z.js";import{$O,RI}from"./chunk-9wfwjq4h.js";import"./chunk-q7gs7k5v.js";import{w}from"./chunk-agfzafth.js";var s=w(function(o){Object.defineProperty(o,"__esModule",{value:!0});o.OTLPLogExporter=void 0;var r=W3e(),u=RI(),L=$O();class t extends L.OTLPExporterBase{constructor(c={}){super((0,r.createOtlpGrpcExportDelegate)((0,r.convertLegacyOtlpGrpcOptions)(c,"LOGS"),u.ProtobufLogsSerializer,"LogsExportService","/opentelemetry.proto.collector.logs.v1.LogsService/Export"))}}o.OTLPLogExporter=t});var n=w(function(e){Object.defineProperty(e,"__esModule",{value:!0});e.OTLPLogExporter=void 0;var i=s();Object.defineProperty(e,"OTLPLogExporter",{enumerable:!0,get:function(){return i.OTLPLogExporter}})});export default n();
