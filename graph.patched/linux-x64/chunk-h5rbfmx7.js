// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{uO}from"./chunk-m7j0he0y.js";import{De}from"./chunk-jxn7cbw7.js";var n=De(uO()),e=typeof Buffer<"u"&&Buffer.from?function(r){return Buffer.from(r,"utf8")}:n.fromUtf8;function Khn(r){if(r instanceof Uint8Array)return r;if(typeof r==="string")return e(r);if(ArrayBuffer.isView(r))return new Uint8Array(r.buffer,r.byteOffset,r.byteLength/Uint8Array.BYTES_PER_ELEMENT);return new Uint8Array(r)}function n8n(r){if(typeof r==="string")return r.length===0;return r.byteLength===0}function d8s(r){return new Uint8Array([(r&4278190080)>>24,(r&16711680)>>16,(r&65280)>>8,r&255])}function c8s(r){if(!Uint32Array.from){var t=new Uint32Array(r.length),f=0;while(f<r.length)t[f]=r[f],f+=1;return t}return Uint32Array.from(r)}export{Khn,n8n,d8s,c8s};
