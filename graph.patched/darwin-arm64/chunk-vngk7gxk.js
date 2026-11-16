// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Ggo}from"./chunk-wqb2b4v0.js";import{t}from"./chunk-bdfv2ky4.js";import{Ah,Wl}from"./chunk-3kfrp6r4.js";import{Aje}from"./chunk-taqg08p7.js";import{readFile as p}from"fs/promises";async function jQe(r){if(Ggo()?.serves?.(r))return{...Wl({url:r}),proxy:!1,redirect:"error"};if(!Ah()){let e=Aje();if(e.HTTPS_PROXY&&URL.parse(r)?.protocol==="https:"){let n={url:e.HTTPS_PROXY,noProxy:e.NO_PROXY},i=Wl({url:r,fallbackProxy:n});if(i.proxy===void 0||!e.SSL_CERT_FILE)return i;let a;try{a=await p(e.SSL_CERT_FILE,"utf8")}catch(o){t(`MCP agent-proxy fallback: failed to read CA bundle: ${o instanceof Error?o.message:String(o)}`,{level:"warn"})}return Wl({url:r,fallbackProxy:{...n,ca:a}})}}return Wl({url:r})}
export{jQe};
