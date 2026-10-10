// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{kY,yo,ie,ID,t}from"./chunk-gyf58rwf.js";import{isUtf8 as d}from"buffer";import{open as g}from"fs/promises";function f(n,e,r){SPe(n.statSync(e),e,r)}function SPe(n,e,r){if(n.isDirectory())throw Object.assign(Error("EISDIR: illegal operation on a directory, read"),{code:"EISDIR",errno:-21,syscall:"read",path:e});if(!n.isFile())throw Object.assign(Error("Not a regular file (device, FIFO, or socket)"),{code:"ERR_NOT_REGULAR_FILE",path:e});if(r!==void 0&&n.size>r)throw Object.assign(Error("File exceeds maxBytes limit"),{code:"ERR_FILE_TOO_LARGE",path:e,size:n.size,maxBytes:r})}function kOs(n,e){if(n.isFile()&&Number(n.nlink)>1)throw Object.assign(Error("File has more than one hard link"),{code:"ERR_MULTIPLE_LINKS",path:e})}function NRr(n,e,r){if(r===void 0)return;if(n>r)throw Object.assign(Error("File exceeds maxBytes limit"),{code:"ERR_FILE_TOO_LARGE",path:e,size:n,maxBytes:r})}function hY(n){return n!=null&&typeof n==="object"&&"code"in n&&n.code==="ERR_NOT_REGULAR_FILE"}function ZB(n){return n!=null&&typeof n==="object"&&"code"in n&&n.code==="ERR_FILE_TOO_LARGE"}function jGn(n){if(n.byteLength===0)return"utf8";if(n.byteLength>=2){if(n[0]===255&&n[1]===254)return"utf16le"}if(n.byteLength>=3&&n[0]===239&&n[1]===187&&n[2]===191)return"utf8";return"utf8"}function lTo(n,e){return e==="utf8"&&!d(n)}function awe(n){let e=jGn(n.subarray(0,4096));return Buffer.from(n.buffer,n.byteOffset,n.byteLength).toString(e).replaceAll(`\r
`,`
`)}function cTo(n){let{buffer:e,bytesRead:r}=ie().readSync(n,{length:4096});return jGn(e.subarray(0,r))}function WGn(n){let e=0,r=0;for(let i=0;i<n.length;i++)if(n[i]===`
`)if(i>0&&n[i-1]==="\r")e++;else r++;return e>r?"CRLF":"LF"}function dTo(n,e){let r=ie(),{resolvedPath:i,isSymlink:s}=yo(r,n);if(s)t(`Reading through symlink: ${n} -> ${i}`);f(r,n,e);let o=cTo(n),c;if(e===void 0)c=r.readFileSync(n,{encoding:o});else{let{buffer:u,bytesRead:a}=r.readSync(n,{length:e+1});NRr(a,n,e),c=u.subarray(0,a).toString(o)}let l=WGn(c.slice(0,4096));return{content:c.replaceAll(`\r
`,`
`),encoding:o,lineEndings:l}}function tU(n,e){return dTo(n,e).content}async function k_(n,e){let r=ie(),{resolvedPath:i,isSymlink:s}=yo(r,n);if(s)t(`Reading through symlink: ${n} -> ${i}`);SPe(await r.stat(n),n,e);await using o=await g(n,kY());return await lwe(o,n,e)}async function lwe(n,e,r){SPe(await n.stat(),e,r);let i=r===void 0?await n.readFile():await ID(n,r+1,"file");NRr(i.length,e,r);let s=jGn(i.subarray(0,4096)),o=i.toString(s),c=WGn(o.slice(0,4096));return{content:o.replaceAll(`\r
`,`
`),encoding:s,lineEndings:c,...lTo(i,s)&&{lossyDecode:!0}}}
export{SPe,kOs,NRr,hY,ZB,jGn,lTo,awe,cTo,WGn,dTo,tU,k_,lwe};
