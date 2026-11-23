// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{v0r}from"./chunk-zhvxfbcg.js";import{yt}from"./chunk-rs1brma6.js";import{Ve}from"./chunk-fn3dzsec.js";import{createHash as h}from"crypto";var e=Ve("./contract-42rnakfr.md.embedded.txt");var t=Ve("./deck-971635py.md.embedded.txt");var o="./design-513e7611.md.zst";var a=yt(o,import.meta.dirname);var c="{{cards}}",f=3,x=e;function S(i){let n=v0r(t.trim().split(`
`),(r)=>h("sha256").update(i).update(r).digest("hex")).slice(0,f).join(`
`);return a.replace(c,()=>n)}export{x as CONTRACT_MD,S as dealDesignGuide};
