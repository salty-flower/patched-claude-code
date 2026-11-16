// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{_0n}from"./chunk-geb5z5bt.js";import{Jte,uJ}from"./chunk-6js915kg.js";import"./chunk-zv3y9dv3.js";import{D}from"./chunk-jxn7cbw7.js";var u=D(function(s){Object.defineProperty(s,"__esModule",{value:!0});s.OTLPLogExporter=void 0;var e=_0n(),t=uJ(),o=Jte();class p extends o.OTLPExporterBase{constructor(L={}){super(e.createOtlpGrpcExportDelegate(e.convertLegacyOtlpGrpcOptions(L,"LOGS"),t.ProtobufLogsSerializer,"LogsExportService","/opentelemetry.proto.collector.logs.v1.LogsService/Export"))}}s.OTLPLogExporter=p});var n=D(function(r){Object.defineProperty(r,"__esModule",{value:!0});r.OTLPLogExporter=void 0;var i=u();Object.defineProperty(r,"OTLPLogExporter",{enumerable:!0,get:function(){return i.OTLPLogExporter}})});export default n();
