// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{d,E}from"./chunk-ekgz6skk.js";import{Cye}from"./chunk-n5v91jc3.js";import{zo,dt}from"./chunk-pe53y0ma.js";import{FJs,SAe}from"./chunk-kcmb4jzj.js";import{open as l,realpath as f,stat as g}from"fs/promises";import{resolve as h}from"path";var Uts="Error: --agents takes a JSON object, or a file path only with --print (-p). Pass the agents as inline JSON, or run with -p to read them from a file.",s=268435456;function WTn(t){let e=zo(t).trimStart();return e.startsWith("{")||dt(e,!1)!==null}async function Bts(t){let e=h(t);try{await using r=await l(e,Cye());let a=await r.stat({bigint:!0});FJs(a,e);let o=await f(e).catch(()=>e),n=await g(o,{bigint:!0});if(n.dev!==a.dev||n.ino!==a.ino)return{ok:!1,error:`Error: --agents file changed while it was read: ${e}`};let{content:i}=await SAe(r,e,s);return{ok:!0,json:i,filePath:e,realPath:o}}catch(r){switch(E(r)){case"ENOENT":return{ok:!1,error:`Error: --agents file not found: ${e} (a value that is not a JSON object is read as a file path)`};case"ERR_FILE_TOO_LARGE":return{ok:!1,error:`Error: --agents file is larger than ${s} bytes: ${e}`};case"ERR_MULTIPLE_LINKS":return{ok:!1,error:`Error: --agents file has more than one hard link: ${e} (its other names are not write-protected; pass a file with one name)`};default:return{ok:!1,error:`Error reading --agents file ${e}: ${d(r)}`}}}}
export{Uts,WTn,Bts};
