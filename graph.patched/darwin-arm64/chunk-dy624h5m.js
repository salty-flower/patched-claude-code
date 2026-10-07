// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{G5,lo,oe,oF,t}from"./chunk-f8eqwxpt.js";import{open as l}from"fs/promises";function u(n,e,i){yke(n.statSync(e),e,i)}function yke(n,e,i){if(n.isDirectory())throw Object.assign(Error("EISDIR: illegal operation on a directory, read"),{code:"EISDIR",errno:-21,syscall:"read",path:e});if(!n.isFile())throw Object.assign(Error("Not a regular file (device, FIFO, or socket)"),{code:"ERR_NOT_REGULAR_FILE",path:e});if(i!==void 0&&n.size>i)throw Object.assign(Error("File exceeds maxBytes limit"),{code:"ERR_FILE_TOO_LARGE",path:e,size:n.size,maxBytes:i})}function Xcs(n,e){if(n.isFile()&&Number(n.nlink)>1)throw Object.assign(Error("File has more than one hard link"),{code:"ERR_MULTIPLE_LINKS",path:e})}function hmr(n,e,i){if(i===void 0)return;if(n>i)throw Object.assign(Error("File exceeds maxBytes limit"),{code:"ERR_FILE_TOO_LARGE",path:e,size:n,maxBytes:i})}function C5(n){return n!=null&&typeof n==="object"&&"code"in n&&n.code==="ERR_NOT_REGULAR_FILE"}function j1(n){return n!=null&&typeof n==="object"&&"code"in n&&n.code==="ERR_FILE_TOO_LARGE"}function cMn(n){if(n.byteLength===0)return"utf8";if(n.byteLength>=2){if(n[0]===255&&n[1]===254)return"utf16le"}if(n.byteLength>=3&&n[0]===239&&n[1]===187&&n[2]===191)return"utf8";return"utf8"}function _ke(n){let e=cMn(n.subarray(0,4096));return Buffer.from(n.buffer,n.byteOffset,n.byteLength).toString(e).replaceAll(`\r
`,`
`)}function eco(n){let{buffer:e,bytesRead:i}=oe().readSync(n,{length:4096});return cMn(e.subarray(0,i))}function dMn(n){let e=0,i=0;for(let r=0;r<n.length;r++)if(n[r]===`
`)if(r>0&&n[r-1]==="\r")e++;else i++;return e>i?"CRLF":"LF"}function tco(n,e){let i=oe(),{resolvedPath:r,isSymlink:s}=lo(i,n);if(s)t(`Reading through symlink: ${n} -> ${r}`);u(i,n,e);let o=eco(n),c;if(e===void 0)c=i.readFileSync(n,{encoding:o});else{let{buffer:g,bytesRead:a}=i.readSync(n,{length:e+1});hmr(a,n,e),c=g.subarray(0,a).toString(o)}let d=dMn(c.slice(0,4096));return{content:c.replaceAll(`\r
`,`
`),encoding:o,lineEndings:d}}function WN(n,e){return tco(n,e).content}async function Oy(n,e){let i=oe(),{resolvedPath:r,isSymlink:s}=lo(i,n);if(s)t(`Reading through symlink: ${n} -> ${r}`);yke(await i.stat(n),n,e);await using o=await l(n,G5());return await Ohe(o,n,e)}async function Ohe(n,e,i){yke(await n.stat(),e,i);let r=i===void 0?await n.readFile():await oF(n,i+1,"file");hmr(r.length,e,i);let s=cMn(r.subarray(0,4096)),o=r.toString(s),c=dMn(o.slice(0,4096));return{content:o.replaceAll(`\r
`,`
`),encoding:s,lineEndings:c}}
export{yke,Xcs,hmr,C5,j1,cMn,_ke,eco,dMn,tco,WN,Oy,Ohe};
