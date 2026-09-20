// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{t0e,Mkt}from"./chunk-at0y084g.js";import{Fn,Ru,J4}from"./chunk-vx7e38ke.js";import{resolve as o}from"path";import{pathToFileURL as l}from"url";function dN(n){try{let r=J4(n),e=J4(o(r));if(Ru(r)||Fn(e)||t0e(r)||t0e(e))return null;let t=l(r);return t.hostname!==""||Mkt(t.href)?null:t.href}catch{return null}}
export{dN};
