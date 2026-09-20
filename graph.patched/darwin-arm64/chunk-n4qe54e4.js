// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{CQe}from"./chunk-2ymzjxjk.js";import{_N,VD}from"./chunk-zavfjjks.js";import"./chunk-0cqkb30y.js";import{E}from"./chunk-y8wd7we8.js";var s=E(function(o){Object.defineProperty(o,"__esModule",{value:!0});o.OTLPLogExporter=void 0;var r=CQe(),c=VD(),l=_N();class t extends l.OTLPExporterBase{constructor(_={}){super(r.createOtlpGrpcExportDelegate(r.convertLegacyOtlpGrpcOptions(_,"LOGS"),c.ProtobufLogsSerializer,"LogsExportService","/opentelemetry.proto.collector.logs.v1.LogsService/Export"))}}o.OTLPLogExporter=t});var L=E(function(e){Object.defineProperty(e,"__esModule",{value:!0});e.OTLPLogExporter=void 0;var u=s();Object.defineProperty(e,"OTLPLogExporter",{enumerable:!0,get:function(){return u.OTLPLogExporter}})});export default L();
