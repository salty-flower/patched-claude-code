// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
var m=Object.create;var{getPrototypeOf:n,defineProperty:g,getOwnPropertyNames:o}=Object;var l=Object.prototype.hasOwnProperty;function p(a){return this[a]}var q,r,be=(a,c,d)=>{var e=a!=null&&typeof a==="object";if(e){var i=c?q??=new WeakMap:r??=new WeakMap,j=i.get(a);if(j)return j}d=a!=null?m(n(a)):{};let f=c||!a||!a.__esModule||!l.call(a,"default")?g(d,"default",{value:a,enumerable:!0}):d;if(a&&typeof a==="object"||typeof a==="function"){for(let h of o(a))if(!l.call(f,h))g(f,h,{get:p.bind(a,h),enumerable:!0})}if(e)i.set(a,f);return f};var k=(a,c)=>()=>(c||a((c={exports:{}}).exports,c),c.exports);var s=(a)=>a;function t(a,c){this[a]=s.bind(null,c)}var Hr=(a,c)=>{for(var d in c)g(a,d,{get:c[d],enumerable:!0,configurable:!0,set:t.bind(c,d)})};var Ui=(a,c,d)=>()=>{if(a)try{c=a(a=0)}catch(e){d=[e]}if(d)throw d[0];return c};var b=Symbol.for("react.memo_cache_sentinel"),hn=Symbol.for("react.early_return_sentinel"),ePs=(a,c,d)=>{for(var e in c)g(a,e,{get:c[e],set:d[e],enumerable:!0,configurable:!0})},Me=((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value});
export{be,k,Hr,Ui,b,hn,ePs,Me};
