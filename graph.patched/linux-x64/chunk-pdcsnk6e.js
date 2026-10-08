// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{ct}from"./chunk-g79wjybr.js";import{Yo}from"./chunk-5v4f7g5r.js";import{Rc}from"./chunk-z9vmsc2z.js";import{MEt}from"./chunk-pyspjjcs.js";import{sep as i}from"path";function nZe(t){if(ct())return null;let e=`${MEt()}${i}`,n=".output";if(t.startsWith(e)&&t.endsWith(n)){let r=t.slice(e.length,-n.length);if(r.length>0&&r.length<=20&&/^[a-zA-Z0-9_-]+$/.test(r))return r}return null}function E5o(t){if(t?.file_path?.startsWith(Rc()))return"Reading Plan";if(t?.file_path&&nZe(t.file_path))return"Read agent output";return"Read"}function w3r(t){if(!t?.file_path)return null;let e=nZe(t.file_path);if(e)return e;return Yo(t.file_path)}
export{nZe,E5o,w3r};
