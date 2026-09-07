// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{b,t}from"./chunk-1tk5haqn.js";import{Ba}from"./chunk-0312mgjz.js";import{oFn,dU,fU}from"./chunk-et3f2ats.js";import{Qa}from"./chunk-ttwn6n1g.js";import{e}from"./chunk-smtaex5n.js";import{re,kn,v,N}from"./chunk-vm1tjjym.js";N();function dZ({scope:n,bindings:i,active:o=!0,preemptive:a=!1,swallowAll:f=!1,claimFocus:l=!1,ref:d,flexGrow:D=0,flexDirection:O,flexShrink:R,children:H}){let y=v(null),p=Qa(),g=v([]);g.current=o?i:[];let A=re((r)=>C(r,g.current),[]),S=M(n,o,a,f,g.current),K=o&&a&&Boolean(n),h=K&&f;kn(()=>{if(!p)return;let r=y.current;if(!r)return;let{decls:c,scopesChanged:s,preemptiveScopes:m,swallowAll:u}=p.keyHandlerRegistry,E={scope:n,active:o,preemptive:a,swallowAll:f,entriesRef:g};if(c.set(r,E),K&&n){if(k(m,n),h)k(u,n)}return s.emit(),()=>{if(c.delete(r),K&&n){if(B(m,n),h)B(u,n)}s.emit()}},[p,n,K,h,S]),kn(()=>{if(!l)return;let r=y.current;if(!r)return;let c=fU(r),s=!1,m=()=>{if(s)return;let u=y.current;if(!u)return;let E=c.activeElement;if(E&&dU(E,u))return;s=!0;try{c.focus(u)}finally{s=!1}};return c.pushAutoFocusFallback(r),m(),c.subscribe(m)},[l]);let x=v(!1);kn(()=>{return},[n,l,p]);let w=re((r)=>{if(y.current=r,typeof d==="function")d(r);else if(d)d.current=r},[d]);return e(Ba,{ref:w,keybindingScope:n,onAction:A,tabIndex:l?-1:void 0,flexGrow:D,flexDirection:O,flexShrink:R,children:H})}function C(n,i){for(let o of i){if(o.action!==n.action)continue;if(o.chordOnly&&!n.isChordCompletion)continue;if(o.run()===!1)continue;n.consume();return}}function k(n,i){n.set(i,(n.get(i)??0)+1)}function B(n,i){let o=(n.get(i)??0)-1;if(o<=0)n.delete(i);else n.set(i,o)}function M(n,i,o,a,f){return b([n??"",i,o,a,f.map((l)=>[l.action??"",l.hint??"",Boolean(l.chordOnly)])])}
export{dZ};
