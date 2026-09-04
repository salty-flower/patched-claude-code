// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{S,t}from"./chunk-84crg0gy.js";import{el}from"./chunk-npzr9fk5.js";import{y2n,E2,A2}from"./chunk-9ge67yfx.js";import{ul}from"./chunk-ztevm5d3.js";import{e}from"./chunk-6ccz96s4.js";import{B,Mn,v,j}from"./chunk-8wk5q2vw.js";j();function qee({scope:n,bindings:i,active:o=!0,preemptive:a=!1,swallowAll:f=!1,claimFocus:l=!1,ref:d,flexGrow:D=0,flexDirection:O,flexShrink:R,children:H}){let y=v(null),p=ul(),b=v([]);b.current=o?i:[];let A=B((r)=>M(r,b.current),[]),w=N(n,o,a,f,b.current),g=o&&a&&Boolean(n),E=g&&f;Mn(()=>{if(!p)return;let r=y.current;if(!r)return;let{decls:c,scopesChanged:s,preemptiveScopes:m,swallowAll:u}=p.keyHandlerRegistry,K={scope:n,active:o,preemptive:a,swallowAll:f,entriesRef:b};if(c.set(r,K),g&&n){if(x(m,n),E)x(u,n)}return s.emit(),()=>{if(c.delete(r),g&&n){if(k(m,n),E)k(u,n)}s.emit()}},[p,n,g,E,w]),Mn(()=>{if(!l)return;let r=y.current;if(!r)return;let c=A2(r),s=!1,m=()=>{if(s)return;let u=y.current;if(!u)return;let K=c.activeElement;if(K&&E2(K,u))return;s=!0;try{c.focus(u)}finally{s=!1}};return c.pushAutoFocusFallback(r),m(),c.subscribe(m)},[l]);let h=v(!1);Mn(()=>{return},[n,l,p]);let C=B((r)=>{if(y.current=r,typeof d==="function")d(r);else if(d)d.current=r},[d]);return e(el,{ref:C,keybindingScope:n,onAction:A,tabIndex:l?-1:void 0,flexGrow:D,flexDirection:O,flexShrink:R,children:H})}function M(n,i){for(let o of i){if(o.action!==n.action)continue;if(o.chordOnly&&!n.isChordCompletion)continue;if(o.run()===!1)continue;n.consume();return}}function x(n,i){n.set(i,(n.get(i)??0)+1)}function k(n,i){let o=(n.get(i)??0)-1;if(o<=0)n.delete(i);else n.set(i,o)}function N(n,i,o,a,f){return S([n??"",i,o,a,f.map((l)=>[l.action??"",l.hint??"",Boolean(l.chordOnly)])])}
export{qee};
