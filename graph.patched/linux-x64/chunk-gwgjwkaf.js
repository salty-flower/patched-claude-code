// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{ce}from"./chunk-eqmywwjn.js";import{ts}from"./chunk-wz19y5sy.js";import{qd}from"./chunk-zadfm67a.js";import{XHt}from"./chunk-vv2t5282.js";import{sep as i}from"path";function Elt(t){if(ce())return null;let e=`${XHt()}${i}`,n=".output";if(t.startsWith(e)&&t.endsWith(n)){let r=t.slice(e.length,-n.length);if(r.length>0&&r.length<=20&&/^[a-zA-Z0-9_-]+$/.test(r))return r}return null}function Rys(t){if(t?.file_path?.startsWith(qd()))return"Reading Plan";if(t?.file_path&&Elt(t.file_path))return"Read agent output";return"Read"}function lpo(t){if(!t?.file_path)return null;let e=Elt(t.file_path);if(e)return e;return ts(t.file_path)}
export{Elt,Rys,lpo};
