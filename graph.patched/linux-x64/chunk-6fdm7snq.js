// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
function Dm(){return!0}function op(){return typeof Bun<"u"&&Bun.isStandaloneExecutable===!0}function c8t(){if(!Dm()||op())return!1;let n=Bun.main;if(Aci(n))return!1;return/\.[cm]?tsx?$/.test(n)}function Aci(n){return/^(?:\/\$bunfs|[a-z]:[\\/]~BUN)(?:[\\/]|$)/i.test(n)}
export{Dm,op,c8t,Aci};
