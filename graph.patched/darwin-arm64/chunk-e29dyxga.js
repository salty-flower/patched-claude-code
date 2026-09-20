// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{b}from"./chunk-mvpw0rjp.js";import{i}from"./chunk-jxv3x25k.js";import{s,n,XC}from"./chunk-cskdt2sa.js";import{Be}from"./chunk-9sc1d0qs.js";import{dr}from"./chunk-myc7nzmw.js";import{e,r}from"./chunk-437ab22y.js";import{d,M}from"./chunk-ncc6kxz8.js";import{y}from"./chunk-y8wd7we8.js";M();function U7e(A){let o=b(17),{Wizard:f,cancelledEvent:u,onDone:v}=A,C=XC(),g=dr(),[a,B]=d(null),h;if(o[0]!==C||o[1]!==g)h=()=>{C.exit();let{proactivityLevel:j,toolPermissionContext:q}=g.getState();import("./chunk-egbcems9.js").then((F)=>F.execRelaunch({proactivity:{proactivityLevel:j,toolPermissionContext:q}}))},o[0]=C,o[1]=g,o[2]=h;else h=o[2];const x=a!==null;let E;if(o[3]!==x)E={context:"Confirmation",isActive:x},o[3]=x,o[4]=E;else E=o[4];if(Be("confirm:yes",h,E),a!==null){let t;if(o[5]!==a)t=e(n,{color:"success",children:a}),o[5]=a,o[6]=t;else t=o[6];let c;if(o[7]===y)c=r(n,{dimColor:!0,children:["Press ",e(n,{bold:!0,children:"Enter"})," to restart Claude Code."]}),o[7]=c;else c=o[7];let l;if(o[8]!==t)l=r(s,{flexDirection:"column",gap:1,marginTop:1,children:[t,c]}),o[8]=t,o[9]=l;else l=o[9];return l}let t;if(o[10]===y)t=(G)=>B(G),o[10]=t;else t=o[10];let c;if(o[11]!==u||o[12]!==v)c=()=>{i(u,{}),v()},o[11]=u,o[12]=v,o[13]=c;else c=o[13];let l;if(o[14]!==f||o[15]!==c)l=e(f,{onComplete:t,onCancel:c}),o[14]=f,o[15]=c,o[16]=l;else l=o[16];return l}
export{U7e};
