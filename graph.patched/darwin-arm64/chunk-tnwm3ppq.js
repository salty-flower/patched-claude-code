// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{J}from"./chunk-ersar6wn.js";import{Zo}from"./chunk-fmbx25g2.js";import{vc}from"./chunk-vzjz8s6z.js";import{Rjt}from"./chunk-vxq1sws1.js";import{sep as i}from"path";function sht(t){if(J())return null;let e=`${Rjt()}${i}`,n=".output";if(t.startsWith(e)&&t.endsWith(n)){let r=t.slice(e.length,-n.length);if(r.length>0&&r.length<=20&&/^[a-zA-Z0-9_-]+$/.test(r))return r}return null}function n1s(t){if(t?.file_path?.startsWith(vc()))return"Reading Plan";if(t?.file_path&&sht(t.file_path))return"Read agent output";return"Read"}function eOo(t){if(!t?.file_path)return null;let e=sht(t.file_path);if(e)return e;return Zo(t.file_path)}
export{sht,n1s,eOo};
