// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{xJ,B9,Iae}from"./chunk-36xhv122.js";import"./chunk-wsb8me6j.js";import{Oe}from"./chunk-tngcxdsg.js";var t=Oe(xJ()),o=Oe(B9()),r=Oe(Iae());class e extends t.OTLPExporterBase{constructor(p={}){super(r.createOtlpHttpExportDelegate(r.convertLegacyHttpOptions(p,"TRACES","v1/traces",{"Content-Type":"application/json"}),o.JsonTraceSerializer))}}export{e as OTLPTraceExporter};
