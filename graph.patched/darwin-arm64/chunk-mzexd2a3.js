// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{_}from"./chunk-0jrfbepr.js";import{s}from"./chunk-kzyd0fd4.js";import{o,n,_H}from"./chunk-t50adtrb.js";import{je}from"./chunk-b5gq8krd.js";import{Bn}from"./chunk-hx7hd5mf.js";import{e,r}from"./chunk-v5r13aq1.js";import{d,j}from"./chunk-xyxaqzpf.js";import{f}from"./chunk-bge67taw.js";j();function oje(k){let t=_(17),{Wizard:u,cancelledEvent:v,onDone:C}=k,g=_H(),x=Bn(),[a,A]=d(null),E;if(t[0]!==g||t[1]!==x)E=()=>{g.exit();let{proactivityLevel:B,toolPermissionContext:q}=x.getState();import("./chunk-k7jwytde.js").then((F)=>F.execRelaunch({proactivity:{proactivityLevel:B,toolPermissionContext:q}}))},t[0]=g,t[1]=x,t[2]=E;else E=t[2];const y=a!==null;let J;if(t[3]!==y)J={context:"Confirmation",isActive:y},t[3]=y,t[4]=J;else J=t[4];if(je("confirm:yes",E,J),a!==null){let i;if(t[5]!==a)i=e(n,{color:"success",children:a}),t[5]=a,t[6]=i;else i=t[6];let c;if(t[7]===f)c=r(n,{dimColor:!0,children:["Press ",e(n,{bold:!0,children:"Enter"})," to restart Claude Code."]}),t[7]=c;else c=t[7];let l;if(t[8]!==i)l=r(o,{flexDirection:"column",gap:1,marginTop:1,children:[i,c]}),t[8]=i,t[9]=l;else l=t[9];return l}let i;if(t[10]===f)i=(G)=>A(G),t[10]=i;else i=t[10];let c;if(t[11]!==v||t[12]!==C)c=()=>{s(v,{}),C()},t[11]=v,t[12]=C,t[13]=c;else c=t[13];let l;if(t[14]!==u||t[15]!==c)l=e(u,{onComplete:i,onCancel:c}),t[14]=u,t[15]=c,t[16]=l;else l=t[16];return l}
export{oje};
