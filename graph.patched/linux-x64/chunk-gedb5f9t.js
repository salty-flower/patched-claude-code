// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{K}from"./chunk-r3adsed5.js";import{is}from"./chunk-kxtjph8h.js";import{vm}from"./chunk-rj6gcj81.js";import{Lcn}from"./chunk-8zjt0xk5.js";import{sep as i}from"path";function GUt(t){if(K())return null;let e=`${Lcn()}${i}`,n=".output";if(t.startsWith(e)&&t.endsWith(n)){let r=t.slice(e.length,-n.length);if(r.length>0&&r.length<=20&&/^[a-zA-Z0-9_-]+$/.test(r))return r}return null}function WYi(t){if(t?.file_path?.startsWith(vm()))return"Reading Plan";if(t?.file_path&&GUt(t.file_path))return"Read agent output";return"Read"}function oPs(t){if(!t?.file_path)return null;let e=GUt(t.file_path);if(e)return e;return is(t.file_path)}
export{GUt,WYi,oPs};
