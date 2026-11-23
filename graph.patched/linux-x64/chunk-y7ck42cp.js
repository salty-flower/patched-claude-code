// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{R}from"./chunk-xezjycv8.js";import*as r from"fs/promises";import*as o from"path";function n5n(e={}){return{fs:r,path:o,platform:()=>R(),...e}}async function r5n(e,t){return t.isRootNameExchangeable===!0?e.path.join(await e.fs.realpath(e.path.dirname(t.realRoot)),e.path.basename(t.realRoot)):e.fs.realpath(t.realRoot)}
export{n5n,r5n};
