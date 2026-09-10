// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{b,t}from"./chunk-w930ag8r.js";import{wa}from"./chunk-fj5t20j0.js";import{RWn,Z2,jA}from"./chunk-hmhrmjnf.js";import{ll}from"./chunk-n97hn8zg.js";import{e}from"./chunk-zhg3ync1.js";import{re,fn,C,N}from"./chunk-w8p0f9k6.js";N();function _te({scope:n,bindings:i,active:o=!0,preemptive:a=!1,swallowAll:f=!1,claimFocus:l=!1,ref:d,flexGrow:B=0,flexDirection:D,flexShrink:O,children:R}){let y=C(null),p=ll(),g=C([]);g.current=o?i:[];let H=re((r)=>w(r,g.current),[]),A=M(n,o,a,f,g.current),K=o&&a&&Boolean(n),h=K&&f;fn(()=>{if(!p)return;let r=y.current;if(!r)return;let{decls:c,scopesChanged:s,preemptiveScopes:m,swallowAll:u}=p.keyHandlerRegistry,E={scope:n,active:o,preemptive:a,swallowAll:f,entriesRef:g};if(c.set(r,E),K&&n){if(v(m,n),h)v(u,n)}return s.emit(),()=>{if(c.delete(r),K&&n){if(k(m,n),h)k(u,n)}s.emit()}},[p,n,K,h,A]),fn(()=>{if(!l)return;let r=y.current;if(!r)return;let c=jA(r),s=!1,m=()=>{if(s)return;let u=y.current;if(!u)return;let E=c.activeElement;if(E&&Z2(E,u))return;s=!0;try{c.focus(u)}finally{s=!1}};return c.pushAutoFocusFallback(r),m(),c.subscribe(m)},[l]);let x=C(!1);fn(()=>{return},[n,l,p]);let S=re((r)=>{if(y.current=r,typeof d==="function")d(r);else if(d)d.current=r},[d]);return e(wa,{ref:S,keybindingScope:n,onAction:H,tabIndex:l?-1:void 0,flexGrow:B,flexDirection:D,flexShrink:O,children:R})}function w(n,i){for(let o of i){if(o.action!==n.action)continue;if(o.chordOnly&&!n.isChordCompletion)continue;if(o.run()===!1)continue;n.consume();return}}function v(n,i){n.set(i,(n.get(i)??0)+1)}function k(n,i){let o=(n.get(i)??0)-1;if(o<=0)n.delete(i);else n.set(i,o)}function M(n,i,o,a,f){return b([n??"",i,o,a,f.map((l)=>[l.action??"",l.hint??"",Boolean(l.chordOnly)])])}
export{_te};
