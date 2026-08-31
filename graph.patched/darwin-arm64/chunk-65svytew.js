// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{b,n}from"./chunk-ynzt0fm1.js";import{Xa}from"./chunk-3mehx43h.js";import{ejn,AB,CB}from"./chunk-dxy3a77e.js";import{wc}from"./chunk-jnz6ntmk.js";import{e}from"./chunk-wk3xnwvn.js";import{B,qn,C,F}from"./chunk-w6mhhrt2.js";F();function zZ({scope:t,bindings:i,active:o=!0,preemptive:a=!1,swallowAll:f=!1,claimFocus:l=!1,ref:d,flexGrow:D=0,flexDirection:O,flexShrink:R,children:H}){let y=C(null),p=wc(),g=C([]);g.current=o?i:[];let A=B((r)=>M(r,g.current),[]),S=N(t,o,a,f,g.current),K=o&&a&&Boolean(t),h=K&&f;qn(()=>{if(!p)return;let r=y.current;if(!r)return;let{decls:c,scopesChanged:s,preemptiveScopes:m,swallowAll:u}=p.keyHandlerRegistry,E={scope:t,active:o,preemptive:a,swallowAll:f,entriesRef:g};if(c.set(r,E),K&&t){if(v(m,t),h)v(u,t)}return s.emit(),()=>{if(c.delete(r),K&&t){if(k(m,t),h)k(u,t)}s.emit()}},[p,t,K,h,S]),qn(()=>{if(!l)return;let r=y.current;if(!r)return;let c=CB(r),s=!1,m=()=>{if(s)return;let u=y.current;if(!u)return;let E=c.activeElement;if(E&&AB(E,u))return;s=!0;try{c.focus(u)}finally{s=!1}};return c.pushAutoFocusFallback(r),m(),c.subscribe(m)},[l]);let x=C(!1);qn(()=>{return},[t,l,p]);let w=B((r)=>{if(y.current=r,typeof d==="function")d(r);else if(d)d.current=r},[d]);return e(Xa,{ref:w,keybindingScope:t,onAction:A,tabIndex:l?-1:void 0,flexGrow:D,flexDirection:O,flexShrink:R,children:H})}function M(t,i){for(let o of i){if(o.action!==t.action)continue;if(o.chordOnly&&!t.isChordCompletion)continue;if(o.run()===!1)continue;t.consume();return}}function v(t,i){t.set(i,(t.get(i)??0)+1)}function k(t,i){let o=(t.get(i)??0)-1;if(o<=0)t.delete(i);else t.set(i,o)}function N(t,i,o,a,f){return b([t??"",i,o,a,f.map((l)=>[l.action??"",l.hint??"",Boolean(l.chordOnly)])])}
export{zZ};
