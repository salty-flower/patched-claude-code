// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{v}from"./chunk-sktwb66b.js";import{W}from"./chunk-8915xd28.js";import{P}from"./chunk-drmqng8t.js";var s=268435456,WRi=s;async function GRi(n,e,t){let r=0;while(r<e.byteLength){let{bytesWritten:i}=await n.write(e,r,e.byteLength-r,t===null?null:t+r);if(i<=0)throw Object.assign(Error("write made no progress"),{code:"EIO"});r+=i}}var a=new Set(["EPERM","ENOTSUP","EOPNOTSUPP","ENOSYS"]);class o{logged=!1;claim(){if(this.logged)return!1;return this.logged=!0,!0}}var K=new W(()=>new o);function zRi(n){let e=v(n);if(e===void 0)return!1;return a.has(e)||e==="EISDIR"&&P()==="windows"}
export{WRi,GRi,zRi};
