// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{_}from"./chunk-c8ey99v5.js";import{i}from"./chunk-vtd04czk.js";import{o,n,eE}from"./chunk-hrm5smjv.js";import{Ne}from"./chunk-eg7c0qsb.js";import{zn}from"./chunk-2e1d5j6k.js";import{e,r}from"./chunk-smtaex5n.js";import{d,N}from"./chunk-jegfnmzv.js";import{f}from"./chunk-te942vjn.js";N();function H6e(A){let t=_(17),{Wizard:u,cancelledEvent:v,onDone:C}=A,g=eE(),x=zn(),[a,B]=d(null),E;if(t[0]!==g||t[1]!==x)E=()=>{g.exit();let{proactivityLevel:j,toolPermissionContext:q}=x.getState();import("./chunk-hmj4m2xy.js").then((F)=>F.execRelaunch({proactivity:{proactivityLevel:j,toolPermissionContext:q}}))},t[0]=g,t[1]=x,t[2]=E;else E=t[2];const y=a!==null;let J;if(t[3]!==y)J={context:"Confirmation",isActive:y},t[3]=y,t[4]=J;else J=t[4];if(Ne("confirm:yes",E,J),a!==null){let s;if(t[5]!==a)s=e(n,{color:"success",children:a}),t[5]=a,t[6]=s;else s=t[6];let c;if(t[7]===f)c=r(n,{dimColor:!0,children:["Press ",e(n,{bold:!0,children:"Enter"})," to restart Claude Code."]}),t[7]=c;else c=t[7];let l;if(t[8]!==s)l=r(o,{flexDirection:"column",gap:1,marginTop:1,children:[s,c]}),t[8]=s,t[9]=l;else l=t[9];return l}let s;if(t[10]===f)s=(G)=>B(G),t[10]=s;else s=t[10];let c;if(t[11]!==v||t[12]!==C)c=()=>{i(v,{}),C()},t[11]=v,t[12]=C,t[13]=c;else c=t[13];let l;if(t[14]!==u||t[15]!==c)l=e(u,{onComplete:s,onCancel:c}),t[14]=u,t[15]=c,t[16]=l;else l=t[16];return l}
export{H6e};
