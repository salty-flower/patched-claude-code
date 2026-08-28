// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{Cs,ce,n}from"./chunk-akz0cj0f.js";function l(e,r,i){let t=e.statSync(r);if(t.isDirectory())throw Object.assign(Error("EISDIR: illegal operation on a directory, read"),{code:"EISDIR",errno:-21,syscall:"read",path:r});if(!t.isFile())throw Object.assign(Error("Not a regular file (device, FIFO, or socket)"),{code:"ERR_NOT_REGULAR_FILE",path:r});if(i!==void 0&&t.size>i)throw Object.assign(Error("File exceeds maxBytes limit"),{code:"ERR_FILE_TOO_LARGE",path:r,size:t.size,maxBytes:i})}function gne(e){return e!=null&&typeof e==="object"&&"code"in e&&e.code==="ERR_NOT_REGULAR_FILE"}function f2(e){return e!=null&&typeof e==="object"&&"code"in e&&e.code==="ERR_FILE_TOO_LARGE"}function AGt(e){if(e.byteLength===0)return"utf8";if(e.byteLength>=2){if(e[0]===255&&e[1]===254)return"utf16le"}if(e.byteLength>=3&&e[0]===239&&e[1]===187&&e[2]===191)return"utf8";return"utf8"}function Nue(e){let r=AGt(e.subarray(0,4096));return Buffer.from(e.buffer,e.byteOffset,e.byteLength).toString(r).replaceAll(`\r
`,`
`)}function kGt(e){let{buffer:r,bytesRead:i}=ce().readSync(e,{length:4096});return AGt(r.subarray(0,i))}function Nwe(e){let r=0,i=0;for(let t=0;t<e.length;t++)if(e[t]===`
`)if(t>0&&e[t-1]==="\r")r++;else i++;return r>i?"CRLF":"LF"}function rOe(e,r){let i=ce(),{resolvedPath:t,isSymlink:s}=Cs(i,e);if(s)n(`Reading through symlink: ${e} -> ${t}`);l(i,t,r);let o=kGt(t),c=i.readFileSync(t,{encoding:o}),f=Nwe(c.slice(0,4096));return{content:c.replaceAll(`\r
`,`
`),encoding:o,lineEndings:f}}function aT(e,r){return rOe(e,r).content}async function Vg(e,r){let i=ce(),{resolvedPath:t,isSymlink:s}=Cs(i,e);if(s)n(`Reading through symlink: ${e} -> ${t}`);l(i,t,r);let o=kGt(t),c=await i.readFile(t,{encoding:o}),f=Nwe(c.slice(0,4096));return{content:c.replaceAll(`\r
`,`
`),encoding:o,lineEndings:f}}
export{gne,f2,AGt,Nue,kGt,Nwe,rOe,aT,Vg};
