// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{Qut}from"./chunk-73mc16yw.js";import{PVe}from"./chunk-0f49rwck.js";import{BI}from"./chunk-0qx6x4d4.js";import"./chunk-r84cgakm.js";import{w}from"./chunk-2cavdc9w.js";var i=w(function(c){Object.defineProperty(c,"__esModule",{value:!0});c.OTLPMetricExporter=void 0;var s=Qut(),t=PVe(),u=BI();class o extends s.OTLPMetricExporterBase{constructor(r){super((0,t.createOtlpGrpcExportDelegate)((0,t.convertLegacyOtlpGrpcOptions)(r??{},"METRICS"),u.ProtobufMetricsSerializer,"MetricsExportService","/opentelemetry.proto.collector.metrics.v1.MetricsService/Export"),r)}}c.OTLPMetricExporter=o});var n=w(function(e){Object.defineProperty(e,"__esModule",{value:!0});e.OTLPMetricExporter=void 0;var l=i();Object.defineProperty(e,"OTLPMetricExporter",{enumerable:!0,get:function(){return l.OTLPMetricExporter}})});export default n();
