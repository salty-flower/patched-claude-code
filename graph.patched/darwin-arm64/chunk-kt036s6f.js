// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{w,t}from"./chunk-qmm87fyw.js";import{wl}from"./chunk-2k39abte.js";import{Nlr,uq,D2}from"./chunk-m50792n2.js";import{ol}from"./chunk-kyz8fp2g.js";import{e}from"./chunk-437ab22y.js";import{re,dn,T,M}from"./chunk-ncc6kxz8.js";M();function vae({scope:n,bindings:i,active:o=!0,preemptive:a=!1,swallowAll:f=!1,claimFocus:l=!1,ref:d,flexGrow:k=0,flexDirection:B,flexShrink:D,children:O}){let y=T(null),p=ol(),b=T([]);b.current=o?i:[];let R=re((r)=>S(r,b.current),[]),H=C(n,o,a,f,b.current),g=o&&a&&Boolean(n),E=g&&f;dn(()=>{if(!p)return;let r=y.current;if(!r)return;let{decls:c,scopesChanged:s,preemptiveScopes:m,swallowAll:u}=p.keyHandlerRegistry,K={scope:n,active:o,preemptive:a,swallowAll:f,entriesRef:b};if(c.set(r,K),g&&n){if(x(m,n),E)x(u,n)}return s.emit(),()=>{if(c.delete(r),g&&n){if(v(m,n),E)v(u,n)}s.emit()}},[p,n,g,E,H]),dn(()=>{if(!l)return;let r=y.current;if(!r)return;let c=D2(r),s=!1,m=()=>{if(s)return;let u=y.current;if(!u)return;let K=c.activeElement;if(K&&uq(K,u))return;s=!0;try{c.focus(u)}finally{s=!1}};return c.pushAutoFocusFallback(r),m(),c.subscribe(m)},[l]);let h=T(!1);dn(()=>{return},[n,l,p]);let A=re((r)=>{if(y.current=r,typeof d==="function")d(r);else if(d)d.current=r},[d]);return e(wl,{ref:A,keybindingScope:n,onAction:R,tabIndex:l?-1:void 0,flexGrow:k,flexDirection:B,flexShrink:D,children:O})}function S(n,i){for(let o of i){if(o.action!==n.action)continue;if(o.chordOnly&&!n.isChordCompletion)continue;if(o.run()===!1)continue;n.consume();return}}function x(n,i){n.set(i,(n.get(i)??0)+1)}function v(n,i){let o=(n.get(i)??0)-1;if(o<=0)n.delete(i);else n.set(i,o)}function C(n,i,o,a,f){return w([n??"",i,o,a,f.map((l)=>[l.action??"",l.hint??"",Boolean(l.chordOnly)])])}
export{vae};
