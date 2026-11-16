// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{MMn}from"./chunk-cxq3e47x.js";import{ane,bJ}from"./chunk-grzmwkm3.js";import"./chunk-5edb0yta.js";import{D}from"./chunk-fn3dzsec.js";var u=D(function(s){Object.defineProperty(s,"__esModule",{value:!0});s.OTLPLogExporter=void 0;var e=MMn(),t=bJ(),o=ane();class p extends o.OTLPExporterBase{constructor(L={}){super(e.createOtlpGrpcExportDelegate(e.convertLegacyOtlpGrpcOptions(L,"LOGS"),t.ProtobufLogsSerializer,"LogsExportService","/opentelemetry.proto.collector.logs.v1.LogsService/Export"))}}s.OTLPLogExporter=p});var n=D(function(r){Object.defineProperty(r,"__esModule",{value:!0});r.OTLPLogExporter=void 0;var i=u();Object.defineProperty(r,"OTLPLogExporter",{enumerable:!0,get:function(){return i.OTLPLogExporter}})});export default n();
