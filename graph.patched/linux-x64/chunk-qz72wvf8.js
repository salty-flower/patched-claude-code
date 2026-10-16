// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{d,E}from"./chunk-w7m8nded.js";import{fhe}from"./chunk-cwsn6mdf.js";import{No,gt}from"./chunk-ac6y47nt.js";import{pKs,Xke}from"./chunk-yhkfehzg.js";import{open as l,realpath as f,stat as g}from"fs/promises";import{resolve as h}from"path";var K3o="Error: --agents takes a JSON object, or a file path only with --print (-p). Pass the agents as inline JSON, or run with -p to read them from a file.",s=268435456;function wwn(t){let e=No(t).trimStart();return e.startsWith("{")||gt(e,!1)!==null}async function q3o(t){let e=h(t);try{await using r=await l(e,fhe());let a=await r.stat({bigint:!0});pKs(a,e);let o=await f(e).catch(()=>e),n=await g(o,{bigint:!0});if(n.dev!==a.dev||n.ino!==a.ino)return{ok:!1,error:`Error: --agents file changed while it was read: ${e}`};let{content:i}=await Xke(r,e,s);return{ok:!0,json:i,filePath:e,realPath:o}}catch(r){switch(E(r)){case"ENOENT":return{ok:!1,error:`Error: --agents file not found: ${e} (a value that is not a JSON object is read as a file path)`};case"ERR_FILE_TOO_LARGE":return{ok:!1,error:`Error: --agents file is larger than ${s} bytes: ${e}`};case"ERR_MULTIPLE_LINKS":return{ok:!1,error:`Error: --agents file has more than one hard link: ${e} (its other names are not write-protected; pass a file with one name)`};default:return{ok:!1,error:`Error reading --agents file ${e}: ${d(r)}`}}}}
export{K3o,wwn,q3o};
