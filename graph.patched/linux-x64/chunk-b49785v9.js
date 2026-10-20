// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Z}from"./chunk-dxktn51d.js";import{Fo}from"./chunk-bjv5j0w5.js";import{tc}from"./chunk-kx98rv5t.js";import{sNt}from"./chunk-qak60510.js";import{sep as i}from"path";function Zct(t){if(Z())return null;let e=`${sNt()}${i}`,n=".output";if(t.startsWith(e)&&t.endsWith(n)){let r=t.slice(e.length,-n.length);if(r.length>0&&r.length<=20&&/^[a-zA-Z0-9_-]+$/.test(r))return r}return null}function BCs(t){if(t?.file_path?.startsWith(tc()))return"Reading Plan";if(t?.file_path&&Zct(t.file_path))return"Read agent output";return"Read"}function fSo(t){if(!t?.file_path)return null;let e=Zct(t.file_path);if(e)return e;return Fo(t.file_path)}
export{Zct,BCs,fSo};
