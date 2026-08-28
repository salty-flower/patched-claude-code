// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{v,n}from"./chunk-akz0cj0f.js";import{Ea}from"./chunk-vbtj2k8h.js";import{J$n,xF,IF}from"./chunk-fcb9ddnr.js";import{Wl}from"./chunk-y7fk9hvk.js";import{e}from"./chunk-azctepqx.js";import{U,Zn,E,N}from"./chunk-q0z49y3j.js";N();function yJ({scope:t,bindings:i,active:o=!0,preemptive:a=!1,swallowAll:f=!1,claimFocus:l=!1,ref:d,flexGrow:D=0,flexDirection:O,flexShrink:R,children:H}){let y=E(null),p=Wl(),b=E([]);b.current=o?i:[];let A=U((r)=>C(r,b.current),[]),S=M(t,o,a,f,b.current),g=o&&a&&Boolean(t),h=g&&f;Zn(()=>{if(!p)return;let r=y.current;if(!r)return;let{decls:c,scopesChanged:s,preemptiveScopes:m,swallowAll:u}=p.keyHandlerRegistry,K={scope:t,active:o,preemptive:a,swallowAll:f,entriesRef:b};if(c.set(r,K),g&&t){if(k(m,t),h)k(u,t)}return s.emit(),()=>{if(c.delete(r),g&&t){if(B(m,t),h)B(u,t)}s.emit()}},[p,t,g,h,S]),Zn(()=>{if(!l)return;let r=y.current;if(!r)return;let c=IF(r),s=!1,m=()=>{if(s)return;let u=y.current;if(!u)return;let K=c.activeElement;if(K&&xF(K,u))return;s=!0;try{c.focus(u)}finally{s=!1}};return c.pushAutoFocusFallback(r),m(),c.subscribe(m)},[l]);let x=E(!1);Zn(()=>{return},[t,l,p]);let w=U((r)=>{if(y.current=r,typeof d==="function")d(r);else if(d)d.current=r},[d]);return e(Ea,{ref:w,keybindingScope:t,onAction:A,tabIndex:l?-1:void 0,flexGrow:D,flexDirection:O,flexShrink:R,children:H})}function C(t,i){for(let o of i){if(o.action!==t.action)continue;if(o.chordOnly&&!t.isChordCompletion)continue;if(o.run()===!1)continue;t.consume();return}}function k(t,i){t.set(i,(t.get(i)??0)+1)}function B(t,i){let o=(t.get(i)??0)-1;if(o<=0)t.delete(i);else t.set(i,o)}function M(t,i,o,a,f){return v([t??"",i,o,a,f.map((l)=>[l.action??"",l.hint??"",Boolean(l.chordOnly)])])}
export{yJ};
