// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{zyr}from"./chunk-hbtg4za2.js";import{ifr,afr}from"./chunk-nfbft0th.js";import{Vi}from"./chunk-nxc9btm2.js";var u=30000;function EBt(e){let n=typeof e==="string"?Vi(e):"";if(!n||zyr(n)||n===ifr||n===afr)return;return n}function Pxo(e,n,r,a){let i=new AbortController,s,d=(t)=>{if(i.signal.aborted||t===void 0||t===s)return;s=t,a(t)};if(n?.then(d,()=>{}),r===void 0)return()=>i.abort();let o=()=>{},f=()=>{r(i.signal).then(d,()=>{}).finally(()=>{if(!i.signal.aborted)o=e.setTimeout(f,u)})};return o=e.setTimeout(f,u),()=>{i.abort(),o()}}
export{EBt,Pxo};
