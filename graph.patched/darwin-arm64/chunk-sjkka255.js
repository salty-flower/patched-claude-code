// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{oyn}from"./chunk-r0y0xt1z.js";import{xJ,B9}from"./chunk-36xhv122.js";import"./chunk-wsb8me6j.js";import{O}from"./chunk-tngcxdsg.js";var s=O(function(p){Object.defineProperty(p,"__esModule",{value:!0});p.OTLPTraceExporter=void 0;var e=oyn(),t=B9(),o=xJ();class c extends o.OTLPExporterBase{constructor(u={}){super(e.createOtlpGrpcExportDelegate(e.convertLegacyOtlpGrpcOptions(u,"TRACES"),t.ProtobufTraceSerializer,"TraceExportService","/opentelemetry.proto.collector.trace.v1.TraceService/Export"))}}p.OTLPTraceExporter=c});var l=O(function(r){Object.defineProperty(r,"__esModule",{value:!0});r.OTLPTraceExporter=void 0;var i=s();Object.defineProperty(r,"OTLPTraceExporter",{enumerable:!0,get:function(){return i.OTLPTraceExporter}})});export default l();
