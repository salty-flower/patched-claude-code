// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{t}from"./chunk-n5v91jc3.js";import{Zf,fa}from"./chunk-65s1xpd0.js";import{F7e}from"./chunk-6g12yqvm.js";import{readFile as i}from"fs/promises";async function uSe(e){if(!Zf()){let r=F7e();if(r.HTTPS_PROXY&&URL.parse(e)?.protocol==="https:"){let n;if(r.SSL_CERT_FILE)try{n=await i(r.SSL_CERT_FILE,"utf8")}catch(o){t(`MCP agent-proxy fallback: failed to read CA bundle: ${o instanceof Error?o.message:String(o)}`,{level:"warn"})}return fa({url:e,fallbackProxy:{url:r.HTTPS_PROXY,noProxy:r.NO_PROXY,ca:n}})}}return fa({url:e})}
export{uSe};
