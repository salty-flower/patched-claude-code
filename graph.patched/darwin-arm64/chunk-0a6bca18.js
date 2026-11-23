// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{ane,bJ,Ope}from"./chunk-grzmwkm3.js";import"./chunk-5edb0yta.js";import{De}from"./chunk-fn3dzsec.js";var t=De(ane()),e=De(bJ()),o=De(Ope());class r extends t.OTLPExporterBase{constructor(p={}){super(o.createOtlpHttpExportDelegate(o.convertLegacyHttpOptions(p,"LOGS","v1/logs",{"Content-Type":"application/json"}),e.JsonLogsSerializer))}}export{r as OTLPLogExporter};
