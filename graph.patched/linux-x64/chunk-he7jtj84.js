// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{xt}from"./chunk-t46680ch.js";import{HW,mTe}from"./chunk-4qs43hr1.js";var i=/^([a-z][a-z\d+\-.]*:)?\/\//i;function r(o,e){let s=e?.baseURL,n=i.test(o),t=null;if(n&&!HW(o))t=o;else if(s!=null&&!HW(s))t=s;else if(!n&&s==null)t=o;if(t!==null)throw Error(`downloads: request (url="${o}"`+(s!=null?`, baseURL="${s}"`:"")+") does not resolve to the public CDN (downloads.claude.ai). Use firstPartyApi for api.anthropic.com (residency-gated) or externalHttp for non-Anthropic hosts.")}var $q={get(o,e){return r(o,e),mTe(),xt.get(o,e)}};
export{$q};
