// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{bn}from"./chunk-a7cah040.js";import{bo}from"./chunk-dn2273cv.js";import{Hl}from"./chunk-eh6tsvt3.js";import{Elt}from"./chunk-65w9jdv4.js";import{sep as i}from"path";function o3e(t){if(bn())return null;let e=`${Elt()}${i}`,n=".output";if(t.startsWith(e)&&t.endsWith(n)){let r=t.slice(e.length,-n.length);if(r.length>0&&r.length<=20&&/^[a-zA-Z0-9_-]+$/.test(r))return r}return null}function dEo(t){if(t?.file_path?.startsWith(Hl()))return"Reading Plan";if(t?.file_path&&o3e(t.file_path))return"Read agent output";return"Read"}function JTr(t){if(!t?.file_path)return null;let e=o3e(t.file_path);if(e)return e;return bo(t.file_path)}
export{o3e,dEo,JTr};
