// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{P8r}from"./chunk-0x9x817t.js";import{t}from"./chunk-5nh49npx.js";import{em,pa}from"./chunk-9d5ge72j.js";import{fHe}from"./chunk-fepmab31.js";import{readFile as p}from"fs/promises";async function dOe(r){if(P8r()?.serves?.(r))return{...pa({url:r}),proxy:!1,redirect:"error"};if(!em()){let e=fHe();if(e.HTTPS_PROXY&&URL.parse(r)?.protocol==="https:"){let n={url:e.HTTPS_PROXY,noProxy:e.NO_PROXY},i=pa({url:r,fallbackProxy:n});if(i.proxy===void 0||!e.SSL_CERT_FILE)return i;let a;try{a=await p(e.SSL_CERT_FILE,"utf8")}catch(o){t(`MCP agent-proxy fallback: failed to read CA bundle: ${o instanceof Error?o.message:String(o)}`,{level:"warn"})}return pa({url:r,fallbackProxy:{...n,ca:a}})}}return pa({url:r})}
export{dOe};
