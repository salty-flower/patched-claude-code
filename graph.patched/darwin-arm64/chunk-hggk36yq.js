// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{$t}from"./chunk-eawd3eqb.js";import{eHe}from"./chunk-nxc9btm2.js";import{cq}from"./chunk-9d5ge72j.js";var i=/^([a-z][a-z\d+\-.]*:)?\/\//i;function r(o,e){let s=e?.baseURL,n=i.test(o),t=null;if(n&&!cq(o))t=o;else if(s!=null&&!cq(s))t=s;else if(!n&&s==null)t=o;if(t!==null)throw Error(`downloads: request (url="${o}"`+(s!=null?`, baseURL="${s}"`:"")+") does not resolve to the public CDN (downloads.claude.ai). Use firstPartyApi for api.anthropic.com (residency-gated) or externalHttp for non-Anthropic hosts.")}var xY={get(o,e){return r(o,e),eHe(),$t.get(o,e)}};
export{xY};
