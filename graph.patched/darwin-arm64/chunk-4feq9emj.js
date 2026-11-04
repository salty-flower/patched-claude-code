// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{q}from"./chunk-ecyypctx.js";import{js}from"./chunk-kby0exm8.js";import{Gp}from"./chunk-w64mkcdc.js";import{oJt}from"./chunk-8fj97e9v.js";import{sep as i}from"path";function jxt(t){if(q())return null;let e=`${oJt()}${i}`,n=".output";if(t.startsWith(e)&&t.endsWith(n)){let r=t.slice(e.length,-n.length);if(r.length>0&&r.length<=20&&/^[a-zA-Z0-9_-]+$/.test(r))return r}return null}function G_i(t){if(t?.file_path?.startsWith(Gp()))return"Reading Plan";if(t?.file_path&&jxt(t.file_path))return"Read agent output";return"Read"}function qts(t){if(!t?.file_path)return null;let e=jxt(t.file_path);if(e)return e;return js(t.file_path)}
export{jxt,G_i,qts};
