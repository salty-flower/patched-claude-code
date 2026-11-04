// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{zx}from"./chunk-5yxarqdb.js";import{Oe}from"./chunk-tngcxdsg.js";var n=Oe(zx()),e=typeof Buffer<"u"&&Buffer.from?function(r){return Buffer.from(r,"utf8")}:n.fromUtf8;function ven(r){if(r instanceof Uint8Array)return r;if(typeof r==="string")return e(r);if(ArrayBuffer.isView(r))return new Uint8Array(r.buffer,r.byteOffset,r.byteLength/Uint8Array.BYTES_PER_ELEMENT);return new Uint8Array(r)}function CHn(r){if(typeof r==="string")return r.length===0;return r.byteLength===0}function hws(r){return new Uint8Array([(r&4278190080)>>24,(r&16711680)>>16,(r&65280)>>8,r&255])}function gws(r){if(!Uint32Array.from){var t=new Uint32Array(r.length),f=0;while(f<r.length)t[f]=r[f],f+=1;return t}return Uint32Array.from(r)}export{ven,CHn,hws,gws};
