// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{l,E}from"./chunk-tnh13g2g.js";import{X9}from"./chunk-b5feae42.js";import{Go,gt}from"./chunk-kp09cc0v.js";import{fws,U_e}from"./chunk-20vgjjee.js";import{open as f,realpath as g,stat as h}from"fs/promises";import{resolve as c}from"path";var o0o="Error: --agents takes a JSON object, or a file path only with --print (-p). Pass the agents as inline JSON, or run with -p to read them from a file.",s=268435456;function Xin(t){let e=Go(t).trimStart();return e.startsWith("{")||gt(e,!1)!==null}async function s0o(t){let e=c(t);try{await using r=await f(e,X9());let a=await r.stat({bigint:!0});fws(a,e);let o=await g(e).catch(()=>e),n=await h(o,{bigint:!0});if(n.dev!==a.dev||n.ino!==a.ino)return{ok:!1,error:`Error: --agents file changed while it was read: ${e}`};let{content:i}=await U_e(r,e,s);return{ok:!0,json:i,filePath:e,realPath:o}}catch(r){switch(E(r)){case"ENOENT":return{ok:!1,error:`Error: --agents file not found: ${e} (a value that is not a JSON object is read as a file path)`};case"ERR_FILE_TOO_LARGE":return{ok:!1,error:`Error: --agents file is larger than ${s} bytes: ${e}`};case"ERR_MULTIPLE_LINKS":return{ok:!1,error:`Error: --agents file has more than one hard link: ${e} (its other names are not write-protected; pass a file with one name)`};default:return{ok:!1,error:`Error reading --agents file ${e}: ${l(r)}`}}}}
export{o0o,Xin,s0o};
