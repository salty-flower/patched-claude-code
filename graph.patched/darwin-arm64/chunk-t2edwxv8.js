// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{K}from"./chunk-m8nhymg4.js";import{is}from"./chunk-v0j2tqq5.js";import{vm}from"./chunk-cq3w4egf.js";import{Tun}from"./chunk-jm5a8b6t.js";import{sep as i}from"path";function Y$t(t){if(K())return null;let e=`${Tun()}${i}`,n=".output";if(t.startsWith(e)&&t.endsWith(n)){let r=t.slice(e.length,-n.length);if(r.length>0&&r.length<=20&&/^[a-zA-Z0-9_-]+$/.test(r))return r}return null}function IYi(t){if(t?.file_path?.startsWith(vm()))return"Reading Plan";if(t?.file_path&&Y$t(t.file_path))return"Read agent output";return"Read"}function FPs(t){if(!t?.file_path)return null;let e=Y$t(t.file_path);if(e)return e;return is(t.file_path)}
export{Y$t,IYi,FPs};
