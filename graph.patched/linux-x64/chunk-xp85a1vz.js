// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{eye,GI}from"./chunk-5z5dtbrz.js";function hVe(e,o){if(eye(e))return;return{uuid:typeof e.source_uuid==="string"&&e.source_uuid?e.source_uuid:o,content:e.prompt,isMeta:Boolean(e.isMeta),origin:GI(e.origin,e.commandMode,e.runId)}}
export{hVe};
