// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{Fst}from"./chunk-51vfapkf.js";import{zWe}from"./chunk-sg17y2dk.js";import{iI}from"./chunk-9664bvyv.js";import"./chunk-rtn1b1w3.js";import{T}from"./chunk-bge67taw.js";var i=T(function(c){Object.defineProperty(c,"__esModule",{value:!0});c.OTLPMetricExporter=void 0;var s=Fst(),t=zWe(),u=iI();class o extends s.OTLPMetricExporterBase{constructor(r){super((0,t.createOtlpGrpcExportDelegate)((0,t.convertLegacyOtlpGrpcOptions)(r??{},"METRICS"),u.ProtobufMetricsSerializer,"MetricsExportService","/opentelemetry.proto.collector.metrics.v1.MetricsService/Export"),r)}}c.OTLPMetricExporter=o});var n=T(function(e){Object.defineProperty(e,"__esModule",{value:!0});e.OTLPMetricExporter=void 0;var l=i();Object.defineProperty(e,"OTLPMetricExporter",{enumerable:!0,get:function(){return l.OTLPMetricExporter}})});export default n();
