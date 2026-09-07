// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{Co,ae,C0n,t}from"./chunk-5q90j22t.js";function a(n,e,r){E(n.statSync(e),e,r)}function E(n,e,r){if(n.isDirectory())throw Object.assign(Error("EISDIR: illegal operation on a directory, read"),{code:"EISDIR",errno:-21,syscall:"read",path:e});if(!n.isFile())throw Object.assign(Error("Not a regular file (device, FIFO, or socket)"),{code:"ERR_NOT_REGULAR_FILE",path:e});if(r!==void 0&&n.size>r)throw Object.assign(Error("File exceeds maxBytes limit"),{code:"ERR_FILE_TOO_LARGE",path:e,size:n.size,maxBytes:r})}function g(n,e,r){if(r===void 0)return;if(n>r)throw Object.assign(Error("File exceeds maxBytes limit"),{code:"ERR_FILE_TOO_LARGE",path:e,size:n,maxBytes:r})}function $se(n){return n!=null&&typeof n==="object"&&"code"in n&&n.code==="ERR_NOT_REGULAR_FILE"}function Rj(n){return n!=null&&typeof n==="object"&&"code"in n&&n.code==="ERR_FILE_TOO_LARGE"}function l(n){if(n.byteLength===0)return"utf8";if(n.byteLength>=2){if(n[0]===255&&n[1]===254)return"utf16le"}if(n.byteLength>=3&&n[0]===239&&n[1]===187&&n[2]===191)return"utf8";return"utf8"}function cge(n){let e=l(n.subarray(0,4096));return Buffer.from(n.buffer,n.byteOffset,n.byteLength).toString(e).replaceAll(`\r
`,`
`)}function PKt(n){let{buffer:e,bytesRead:r}=ae().readSync(n,{length:4096});return l(e.subarray(0,r))}function UZe(n){let e=0,r=0;for(let i=0;i<n.length;i++)if(n[i]===`
`)if(i>0&&n[i-1]==="\r")e++;else r++;return e>r?"CRLF":"LF"}function mvt(n,e){let r=ae(),{resolvedPath:i,isSymlink:d}=Co(r,n);if(d)t(`Reading through symlink: ${n} -> ${i}`);a(r,n,e);let c=PKt(n),o;if(e===void 0)o=r.readFileSync(n,{encoding:c});else{let{buffer:u,bytesRead:f}=r.readSync(n,{length:e+1});g(f,n,e),o=u.subarray(0,f).toString(c)}let s=UZe(o.slice(0,4096));return{content:o.replaceAll(`\r
`,`
`),encoding:c,lineEndings:s}}function _x(n,e){return mvt(n,e).content}async function hw(n,e){let r=ae(),{resolvedPath:i,isSymlink:d}=Co(r,n);if(d)t(`Reading through symlink: ${n} -> ${i}`);a(r,n,e);let c=PKt(n),o=await r.readFileBytes(n,e===void 0?void 0:e+1);g(o.length,n,e);let s=o.toString(c),u=UZe(s.slice(0,4096));return{content:s.replaceAll(`\r
`,`
`),encoding:c,lineEndings:u}}async function Ysr(n,e,r){E(await n.stat(),e,r);let i=Buffer.alloc(4096),{bytesRead:d}=await n.read(i,0,i.length,0),c=l(i.subarray(0,d)),o=r===void 0?await n.readFile():await C0n(n,r+1,"file");g(o.length,e,r);let s=o.toString(c),u=UZe(s.slice(0,4096));return{content:s.replaceAll(`\r
`,`
`),encoding:c,lineEndings:u}}
export{$se,Rj,cge,PKt,UZe,mvt,_x,hw,Ysr};
