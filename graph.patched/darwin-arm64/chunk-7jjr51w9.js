// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{qEe,Ngt}from"./chunk-946tnd5m.js";import{Tn,ju,EG}from"./chunk-8yfx63va.js";import{resolve as o}from"path";import{pathToFileURL as l}from"url";function bD(n){try{let r=EG(n),e=EG(o(r));if(ju(r)||Tn(e)||qEe(r)||qEe(e))return null;let t=l(r);return t.hostname!==""||Ngt(t.href)?null:t.href}catch{return null}}
export{bD};
