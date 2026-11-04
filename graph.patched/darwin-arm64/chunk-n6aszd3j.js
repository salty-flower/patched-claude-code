// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{xJ,B9,Iae}from"./chunk-36xhv122.js";import"./chunk-wsb8me6j.js";import{Oe}from"./chunk-tngcxdsg.js";var t=Oe(xJ()),e=Oe(B9()),o=Oe(Iae());class r extends t.OTLPExporterBase{constructor(p={}){super(o.createOtlpHttpExportDelegate(o.convertLegacyHttpOptions(p,"LOGS","v1/logs",{"Content-Type":"application/x-protobuf"}),e.ProtobufLogsSerializer))}}export{r as OTLPLogExporter};
