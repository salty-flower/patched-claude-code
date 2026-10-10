// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Te}from"./chunk-4bw62nzm.js";import{os}from"./chunk-f606a53w.js";import{jc}from"./chunk-27et44g8.js";import{FTt}from"./chunk-f0442373.js";import{sep as i}from"path";function Ont(t){if(Te())return null;let e=`${FTt()}${i}`,n=".output";if(t.startsWith(e)&&t.endsWith(n)){let r=t.slice(e.length,-n.length);if(r.length>0&&r.length<=20&&/^[a-zA-Z0-9_-]+$/.test(r))return r}return null}function hns(t){if(t?.file_path?.startsWith(jc()))return"Reading Plan";if(t?.file_path&&Ont(t.file_path))return"Read agent output";return"Read"}function GQr(t){if(!t?.file_path)return null;let e=Ont(t.file_path);if(e)return e;return os(t.file_path)}
export{Ont,hns,GQr};
