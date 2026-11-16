// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Jte,uJ,Epe}from"./chunk-6js915kg.js";import"./chunk-zv3y9dv3.js";import{De}from"./chunk-jxn7cbw7.js";var e=De(Jte()),o=De(uJ()),r=De(Epe());class t extends e.OTLPExporterBase{constructor(p={}){super(r.createOtlpHttpExportDelegate(r.convertLegacyHttpOptions(p,"TRACES","v1/traces",{"Content-Type":"application/x-protobuf"}),o.ProtobufTraceSerializer))}}export{t as OTLPTraceExporter};
