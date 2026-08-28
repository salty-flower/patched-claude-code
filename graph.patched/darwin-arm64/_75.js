// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{$E as q,YE as C}from"./_294.js";import{M_a as v,P_a as j}from"./_485.js";import{Ibb as u,ecb as B,kbb as f,nbb as t}from"./_488.js";import{ieb as L,jeb as z}from"./_496.js";import{leb as e,meb as i,neb as D}from"./_497.js";import{iJb as d,lJb as A}from"./_577.js";import{$ad as k,Zad as m}from"./_800.js";import{Fxd as p,Hxd as b}from"./_839.js";A();B();j();k();q();D();z();function F(V){let o=L(17),{Wizard:g,cancelledEvent:x,onDone:y}=V,P=u(),R=C(),[s,Y]=d(null),T;if(o[0]!==P||o[1]!==R)T=()=>{P.exit();let{proactivityLevel:Z,toolPermissionContext:w}=R.getState();import("./chunk-4af1t06n.js").then((oo)=>oo.execRelaunch({proactivity:{proactivityLevel:Z,toolPermissionContext:w}}))},o[0]=P,o[1]=R,o[2]=T;else T=o[2];const _=s!==null;let X;if(o[3]!==_)X={context:"Confirmation",isActive:_},o[3]=_,o[4]=X;else X=o[4];if(v("confirm:yes",T,X),s!==null){let n;if(o[5]!==s)n=e(t,{color:"success",children:s}),o[5]=s,o[6]=n;else n=o[6];let r;if(o[7]===p)r=i(t,{dimColor:!0,children:["Press ",e(t,{bold:!0,children:"Enter"})," to restart Claude Code."]}),o[7]=r;else r=o[7];let c;if(o[8]!==n)c=i(f,{flexDirection:"column",gap:1,marginTop:1,children:[n,r]}),o[8]=n,o[9]=c;else c=o[9];return c}let n;if(o[10]===p)n=(eo)=>Y(eo),o[10]=n;else n=o[10];let r;if(o[11]!==x||o[12]!==y)r=()=>{m(x,{}),y()},o[11]=x,o[12]=y,o[13]=r;else r=o[13];let c;if(o[14]!==g||o[15]!==r)c=e(g,{onComplete:n,onCancel:r}),o[14]=g,o[15]=r,o[16]=c;else c=o[16];return c}
export{F as ki};
