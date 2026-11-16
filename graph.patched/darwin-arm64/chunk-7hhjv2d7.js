// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Iyr}from"./chunk-jymbgn25.js";import{bJ,Ope}from"./chunk-grzmwkm3.js";import"./chunk-5edb0yta.js";import{De}from"./chunk-fn3dzsec.js";var o=De(Iyr()),p=De(bJ()),r=De(Ope());class t extends o.OTLPMetricExporterBase{constructor(e){super(r.createOtlpHttpExportDelegate(r.convertLegacyHttpOptions(e??{},"METRICS","v1/metrics",{"Content-Type":"application/x-protobuf"}),p.ProtobufMetricsSerializer),e)}}export{t as OTLPMetricExporter};
