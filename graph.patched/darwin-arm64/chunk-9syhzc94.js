// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{S}from"./chunk-rqyyny1n.js";var CCn=S(function(u){var c=(e)=>encodeURIComponent(e).replace(/[!'()*]/g,p),p=(e)=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`,a=(e)=>e.split("/").map(c).join("/");u.escapeUri=c;u.escapeUriPath=a});var IGt=S(function(h){var o=CCn();function f(e){let i=[];for(let s of Object.keys(e).sort()){let r=e[s];if(s=o.escapeUri(s),Array.isArray(r))for(let t=0,n=r.length;t<n;t++)i.push(`${s}=${o.escapeUri(r[t])}`);else{let t=s;if(r||typeof r==="string")t+=`=${o.escapeUri(r)}`;i.push(t)}}return i.join("&")}h.buildQueryString=f});
export{CCn,IGt};
