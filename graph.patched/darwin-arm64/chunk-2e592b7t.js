// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{Ja}from"./chunk-s8xs8s76.js";import{Co}from"./chunk-742ky2cp.js";import{al}from"./chunk-b8n3cnw5.js";import{lrt}from"./chunk-xvnnb7ec.js";import{sep as i}from"path";function YWe(t){if(Ja())return null;let e=`${lrt()}${i}`,n=".output";if(t.startsWith(e)&&t.endsWith(n)){let r=t.slice(e.length,-n.length);if(r.length>0&&r.length<=20&&/^[a-zA-Z0-9_-]+$/.test(r))return r}return null}function $ro(t){if(t?.file_path?.startsWith(al()))return"Reading Plan";if(t?.file_path&&YWe(t.file_path))return"Read agent output";return"Read"}function bpr(t){if(!t?.file_path)return null;let e=YWe(t.file_path);if(e)return e;return Co(t.file_path)}
export{YWe,$ro,bpr};
