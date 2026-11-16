// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
var D0=300000,UE=3600000;function dnt(e){if((e?.cache_creation?.ephemeral_5m_input_tokens??0)>0)return"5m";return(e?.cache_creation?.ephemeral_1h_input_tokens??0)>0?"1h":void 0}
export{D0,UE,dnt};
