// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{PVe}from"./chunk-0f49rwck.js";import{pD,BI}from"./chunk-0qx6x4d4.js";import"./chunk-r84cgakm.js";import{w}from"./chunk-2cavdc9w.js";var s=w(function(o){Object.defineProperty(o,"__esModule",{value:!0});o.OTLPLogExporter=void 0;var r=PVe(),u=BI(),L=pD();class t extends L.OTLPExporterBase{constructor(c={}){super((0,r.createOtlpGrpcExportDelegate)((0,r.convertLegacyOtlpGrpcOptions)(c,"LOGS"),u.ProtobufLogsSerializer,"LogsExportService","/opentelemetry.proto.collector.logs.v1.LogsService/Export"))}}o.OTLPLogExporter=t});var n=w(function(e){Object.defineProperty(e,"__esModule",{value:!0});e.OTLPLogExporter=void 0;var i=s();Object.defineProperty(e,"OTLPLogExporter",{enumerable:!0,get:function(){return i.OTLPLogExporter}})});export default n();
