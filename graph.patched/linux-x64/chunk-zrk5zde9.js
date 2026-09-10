// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{at,Wd}from"./chunk-yk423ezb.js";import{F3}from"./chunk-kzk5z6sx.js";var r=/(^|\.)(anthropic\.com|claude\.ai|claude\.com)$/i,i=/(^|\.)downloads\.claude\.ai$/i;function s(e){let t,n=e.startsWith("//")?`https:${e}`:e;try{t=new URL(n).hostname}catch{t=e.match(/^[^/:]+/)?.[0]??e}return t.endsWith(".")?t.slice(0,-1):t}function yce(e){return r.test(s(e))}function tU(e){return i.test(s(e))}var R=new Set(["ERR_BAD_OPTION","ERR_BAD_OPTION_VALUE","ERR_BAD_REQUEST","ERR_BAD_RESPONSE","ERR_CANCELED","ERR_DEPRECATED","ERR_FORM_DATA_DEPTH_EXCEEDED","ERR_FR_MAX_BODY_LENGTH_EXCEEDED","ERR_FR_TOO_MANY_REDIRECTS","ERR_INVALID_URL","ERR_NOT_SUPPORT","ERR_STREAM_WRITE_AFTER_END"]);function kGe(e){return Wd(e)&&e.response===void 0&&!R.has(e.code??"")}function o(e,t){for(let n of[e,t?.baseURL])if(n&&yce(n))throw Error(`externalHttp: ${n} is Anthropic-operated. Use firstPartyApi from `+"src/services/http/firstParty \u2014 it enforces the 3P data-residency gate.")}var ua={get(e,t){return o(e,t),F3(),at.get(e,t)},head(e,t){return o(e,t),F3(),at.head(e,t)},post(e,t,n){return o(e,n),F3(),at.post(e,t,n)},put(e,t,n){return o(e,n),F3(),at.put(e,t,n)},patch(e,t,n){return o(e,n),F3(),at.patch(e,t,n)},delete(e,t){return o(e,t),F3(),at.delete(e,t)}};
export{yce,tU,kGe,ua};
