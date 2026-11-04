// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{posix as o}from"path";var $ae=".ccr-seed",Jni=501,P6t=o.join($ae,"manifest.json"),S=o.join($ae,"ready.json"),T=o.join($ae,"laptop.json"),x=o.join($ae,"worker.json"),Uae=o.join($ae,"home","pack.json"),Bvt=o.join($ae,"home","ready.json");var f=o.join($ae,"overlay.bundle"),s=256,i=500,_=4,c=2,l=1,r=_+c+l,e=200,E=2,A=Math.min(e,i-r-E-e),L=s-r,Qni=400;function lst(n){let t=o.join("/",n.replaceAll("\\","/"));return t===`/${$ae}`||t.startsWith(`/${$ae}/`)}function u_n(n){return!n.split("/").some((t)=>t===""||t==="."||t==="..")}var R=/^\.\.namedfork$/i;function Zni(n){return n.split("/").some((t)=>R.test(t))}
export{$ae,Jni,P6t,Uae,Bvt,Qni,lst,u_n,Zni};
