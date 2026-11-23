// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Yt}from"./chunk-yd22sq9j.js";import{dje}from"./chunk-29cd2nzs.js";import{j9}from"./chunk-3kfrp6r4.js";var i=/^([a-z][a-z\d+\-.]*:)?\/\//i;function r(o,e){let s=e?.baseURL,n=i.test(o),t=null;if(n&&!j9(o))t=o;else if(s!=null&&!j9(s))t=s;else if(!n&&s==null)t=o;if(t!==null)throw Error(`downloads: request (url="${o}"`+(s!=null?`, baseURL="${s}"`:"")+") does not resolve to the public CDN (downloads.claude.ai). Use firstPartyApi for api.anthropic.com (residency-gated) or externalHttp for non-Anthropic hosts.")}var ZQ={get(o,e){return r(o,e),dje(),Yt.get(o,e)}};
export{ZQ};
