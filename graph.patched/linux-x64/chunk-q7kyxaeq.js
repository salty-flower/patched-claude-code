// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
var jDr="https://claude.com/claude-code",ooa="https://claude.ai";function i(t,e){return t?.includes("_staging_")===!0||e?.includes("staging")===!0}function PRo(t,e){return t?.includes("_local_")===!0||e?.includes("localhost")===!0}function jve(t,e){if(PRo(t,e))return"http://localhost:4000";if(i(t,e))return"https://claude-ai.staging.ant.dev";return"https://claude.ai"}function uc(t,e,n){let{toCompatSessionId:s}=((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-zws3e8rh.js"),o=s(t),r=`${jve(o,e)}/code/${o}`;return n?`${r}?${new URLSearchParams(n)}`:r}
export{jDr,ooa,PRo,jve,uc};
