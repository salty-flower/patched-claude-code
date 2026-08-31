// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{b,ue}from"./chunk-5nnrmmhw.js";var Mkn=b(function(s){var n=(r)=>typeof ArrayBuffer==="function"&&r instanceof ArrayBuffer||Object.prototype.toString.call(r)==="[object ArrayBuffer]";s.isArrayBuffer=n});var Tve=b(function(m){var i=Mkn(),t=ue("buffer"),c=(r,e=0,y=r.byteLength-e)=>{if(!i.isArrayBuffer(r))throw TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof r} (${r})`);return t.Buffer.from(r,e,y)},A=(r,e)=>{if(typeof r!=="string")throw TypeError(`The "input" argument must be of type string. Received type ${typeof r} (${r})`);return e?t.Buffer.from(r,e):t.Buffer.from(r)};m.fromArrayBuffer=c;m.fromString=A});var _g=b(function(U){var f=Tve(),o=(r)=>{let e=f.fromString(r,"utf8");return new Uint8Array(e.buffer,e.byteOffset,e.byteLength/Uint8Array.BYTES_PER_ELEMENT)},g=(r)=>{if(typeof r==="string")return o(r);if(ArrayBuffer.isView(r))return new Uint8Array(r.buffer,r.byteOffset,r.byteLength/Uint8Array.BYTES_PER_ELEMENT);return new Uint8Array(r)},E=(r)=>{if(typeof r==="string")return r;if(typeof r!=="object"||typeof r.byteOffset!=="number"||typeof r.byteLength!=="number")throw Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");return f.fromArrayBuffer(r.buffer,r.byteOffset,r.byteLength).toString("utf8")};U.fromUtf8=o;U.toUint8Array=g;U.toUtf8=E});
export{Mkn,Tve,_g};
