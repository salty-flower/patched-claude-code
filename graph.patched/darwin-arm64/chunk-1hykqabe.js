// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{l,E,Nf}from"./chunk-886tf6ja.js";import{se}from"./chunk-qr9z1wer.js";import{t}from"./chunk-gyf58rwf.js";import{c}from"./chunk-gsnbskq4.js";import{Q_}from"./chunk-bf3z2ftn.js";import{Zu}from"./chunk-f606a53w.js";import{rs}from"./chunk-r2vtj1kh.js";import{ixn,hcr,$3t,jnt,B3t}from"./chunk-j8hqhz0c.js";import{qe}from"./chunk-qxmpnv25.js";import{lstat as y,opendir as R}from"fs/promises";import{join as g,sep as D}from"path";async function gFt(){let o=await B3t();if(o!==null)return{root:o,nested:!1,followsShell:!1};let r=await b();return r===null?null:{...r,nested:!0}}var S=256;async function b(){try{if(!rs()||qe.isSandboxingEnabled())return null;let o=jnt();if(Q_(o)!==null)return null;let r=se(),i=ixn();if(i.size>1){let n=hcr(r),e=n===void 0?void 0:i.get(n),p=e!==void 0&&await f(e)==="directory"?await u(e):null;return p===null?null:{root:p,followsShell:!0}}let[a]=i.values();if(a!==void 0){let n=await f(a);if(n==="directory"){let e=await u(a);return e===null?null:{root:e,followsShell:!1}}if(n==="other")return null}let s=[],w=0;for await(let n of await R(o)){if(++w>S)return null;if(!n.isDirectory()||n.name.startsWith("."))continue;let e=g(o,n.name);if(await f(e)!=="absent")s.push(e)}let d=Zu(r),m=s.find((n)=>{let e=Zu(n);return d===e||d.startsWith(e+D)})??(s.length===1?s[0]:void 0),h=m===void 0?null:await u(m);return h===null?null:{root:h,followsShell:s.length>1}}catch(o){if(Nf(o))t(`workspace diff: nested repository scan failed: ${l(o)}`,{level:"warn"});else c(o);return null}}async function f(o){try{return(await y(g(o,".git"))).isDirectory()?"directory":"other"}catch(r){let i=E(r);if(i==="ENOENT"||i==="ENOTDIR")return"absent";throw r}}async function u(o){return $3t(o)===null?null:B3t(void 0,o)}
export{gFt};
