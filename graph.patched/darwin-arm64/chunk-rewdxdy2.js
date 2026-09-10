// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{y}from"./chunk-hshe4789.js";import{i}from"./chunk-mx473n83.js";import{o,n,BA}from"./chunk-dqjxa0y4.js";import{Fe}from"./chunk-cd603a74.js";import{er}from"./chunk-6vxadp0c.js";import{e,r}from"./chunk-zhg3ync1.js";import{d,N}from"./chunk-w8p0f9k6.js";import{p}from"./chunk-2cavdc9w.js";N();function SGe(A){let t=y(17),{Wizard:u,cancelledEvent:v,onDone:C}=A,g=BA(),x=er(),[a,B]=d(null),E;if(t[0]!==g||t[1]!==x)E=()=>{g.exit();let{proactivityLevel:j,toolPermissionContext:q}=x.getState();import("./chunk-yqa84jyh.js").then((F)=>F.execRelaunch({proactivity:{proactivityLevel:j,toolPermissionContext:q}}))},t[0]=g,t[1]=x,t[2]=E;else E=t[2];const P=a!==null;let J;if(t[3]!==P)J={context:"Confirmation",isActive:P},t[3]=P,t[4]=J;else J=t[4];if(Fe("confirm:yes",E,J),a!==null){let s;if(t[5]!==a)s=e(n,{color:"success",children:a}),t[5]=a,t[6]=s;else s=t[6];let c;if(t[7]===p)c=r(n,{dimColor:!0,children:["Press ",e(n,{bold:!0,children:"Enter"})," to restart Claude Code."]}),t[7]=c;else c=t[7];let l;if(t[8]!==s)l=r(o,{flexDirection:"column",gap:1,marginTop:1,children:[s,c]}),t[8]=s,t[9]=l;else l=t[9];return l}let s;if(t[10]===p)s=(G)=>B(G),t[10]=s;else s=t[10];let c;if(t[11]!==v||t[12]!==C)c=()=>{i(v,{}),C()},t[11]=v,t[12]=C,t[13]=c;else c=t[13];let l;if(t[14]!==u||t[15]!==c)l=e(u,{onComplete:s,onCancel:c}),t[14]=u,t[15]=c,t[16]=l;else l=t[16];return l}
export{SGe};
