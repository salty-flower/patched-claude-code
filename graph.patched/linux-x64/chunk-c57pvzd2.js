// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Yt}from"./chunk-y7b0rwe8.js";import{iWe}from"./chunk-5z5dtbrz.js";import{D8}from"./chunk-n2j94ahf.js";var i=/^([a-z][a-z\d+\-.]*:)?\/\//i;function r(o,e){let s=e?.baseURL,n=i.test(o),t=null;if(n&&!D8(o))t=o;else if(s!=null&&!D8(s))t=s;else if(!n&&s==null)t=o;if(t!==null)throw Error(`downloads: request (url="${o}"`+(s!=null?`, baseURL="${s}"`:"")+") does not resolve to the public CDN (downloads.claude.ai). Use firstPartyApi for api.anthropic.com (residency-gated) or externalHttp for non-Anthropic hosts.")}var zQ={get(o,e){return r(o,e),iWe(),Yt.get(o,e)}};
export{zQ};
