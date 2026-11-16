// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
function Dm(){return!0}function Mp(){return typeof Bun<"u"&&Bun.isStandaloneExecutable===!0}function w9t(){if(!Dm()||Mp())return!1;let n=Bun.main;if(iui(n))return!1;return/\.[cm]?tsx?$/.test(n)}function iui(n){return/^(?:\/\$bunfs|[a-z]:[\\/]~BUN)(?:[\\/]|$)/i.test(n)}
export{Dm,Mp,w9t,iui};
