// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{oyn}from"./chunk-r0y0xt1z.js";import{xJ,B9}from"./chunk-36xhv122.js";import"./chunk-wsb8me6j.js";import{O}from"./chunk-tngcxdsg.js";var u=O(function(s){Object.defineProperty(s,"__esModule",{value:!0});s.OTLPLogExporter=void 0;var e=oyn(),t=B9(),o=xJ();class p extends o.OTLPExporterBase{constructor(L={}){super(e.createOtlpGrpcExportDelegate(e.convertLegacyOtlpGrpcOptions(L,"LOGS"),t.ProtobufLogsSerializer,"LogsExportService","/opentelemetry.proto.collector.logs.v1.LogsService/Export"))}}s.OTLPLogExporter=p});var n=O(function(r){Object.defineProperty(r,"__esModule",{value:!0});r.OTLPLogExporter=void 0;var i=u();Object.defineProperty(r,"OTLPLogExporter",{enumerable:!0,get:function(){return i.OTLPLogExporter}})});export default n();
