// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{ce}from"./chunk-xzypj06m.js";import{ts}from"./chunk-wrzcmmn0.js";import{qd}from"./chunk-rqev3qw9.js";import{aMt}from"./chunk-td8wzww7.js";import{sep as i}from"path";function Ilt(t){if(ce())return null;let e=`${aMt()}${i}`,n=".output";if(t.startsWith(e)&&t.endsWith(n)){let r=t.slice(e.length,-n.length);if(r.length>0&&r.length<=20&&/^[a-zA-Z0-9_-]+$/.test(r))return r}return null}function f_s(t){if(t?.file_path?.startsWith(qd()))return"Reading Plan";if(t?.file_path&&Ilt(t.file_path))return"Read agent output";return"Read"}function Fpo(t){if(!t?.file_path)return null;let e=Ilt(t.file_path);if(e)return e;return ts(t.file_path)}
export{Ilt,f_s,Fpo};
