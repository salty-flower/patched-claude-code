// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{P}from"./chunk-drmqng8t.js";import*as r from"fs/promises";import*as o from"path";function g_n(e={}){return{fs:r,path:o,platform:()=>P(),...e}}async function y_n(e,t){return t.isRootNameExchangeable===!0?e.path.join(await e.fs.realpath(e.path.dirname(t.realRoot)),e.path.basename(t.realRoot)):e.fs.realpath(t.realRoot)}
export{g_n,y_n};
