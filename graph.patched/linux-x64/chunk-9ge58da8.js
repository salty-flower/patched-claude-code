// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{S,n}from"./chunk-d0cr5d2v.js";import{Ya}from"./chunk-d4fzrbr9.js";import{Y2n,HU,wU}from"./chunk-rwc09rdb.js";import{Hc}from"./chunk-73qfv3w2.js";import{e}from"./chunk-ys8dsnqt.js";import{U,Gn,v,F}from"./chunk-v59pjxqq.js";F();function zZ({scope:t,bindings:i,active:o=!0,preemptive:a=!1,swallowAll:f=!1,claimFocus:l=!1,ref:d,flexGrow:B=0,flexDirection:D,flexShrink:O,children:R}){let y=v(null),p=Hc(),b=v([]);b.current=o?i:[];let H=U((r)=>C(r,b.current),[]),A=M(t,o,a,f,b.current),g=o&&a&&Boolean(t),E=g&&f;Gn(()=>{if(!p)return;let r=y.current;if(!r)return;let{decls:c,scopesChanged:s,preemptiveScopes:m,swallowAll:u}=p.keyHandlerRegistry,K={scope:t,active:o,preemptive:a,swallowAll:f,entriesRef:b};if(c.set(r,K),g&&t){if(x(m,t),E)x(u,t)}return s.emit(),()=>{if(c.delete(r),g&&t){if(k(m,t),E)k(u,t)}s.emit()}},[p,t,g,E,A]),Gn(()=>{if(!l)return;let r=y.current;if(!r)return;let c=wU(r),s=!1,m=()=>{if(s)return;let u=y.current;if(!u)return;let K=c.activeElement;if(K&&HU(K,u))return;s=!0;try{c.focus(u)}finally{s=!1}};return c.pushAutoFocusFallback(r),m(),c.subscribe(m)},[l]);let h=v(!1);Gn(()=>{return},[t,l,p]);let w=U((r)=>{if(y.current=r,typeof d==="function")d(r);else if(d)d.current=r},[d]);return e(Ya,{ref:w,keybindingScope:t,onAction:H,tabIndex:l?-1:void 0,flexGrow:B,flexDirection:D,flexShrink:O,children:R})}function C(t,i){for(let o of i){if(o.action!==t.action)continue;if(o.chordOnly&&!t.isChordCompletion)continue;if(o.run()===!1)continue;t.consume();return}}function x(t,i){t.set(i,(t.get(i)??0)+1)}function k(t,i){let o=(t.get(i)??0)-1;if(o<=0)t.delete(i);else t.set(i,o)}function M(t,i,o,a,f){return S([t??"",i,o,a,f.map((l)=>[l.action??"",l.hint??"",Boolean(l.chordOnly)])])}
export{zZ};
