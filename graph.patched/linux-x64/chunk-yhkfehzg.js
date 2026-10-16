// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{fhe,ko,se,DW,t}from"./chunk-cwsn6mdf.js";import{isUtf8 as p}from"buffer";import{open as E}from"fs/promises";function F(n,e,r){let i=n.statSync(e);return CHe(i,e,r),i}function CHe(n,e,r){if(n.isDirectory())throw Object.assign(Error("EISDIR: illegal operation on a directory, read"),{code:"EISDIR",errno:-21,syscall:"read",path:e});if(!n.isFile())throw Object.assign(Error("Not a regular file (device, FIFO, or socket)"),{code:"ERR_NOT_REGULAR_FILE",path:e});if(r!==void 0&&n.size>r)throw Object.assign(Error("File exceeds maxBytes limit"),{code:"ERR_FILE_TOO_LARGE",path:e,size:n.size,maxBytes:r})}function pKs(n,e){if(n.isFile()&&Number(n.nlink)>1)throw Object.assign(Error("File has more than one hard link"),{code:"ERR_MULTIPLE_LINKS",path:e})}function EFr(n,e,r){if(r===void 0)return;if(n>r)throw Object.assign(Error("File exceeds maxBytes limit"),{code:"ERR_FILE_TOO_LARGE",path:e,size:n,maxBytes:r})}function YJ(n){return n!=null&&typeof n==="object"&&"code"in n&&n.code==="ERR_NOT_REGULAR_FILE"}function RW(n){return n!=null&&typeof n==="object"&&"code"in n&&n.code==="ERR_FILE_TOO_LARGE"}function $le(n){if(n.byteLength===0)return"utf8";if(n.byteLength>=2){if(n[0]===255&&n[1]===254)return"utf16le"}if(n.byteLength>=3&&n[0]===239&&n[1]===187&&n[2]===191)return"utf8";return"utf8"}var f=4096,b=8000;function BUo(n){return n.subarray(0,b).includes(0)}function I_t(n){let e=$le(n.subarray(0,f));if(e!=="utf8")return{encoding:e};if(n.byteLength>=2&&n[0]===254&&n[1]===255)return{encoding:e,notText:"utf16be"};if(BUo(n))return{encoding:e,notText:"nul"};return p(n)?{encoding:e}:{encoding:e,notText:"not_utf8"}}function kFr(n,e){return e!==""&&n?.charCodeAt(0)===65279&&e.charCodeAt(0)!==65279?`\uFEFF${e}`:e}function une(n){let e=$le(n.subarray(0,f));return Buffer.from(n.buffer,n.byteOffset,n.byteLength).toString(e).replaceAll(`\r
`,`
`)}function jUo(n){let{buffer:e,bytesRead:r}=se().readSync(n,{length:f});return $le(e.subarray(0,r))}function O_t(n){let e=0,r=0;for(let i=0;i<n.length;i++)if(n[i]===`
`)if(i>0&&n[i-1]==="\r")e++;else r++;return e>r?"CRLF":"LF"}function WUo(n,e,r){let i=se(),{resolvedPath:o,isSymlink:s}=ko(i,n);if(s)t(`Reading through symlink: ${n} -> ${o}`);let u=F(i,n,e);r?.(u);let a=jUo(n),c;if(e===void 0)c=i.readFileSync(n,{encoding:a});else{let{buffer:g,bytesRead:d}=i.readSync(n,{length:e+1});EFr(d,n,e),c=g.subarray(0,d).toString(a)}let l=O_t(c.slice(0,4096));return{content:c.replaceAll(`\r
`,`
`),encoding:a,lineEndings:l}}function Z$(n,e,r){return WUo(n,e,r).content}async function fy(n,e){let r=se(),{resolvedPath:i,isSymlink:o}=ko(r,n);if(o)t(`Reading through symlink: ${n} -> ${i}`);CHe(await r.stat(n),n,e);await using s=await E(n,fhe());return await Xke(s,n,e)}async function Xke(n,e,r){CHe(await n.stat(),e,r);let i=r===void 0?await n.readFile():await DW(n,r+1,"file");EFr(i.length,e,r);let{encoding:o,notText:s}=I_t(i),u=i.toString(o),a=O_t(u.slice(0,4096));return{content:u.replaceAll(`\r
`,`
`),encoding:o,lineEndings:a,...s&&{notText:s}}}
export{CHe,pKs,EFr,YJ,RW,$le,BUo,I_t,kFr,une,jUo,O_t,WUo,Z$,fy,Xke};
