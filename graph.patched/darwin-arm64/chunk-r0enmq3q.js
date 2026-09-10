// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{Ao,le,F$n,t}from"./chunk-wbbe5mtc.js";function f(n,e,r){a(n.statSync(e),e,r)}function a(n,e,r){if(n.isDirectory())throw Object.assign(Error("EISDIR: illegal operation on a directory, read"),{code:"EISDIR",errno:-21,syscall:"read",path:e});if(!n.isFile())throw Object.assign(Error("Not a regular file (device, FIFO, or socket)"),{code:"ERR_NOT_REGULAR_FILE",path:e});if(r!==void 0&&n.size>r)throw Object.assign(Error("File exceeds maxBytes limit"),{code:"ERR_FILE_TOO_LARGE",path:e,size:n.size,maxBytes:r})}function g(n,e,r){if(r===void 0)return;if(n>r)throw Object.assign(Error("File exceeds maxBytes limit"),{code:"ERR_FILE_TOO_LARGE",path:e,size:n,maxBytes:r})}function lce(n){return n!=null&&typeof n==="object"&&"code"in n&&n.code==="ERR_NOT_REGULAR_FILE"}function qz(n){return n!=null&&typeof n==="object"&&"code"in n&&n.code==="ERR_FILE_TOO_LARGE"}function rOt(n){if(n.byteLength===0)return"utf8";if(n.byteLength>=2){if(n[0]===255&&n[1]===254)return"utf16le"}if(n.byteLength>=3&&n[0]===239&&n[1]===187&&n[2]===191)return"utf8";return"utf8"}function rSe(n){let e=rOt(n.subarray(0,4096));return Buffer.from(n.buffer,n.byteOffset,n.byteLength).toString(e).replaceAll(`\r
`,`
`)}function men(n){let{buffer:e,bytesRead:r}=le().readSync(n,{length:4096});return rOt(e.subarray(0,r))}function Rit(n){let e=0,r=0;for(let i=0;i<n.length;i++)if(n[i]===`
`)if(i>0&&n[i-1]==="\r")e++;else r++;return e>r?"CRLF":"LF"}function oOt(n,e){let r=le(),{resolvedPath:i,isSymlink:d}=Ao(r,n);if(d)t(`Reading through symlink: ${n} -> ${i}`);f(r,n,e);let c=men(n),o;if(e===void 0)o=r.readFileSync(n,{encoding:c});else{let{buffer:u,bytesRead:l}=r.readSync(n,{length:e+1});g(l,n,e),o=u.subarray(0,l).toString(c)}let s=Rit(o.slice(0,4096));return{content:o.replaceAll(`\r
`,`
`),encoding:c,lineEndings:s}}function HH(n,e){return oOt(n,e).content}async function YS(n,e){let r=le(),{resolvedPath:i,isSymlink:d}=Ao(r,n);if(d)t(`Reading through symlink: ${n} -> ${i}`);f(r,n,e);let c=men(n),o=await r.readFileBytes(n,e===void 0?void 0:e+1);g(o.length,n,e);let s=o.toString(c),u=Rit(s.slice(0,4096));return{content:s.replaceAll(`\r
`,`
`),encoding:c,lineEndings:u}}async function D_r(n,e,r){a(await n.stat(),e,r);let i=Buffer.alloc(4096),{bytesRead:d}=await n.read(i,0,i.length,0),c=rOt(i.subarray(0,d)),o=r===void 0?await n.readFile():await F$n(n,r+1,"file");g(o.length,e,r);let s=o.toString(c),u=Rit(s.slice(0,4096));return{content:s.replaceAll(`\r
`,`
`),encoding:c,lineEndings:u}}
export{lce,qz,rOt,rSe,men,Rit,oOt,HH,YS,D_r};
