// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{ane,bJ,Ope}from"./chunk-grzmwkm3.js";import"./chunk-5edb0yta.js";import{De}from"./chunk-fn3dzsec.js";var t=De(ane()),o=De(bJ()),r=De(Ope());class e extends t.OTLPExporterBase{constructor(p={}){super(r.createOtlpHttpExportDelegate(r.convertLegacyHttpOptions(p,"TRACES","v1/traces",{"Content-Type":"application/json"}),o.JsonTraceSerializer))}}export{e as OTLPTraceExporter};
