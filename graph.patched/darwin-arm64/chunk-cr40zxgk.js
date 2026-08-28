// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{d,ee}from"./chunk-t2kfemrk.js";var f=d(function(i){var u=(r)=>typeof ArrayBuffer==="function"&&r instanceof ArrayBuffer||Object.prototype.toString.call(r)==="[object ArrayBuffer]";i.isArrayBuffer=u});var o=d(function(B){var c=f(),t=ee("buffer"),A=(r,e=0,s=r.byteLength-e)=>{if(!c.isArrayBuffer(r))throw TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof r} (${r})`);return t.Buffer.from(r,e,s)},m=(r,e)=>{if(typeof r!=="string")throw TypeError(`The "input" argument must be of type string. Received type ${typeof r} (${r})`);return e?t.Buffer.from(r,e):t.Buffer.from(r)};B.fromArrayBuffer=A;B.fromString=m});var Xu=d(function(h){var y=o(),n=(r)=>{let e=y.fromString(r,"utf8");return new Uint8Array(e.buffer,e.byteOffset,e.byteLength/Uint8Array.BYTES_PER_ELEMENT)},E=(r)=>{if(typeof r==="string")return n(r);if(ArrayBuffer.isView(r))return new Uint8Array(r.buffer,r.byteOffset,r.byteLength/Uint8Array.BYTES_PER_ELEMENT);return new Uint8Array(r)},U=(r)=>{if(typeof r==="string")return r;if(typeof r!=="object"||typeof r.byteOffset!=="number"||typeof r.byteLength!=="number")throw Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");return y.fromArrayBuffer(r.buffer,r.byteOffset,r.byteLength).toString("utf8")};h.fromUtf8=n;h.toUint8Array=E;h.toUtf8=U});
export{Xu};
