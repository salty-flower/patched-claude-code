// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{G}from"./chunk-m8nhymg4.js";import{createHash as e}from"crypto";function BPr(){return e("sha256").update(`${G()} ${process.hrtime.bigint()}`).digest().readUInt32BE(0)/4294967296}
export{BPr};
