// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{basename as t,join as r}from"path";var x5r="bundles",eai=r("claude.app","Contents","MacOS","claude"),e=String.raw`(\d[A-Za-z0-9._+-]*)@[0-9a-f]{12}\.[0-9a-f]{8}`,tai=new RegExp(`^${e}$`),o=new RegExp(String.raw`[\\/]versions[\\/]bundles[\\/]${e}[\\/]claude\.app[\\/]Contents[\\/]MacOS[\\/]claude$`);function bEe(n){return o.exec(n)?.[1]}function Pwn(n){return bEe(n)??t(n)}
export{x5r,eai,tai,bEe,Pwn};
