// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{$5t}from"./chunk-g48h63bc.js";import{d6,pV}from"./chunk-y0ndwk2f.js";import"./chunk-82a3r7zy.js";import{R}from"./chunk-ye9f1kvm.js";var u=R(function(s){Object.defineProperty(s,"__esModule",{value:!0});s.OTLPLogExporter=void 0;var e=$5t(),t=pV(),o=d6();class p extends o.OTLPExporterBase{constructor(L={}){super(e.createOtlpGrpcExportDelegate(e.convertLegacyOtlpGrpcOptions(L,"LOGS"),t.ProtobufLogsSerializer,"LogsExportService","/opentelemetry.proto.collector.logs.v1.LogsService/Export"))}}s.OTLPLogExporter=p});var n=R(function(r){Object.defineProperty(r,"__esModule",{value:!0});r.OTLPLogExporter=void 0;var i=u();Object.defineProperty(r,"OTLPLogExporter",{enumerable:!0,get:function(){return i.OTLPLogExporter}})});export default n();
