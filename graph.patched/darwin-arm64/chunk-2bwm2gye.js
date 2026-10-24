// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{s,GR}from"./chunk-7car90a2.js";import{w}from"./chunk-zqxc4qtb.js";import{an,J5}from"./chunk-vj9gqe2s.js";import{qs}from"./chunk-hpy9am98.js";import{cs}from"./chunk-bezz9j8a.js";import{Ce}from"./chunk-9vjqn6fm.js";import{RT}from"./chunk-5gjnrzjz.js";import{e}from"./chunk-f790ajz4.js";import{Gt,de,Se,te,A,y,j}from"./chunk-s8vmszp2.js";j();function ds(a,o,n=!0){let{handleInterrupt:r,handleExit:t,exitState:i}=b(o,a),l=te(()=>({"app:interrupt":r,"app:exit":t}),[r,t]);return an(l,{context:"Global",isActive:n}),i}function sPt(a,o,n=!0){let{handleInterrupt:r,handleExit:t,exitState:i}=b(o,a);return{entries:te(()=>n?[{action:"app:interrupt",run:r},{action:"app:exit",run:t}]:[],[n,r,t]),exitState:i}}function b(a,o){let{exit:n}=GR(),[r,t]=y({pending:!1,keyName:null}),i=te(()=>o??n,[o,n]),l=RT(),p=qs("app:interrupt","Global","Ctrl-C"),u=qs("app:exit","Global","Ctrl-D"),E=l&&p?p:"Ctrl-C",C=l&&u?u:"Ctrl-D",m=J5((x)=>t({pending:x,keyName:E}),i),d=J5((x)=>t({pending:x,keyName:C}),i),h=de(()=>{if(a?.())return;m()},[m,a]),D=de(()=>{d()},[d]);return{handleInterrupt:h,handleExit:D,exitState:r}}j();var c=Gt(null),Xz=1;function Llt(a){let i=w(8),{reserve:o,children:n}=a,r=A(null),{rows:t}=cs(Ce()),l;if(i[0]!==o||i[1]!==t)l={box:r,rows:t,reserve:o},i[0]=o,i[1]=t,i[2]=l;else l=i[2];let p;if(i[3]!==n)p=e(s,{ref:r,flexDirection:"column",children:n}),i[3]=n,i[4]=p;else p=i[4];let u;if(i[5]!==l||i[6]!==p)u=e(c,{value:l,children:p}),i[5]=l,i[6]=p,i[7]=u;else u=i[7];return u}function Jz(){return Se(c)}
export{ds,sPt,Xz,Llt,Jz};
