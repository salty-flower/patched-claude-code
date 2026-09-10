// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{y}from"./chunk-hshe4789.js";import{n}from"./chunk-dqjxa0y4.js";import{Tt}from"./chunk-aash1vn4.js";import{U,e,r}from"./chunk-zhg3ync1.js";import{Cw,zl,r_,re,E,Rr,C,N}from"./chunk-w8p0f9k6.js";import{en}from"./chunk-2cavdc9w.js";N();N();function D(I){return I!==""}function P(R,v){r_(R)?R.key??v:v;return r(U,{children:[v>0&&e(n,{dimColor:!0,children:" \xB7 "}),R]})}function de(F){let k=y(5),{children:m}=F,i,p;if(k[0]!==m){p=en;bb0:{let T=Cw.toArray(m).filter(D);if(T.length===0){p=null;break bb0}i=T.map(P)}k[0]=m,k[1]=i,k[2]=p}else i=k[1],p=k[2];if(p!==en)return p;let b;if(k[3]!==i)b=e(U,{children:i}),k[3]=i,k[4]=b;else b=k[4];return b}N();var L=800;function NI(o,u,t,c=L){let a=Tt(),l=C(0),s=C(void 0),S=Rr(()=>o(!1)),f=re(()=>{if(s.current)s.current(),s.current=void 0},[]);return E(()=>()=>{if(s.current)f(),S()},[f]),re(()=>{let d=Date.now();if(d-l.current<=c&&s.current!==void 0)f(),o(!1),u();else t?.(),o(!0),f(),s.current=a.setTimeout(()=>{o(!1),s.current=void 0},c);l.current=d},[o,u,t,f,a,c])}
export{de,NI};
