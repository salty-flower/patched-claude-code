// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Z}from"./chunk-kpqr86hf.js";import{$o}from"./chunk-c2wcenam.js";import{tc}from"./chunk-e72wd94x.js";import{hNt}from"./chunk-ejbh299b.js";import{sep as i}from"path";function iut(t){if(Z())return null;let e=`${hNt()}${i}`,n=".output";if(t.startsWith(e)&&t.endsWith(n)){let r=t.slice(e.length,-n.length);if(r.length>0&&r.length<=20&&/^[a-zA-Z0-9_-]+$/.test(r))return r}return null}function TRs(t){if(t?.file_path?.startsWith(tc()))return"Reading Plan";if(t?.file_path&&iut(t.file_path))return"Read agent output";return"Read"}function Fbo(t){if(!t?.file_path)return null;let e=iut(t.file_path);if(e)return e;return $o(t.file_path)}
export{iut,TRs,Fbo};
