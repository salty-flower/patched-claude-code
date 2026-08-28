// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{S,n}from"./chunk-cmkfpkth.js";import{Du}from"./chunk-js98qmzk.js";function IF(i,u=300000,l){let o=(c)=>typeof u==="function"?u(c):u,e=new Map,t=new Map,a=async(...c)=>{let s=S(c),r=e.get(s);if(r&&l&&!l(r.value,r.timestamp)){if(r.refreshPromise)return r.refreshPromise;e.delete(s),r=void 0}let h=Date.now();if(!r){let f=t.get(s);if(f)return f;let g=i(...c);t.set(s,g);try{let m=await g;if(t.get(s)===g)e.set(s,{value:m,timestamp:Date.now(),refreshing:!1,lifetimeMs:o(m)});return m}finally{if(t.get(s)===g)t.delete(s)}}if(r&&h-r.timestamp>r.lifetimeMs&&!r.refreshing){r.refreshing=!0;let f=r,g=i(...c);return f.refreshPromise=g,g.then((m)=>{if(e.get(s)===f)e.set(s,{value:m,timestamp:Date.now(),refreshing:!1,lifetimeMs:o(m)})}).catch((m)=>{if(n(String(m),{level:"error"}),e.get(s)===f)e.delete(s)}),r.value}return e.get(s).value};return a.cache={clear:()=>{e.clear(),t.clear()}},a}function mk(i,u,l=100){let o=new Du({max:l}),e=(...t)=>{let a=u(...t),c=o.get(a);if(c!==void 0)return c;let s=i(...t);return o.set(a,s),s};return e.cache={clear:()=>o.clear(),size:()=>o.size,delete:(t)=>o.delete(t),get:(t)=>o.peek(t),has:(t)=>o.has(t),set:(t,a)=>void o.set(t,a)},e}var d=new Set;function uA(i){return d.add(i),i}function Uwe(i,u){let l=[];for(let o of u){let e=i.get(o);if(e!==void 0)l.push([o,e])}i.clear();for(let[o,e]of l)i.set(o,e)}var R=128;function u7e(i,u,l){let o=l?.maxSize??R,e=new Map;d.add(e);function t(...a){let c=u?u(...a):a[0],s=e.get(c);if(s)return s;let r=i(...a);if(e.size>=o)e.delete(e.keys().next().value);return e.set(c,r),r.catch(()=>{if(e.get(c)===r)e.delete(c)}),r}return t.cache=e,t}
export{IF,mk,uA,Uwe,u7e};
