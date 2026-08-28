// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{d}from"./chunk-by569dsf.js";var n=d(function(l){var c=(e)=>encodeURIComponent(e).replace(/[!'()*]/g,a),a=(e)=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`,u=(e)=>e.split("/").map(c).join("/");l.escapeUri=c;l.escapeUriPath=u});var X4t=d(function(y){var o=n();function h(e){let i=[];for(let s of Object.keys(e).sort()){let r=e[s];if(s=o.escapeUri(s),Array.isArray(r))for(let t=0,p=r.length;t<p;t++)i.push(`${s}=${o.escapeUri(r[t])}`);else{let t=s;if(r||typeof r==="string")t+=`=${o.escapeUri(r)}`;i.push(t)}}return i.join("&")}y.buildQueryString=h});
export{X4t};
