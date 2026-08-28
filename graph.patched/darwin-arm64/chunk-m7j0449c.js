// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{g}from"./chunk-8mr77ghb.js";import{s}from"./chunk-3jdapt8v.js";import{o,t,yx}from"./chunk-htcaw08y.js";import{Be}from"./chunk-0nm8e5dp.js";import{Xn}from"./chunk-6g06harn.js";import{e,r}from"./chunk-80eepr01.js";import{u,N}from"./chunk-5752v0zq.js";import{p}from"./chunk-t2kfemrk.js";N();function RNe(A){let n=g(17),{Wizard:f,cancelledEvent:v,onDone:C}=A,x=yx(),y=Xn(),[a,B]=u(null),E;if(n[0]!==x||n[1]!==y)E=()=>{x.exit();let{proactivityLevel:j,toolPermissionContext:q}=y.getState();import("./chunk-sp97pysn.js").then((F)=>F.execRelaunch({proactivity:{proactivityLevel:j,toolPermissionContext:q}}))},n[0]=x,n[1]=y,n[2]=E;else E=n[2];const P=a!==null;let J;if(n[3]!==P)J={context:"Confirmation",isActive:P},n[3]=P,n[4]=J;else J=n[4];if(Be("confirm:yes",E,J),a!==null){let i;if(n[5]!==a)i=e(t,{color:"success",children:a}),n[5]=a,n[6]=i;else i=n[6];let c;if(n[7]===p)c=r(t,{dimColor:!0,children:["Press ",e(t,{bold:!0,children:"Enter"})," to restart Claude Code."]}),n[7]=c;else c=n[7];let l;if(n[8]!==i)l=r(o,{flexDirection:"column",gap:1,marginTop:1,children:[i,c]}),n[8]=i,n[9]=l;else l=n[9];return l}let i;if(n[10]===p)i=(G)=>B(G),n[10]=i;else i=n[10];let c;if(n[11]!==v||n[12]!==C)c=()=>{s(v,{}),C()},n[11]=v,n[12]=C,n[13]=c;else c=n[13];let l;if(n[14]!==f||n[15]!==c)l=e(f,{onComplete:i,onCancel:c}),n[14]=f,n[15]=c,n[16]=l;else l=n[16];return l}
export{RNe};
