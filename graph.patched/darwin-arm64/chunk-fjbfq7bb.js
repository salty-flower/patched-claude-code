// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{CQe}from"./chunk-2ymzjxjk.js";import{_N,VD}from"./chunk-zavfjjks.js";import"./chunk-0cqkb30y.js";import{E}from"./chunk-y8wd7we8.js";var c=E(function(o){Object.defineProperty(o,"__esModule",{value:!0});o.OTLPTraceExporter=void 0;var r=CQe(),_=VD(),s=_N();class t extends s.OTLPExporterBase{constructor(a={}){super(r.createOtlpGrpcExportDelegate(r.convertLegacyOtlpGrpcOptions(a,"TRACES"),_.ProtobufTraceSerializer,"TraceExportService","/opentelemetry.proto.collector.trace.v1.TraceService/Export"))}}o.OTLPTraceExporter=t});var x=E(function(e){Object.defineProperty(e,"__esModule",{value:!0});e.OTLPTraceExporter=void 0;var l=c();Object.defineProperty(e,"OTLPTraceExporter",{enumerable:!0,get:function(){return l.OTLPTraceExporter}})});export default x();
