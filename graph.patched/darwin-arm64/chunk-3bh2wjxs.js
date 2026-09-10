// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{Jwe,nmt}from"./chunk-6aa8b9rw.js";import{kn,Bu,tG}from"./chunk-3k7pa7mk.js";import{resolve as o}from"path";import{pathToFileURL as l}from"url";function oD(n){try{let r=tG(n),e=tG(o(r));if(Bu(r)||kn(e)||Jwe(r)||Jwe(e))return null;let t=l(r);return t.hostname!==""||nmt(t.href)?null:t.href}catch{return null}}
export{oD};
