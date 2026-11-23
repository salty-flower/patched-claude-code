// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{E}from"./chunk-xysnb9s9.js";import{Gi}from"./chunk-b2f7pn4f.js";import{Jc,go,$s,ot}from"./chunk-0scvffs6.js";import{$Rn,lpt,Ui}from"./chunk-6pdbnrq7.js";import{e}from"./chunk-zrhzz8fw.js";function kCn(p=()=>!0){let s=Jc(),r=Gi(),{refusedWithin:u,noteRefused:n}=go(),{refusedWithin:i,noteRefused:o}=go();function t(){let f=Ui(r,s(),$Rn);if(f||!p()||u()||i(lpt)){if(n(),f)o();return!0}return!1}return{refuseInput:t}}function YX(p){let i=E(10),{label:s,onPress:r,onCancel:u}=p,{refuseInput:n}=kCn(),o;if(i[0]!==s)o=[{label:s,value:"press"}],i[0]=s,i[1]=o;else o=i[1];let t;if(i[2]!==r||i[3]!==n)t=()=>{if(n()){return!1}r()},i[2]=r,i[3]=n,i[4]=t;else t=i[4];let f;if(i[5]!==u||i[6]!==n||i[7]!==o||i[8]!==t)f=e(ot,{options:o,hideIndexes:!0,disablePrintableKeybindings:!0,selectedValue:$s,refuseInput:n,onChange:t,onCancel:u}),i[5]=u,i[6]=n,i[7]=o,i[8]=t,i[9]=f;else f=i[9];return f}
export{kCn,YX};
