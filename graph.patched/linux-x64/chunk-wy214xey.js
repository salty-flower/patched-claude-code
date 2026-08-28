// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{g}from"./chunk-yhctzac5.js";import{s}from"./chunk-cvykgfry.js";import{o,t,fx}from"./chunk-167xpx5m.js";import{Be}from"./chunk-dd07ew42.js";import{Xn}from"./chunk-6v460cp3.js";import{e,r}from"./chunk-azctepqx.js";import{u,N}from"./chunk-q0z49y3j.js";import{p}from"./chunk-by569dsf.js";N();function T1e(A){let n=g(17),{Wizard:f,cancelledEvent:v,onDone:C}=A,x=fx(),y=Xn(),[a,B]=u(null),E;if(n[0]!==x||n[1]!==y)E=()=>{x.exit();let{proactivityLevel:j,toolPermissionContext:q}=y.getState();import("./chunk-zn8rg30g.js").then((F)=>F.execRelaunch({proactivity:{proactivityLevel:j,toolPermissionContext:q}}))},n[0]=x,n[1]=y,n[2]=E;else E=n[2];const P=a!==null;let J;if(n[3]!==P)J={context:"Confirmation",isActive:P},n[3]=P,n[4]=J;else J=n[4];if(Be("confirm:yes",E,J),a!==null){let i;if(n[5]!==a)i=e(t,{color:"success",children:a}),n[5]=a,n[6]=i;else i=n[6];let c;if(n[7]===p)c=r(t,{dimColor:!0,children:["Press ",e(t,{bold:!0,children:"Enter"})," to restart Claude Code."]}),n[7]=c;else c=n[7];let l;if(n[8]!==i)l=r(o,{flexDirection:"column",gap:1,marginTop:1,children:[i,c]}),n[8]=i,n[9]=l;else l=n[9];return l}let i;if(n[10]===p)i=(G)=>B(G),n[10]=i;else i=n[10];let c;if(n[11]!==v||n[12]!==C)c=()=>{s(v,{}),C()},n[11]=v,n[12]=C,n[13]=c;else c=n[13];let l;if(n[14]!==f||n[15]!==c)l=e(f,{onComplete:i,onCancel:c}),n[14]=f,n[15]=c,n[16]=l;else l=n[16];return l}
export{T1e};
