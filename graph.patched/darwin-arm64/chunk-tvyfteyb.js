// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{_}from"./chunk-5nh49npx.js";import{ki}from"./chunk-zmmnrc9r.js";import{vh}from"./chunk-hrcvhjhd.js";function pxn(t,e,n,r){return{method:"project_read",path:t,...e!==void 0&&{version:e},...n,...r}}function Eis(t){return{method:"project_read",path:t}}var cmr="tengu_glittery_crayon",c=500,o="A doc of this project.";function Wvi(t){let e=ki(t.path,c);return{type:"document",source:{type:"text",media_type:"text/plain",data:t.content},...e!==""&&{title:e},context:t.version!==void 0&&vh.test(t.version)?`${o} version: ${t.version}`:o}}function noo(t){return t.type==="document"&&typeof t.source==="object"&&t.source!==null&&"type"in t.source&&t.source.type==="text"&&typeof t.context==="string"&&t.context.startsWith(o)}function umr({docId:t,read:e}){return{input:_(Eis(t)),result:_(e)}}
export{pxn,Eis,cmr,Wvi,noo,umr};
