// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{posix as o}from"path";var Fpe=".ccr-seed",nUi=501,ien=o.join(Fpe,"manifest.json"),S=o.join(Fpe,"ready.json"),T=o.join(Fpe,"laptop.json"),x=o.join(Fpe,"worker.json"),swe=o.join(Fpe,"home","pack.json"),sHt=o.join(Fpe,"home","ready.json");var f=o.join(Fpe,"overlay.bundle"),s=256,i=500,_=4,c=2,l=1,r=_+c+l,e=200,E=2,A=Math.min(e,i-r-E-e),L=s-r,rUi=400;function Lht(n){let t=o.join("/",n.replaceAll("\\","/"));return t===`/${Fpe}`||t.startsWith(`/${Fpe}/`)}function QDn(n){return!n.split("/").some((t)=>t===""||t==="."||t==="..")}var R=/^\.\.namedfork$/i;function oUi(n){return n.split("/").some((t)=>R.test(t))}
export{Fpe,nUi,ien,swe,sHt,rUi,Lht,QDn,oUi};
