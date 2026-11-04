// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{K7n}from"./chunk-rkem7f1a.js";import{B9,Iae}from"./chunk-36xhv122.js";import"./chunk-wsb8me6j.js";import{Oe}from"./chunk-tngcxdsg.js";var o=Oe(K7n()),p=Oe(B9()),r=Oe(Iae());class t extends o.OTLPMetricExporterBase{constructor(e){super(r.createOtlpHttpExportDelegate(r.convertLegacyHttpOptions(e??{},"METRICS","v1/metrics",{"Content-Type":"application/x-protobuf"}),p.ProtobufMetricsSerializer),e)}}export{t as OTLPMetricExporter};
