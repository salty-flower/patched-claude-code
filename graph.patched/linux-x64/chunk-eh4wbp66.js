// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Jte,uJ,Epe}from"./chunk-6js915kg.js";import"./chunk-zv3y9dv3.js";import{De}from"./chunk-jxn7cbw7.js";var t=De(Jte()),e=De(uJ()),o=De(Epe());class r extends t.OTLPExporterBase{constructor(p={}){super(o.createOtlpHttpExportDelegate(o.convertLegacyHttpOptions(p,"LOGS","v1/logs",{"Content-Type":"application/x-protobuf"}),e.ProtobufLogsSerializer))}}export{r as OTLPLogExporter};
