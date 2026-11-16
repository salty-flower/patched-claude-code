// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{mI}from"./chunk-bwmwhpy2.js";import{De}from"./chunk-fn3dzsec.js";var n=De(mI()),e=typeof Buffer<"u"&&Buffer.from?function(r){return Buffer.from(r,"utf8")}:n.fromUtf8;function cgn(r){if(r instanceof Uint8Array)return r;if(typeof r==="string")return e(r);if(ArrayBuffer.isView(r))return new Uint8Array(r.buffer,r.byteOffset,r.byteLength/Uint8Array.BYTES_PER_ELEMENT);return new Uint8Array(r)}function C9n(r){if(typeof r==="string")return r.length===0;return r.byteLength===0}function U9s(r){return new Uint8Array([(r&4278190080)>>24,(r&16711680)>>16,(r&65280)>>8,r&255])}function B9s(r){if(!Uint32Array.from){var t=new Uint32Array(r.length),f=0;while(f<r.length)t[f]=r[f],f+=1;return t}return Uint32Array.from(r)}export{cgn,C9n,U9s,B9s};
