// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{_0n}from"./chunk-geb5z5bt.js";import{Jte,uJ}from"./chunk-6js915kg.js";import"./chunk-zv3y9dv3.js";import{D}from"./chunk-jxn7cbw7.js";var s=D(function(p){Object.defineProperty(p,"__esModule",{value:!0});p.OTLPTraceExporter=void 0;var e=_0n(),t=uJ(),o=Jte();class c extends o.OTLPExporterBase{constructor(u={}){super(e.createOtlpGrpcExportDelegate(e.convertLegacyOtlpGrpcOptions(u,"TRACES"),t.ProtobufTraceSerializer,"TraceExportService","/opentelemetry.proto.collector.trace.v1.TraceService/Export"))}}p.OTLPTraceExporter=c});var l=D(function(r){Object.defineProperty(r,"__esModule",{value:!0});r.OTLPTraceExporter=void 0;var i=s();Object.defineProperty(r,"OTLPTraceExporter",{enumerable:!0,get:function(){return i.OTLPTraceExporter}})});export default l();
