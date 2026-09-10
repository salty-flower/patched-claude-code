// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{Dpt}from"./chunk-87n4ah94.js";import{oqe}from"./chunk-d666r9bb.js";import{rI}from"./chunk-2f1xhghn.js";import"./chunk-79gjpe99.js";import{w}from"./chunk-bkhfcpjc.js";var i=w(function(c){Object.defineProperty(c,"__esModule",{value:!0});c.OTLPMetricExporter=void 0;var s=Dpt(),t=oqe(),u=rI();class o extends s.OTLPMetricExporterBase{constructor(r){super((0,t.createOtlpGrpcExportDelegate)((0,t.convertLegacyOtlpGrpcOptions)(r??{},"METRICS"),u.ProtobufMetricsSerializer,"MetricsExportService","/opentelemetry.proto.collector.metrics.v1.MetricsService/Export"),r)}}c.OTLPMetricExporter=o});var n=w(function(e){Object.defineProperty(e,"__esModule",{value:!0});e.OTLPMetricExporter=void 0;var l=i();Object.defineProperty(e,"OTLPMetricExporter",{enumerable:!0,get:function(){return l.OTLPMetricExporter}})});export default n();
