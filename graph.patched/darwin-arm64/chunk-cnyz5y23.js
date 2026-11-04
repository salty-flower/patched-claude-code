// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
var EOt="https://claude.com/claude-code",vmr="https://claude.ai";function i(t,e){return t?.includes("_staging_")===!0||e?.includes("staging")===!0}function loo(t,e){return t?.includes("_local_")===!0||e?.includes("localhost")===!0}function E8e(t,e){if(loo(t,e))return"http://localhost:4000";if(i(t,e))return"https://claude-ai.staging.ant.dev";return"https://claude.ai"}function sd(t,e,n){let{toCompatSessionId:s}=((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-2jvp87bs.js"),o=s(t),r=`${E8e(o,e)}/code/${o}`;return n?`${r}?${new URLSearchParams(n)}`:r}
export{EOt,vmr,loo,E8e,sd};
