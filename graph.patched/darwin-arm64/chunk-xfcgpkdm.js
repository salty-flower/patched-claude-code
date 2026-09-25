// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{Ojt}from"./chunk-8mafqcm9.js";import{iht}from"./chunk-wdyb5myn.js";import{YF}from"./chunk-3s3d2kby.js";import"./chunk-5r946gjs.js";import{v}from"./chunk-q9zds4dm.js";var u=v(function(i){Object.defineProperty(i,"__esModule",{value:!0});i.OTLPMetricExporter=void 0;var o=Ojt(),e=iht(),c=YF();class p extends o.OTLPMetricExporterBase{constructor(t){super(e.createOtlpGrpcExportDelegate(e.convertLegacyOtlpGrpcOptions(t??{},"METRICS"),c.ProtobufMetricsSerializer,"MetricsExportService","/opentelemetry.proto.collector.metrics.v1.MetricsService/Export"),t)}}i.OTLPMetricExporter=p});var n=v(function(r){Object.defineProperty(r,"__esModule",{value:!0});r.OTLPMetricExporter=void 0;var l=u();Object.defineProperty(r,"OTLPMetricExporter",{enumerable:!0,get:function(){return l.OTLPMetricExporter}})});export default n();
