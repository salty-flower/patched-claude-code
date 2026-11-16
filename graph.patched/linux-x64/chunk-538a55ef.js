// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{posix as o}from"path";var Ipe=".ccr-seed",_Ui=501,KZt=o.join(Ipe,"manifest.json"),S=o.join(Ipe,"ready.json"),T=o.join(Ipe,"laptop.json"),x=o.join(Ipe,"worker.json"),JSe=o.join(Ipe,"home","pack.json"),QLt=o.join(Ipe,"home","ready.json");var f=o.join(Ipe,"overlay.bundle"),s=256,i=500,_=4,c=2,l=1,r=_+c+l,e=200,E=2,A=Math.min(e,i-r-E-e),L=s-r,yUi=400;function xht(n){let t=o.join("/",n.replaceAll("\\","/"));return t===`/${Ipe}`||t.startsWith(`/${Ipe}/`)}function LDn(n){return!n.split("/").some((t)=>t===""||t==="."||t==="..")}var R=/^\.\.namedfork$/i;function bUi(n){return n.split("/").some((t)=>R.test(t))}
export{Ipe,_Ui,KZt,JSe,QLt,yUi,xht,LDn,bUi};
