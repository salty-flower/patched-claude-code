// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{dyr}from"./chunk-ee34y854.js";import{uJ,Epe}from"./chunk-6js915kg.js";import"./chunk-zv3y9dv3.js";import{De}from"./chunk-jxn7cbw7.js";var o=De(dyr()),p=De(uJ()),r=De(Epe());class t extends o.OTLPMetricExporterBase{constructor(e){super(r.createOtlpHttpExportDelegate(r.convertLegacyHttpOptions(e??{},"METRICS","v1/metrics",{"Content-Type":"application/x-protobuf"}),p.ProtobufMetricsSerializer),e)}}export{t as OTLPMetricExporter};
