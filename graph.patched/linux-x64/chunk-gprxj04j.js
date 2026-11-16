// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{G}from"./chunk-r3adsed5.js";import{createHash as e}from"crypto";function dPr(){return e("sha256").update(`${G()} ${process.hrtime.bigint()}`).digest().readUInt32BE(0)/4294967296}
export{dPr};
