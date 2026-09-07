// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{fSe,Cct}from"./chunk-w21g06fp.js";import{Tn,Tu,fW}from"./chunk-fkz3e4t3.js";import{resolve as o}from"path";import{pathToFileURL as l}from"url";function qP(n){try{let r=fW(n),e=fW(o(r));if(Tu(r)||Tn(e)||fSe(r)||fSe(e))return null;let t=l(r);return t.hostname!==""||Cct(t.href)?null:t.href}catch{return null}}
export{qP};
