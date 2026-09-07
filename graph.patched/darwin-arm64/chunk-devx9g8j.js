// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{se}from"./chunk-gyxp7wp6.js";import{sst,fB}from"./chunk-g8dbcs7c.js";var l=new Map(Object.entries({keyword:se.blue,built_in:se.cyan,type:se.cyan.dim,literal:se.blue,number:se.green,regexp:se.red,string:se.red,subst:se.reset,symbol:se.reset,class:se.blue,function:se.yellow,title:se.reset,"title.function":se.yellow,"title.class":se.blue,params:se.reset,comment:se.green,doctag:se.green,meta:se.grey,"meta-keyword":se.reset,"meta-string":se.reset,"meta.keyword":se.reset,"meta.string":se.reset,section:se.reset,tag:se.grey,name:se.blue,attr:se.cyan,attribute:se.reset,variable:se.reset,bullet:se.reset,code:se.reset,emphasis:se.italic,strong:se.bold,link:se.underline,quote:se.reset,addition:se.green,deletion:se.red}));function a(e){let t=e.replace(/^hljs-/,"");for(;;){let r=l.get(t);if(r)return r;let n=t.lastIndexOf(".");if(n<0)return;t=t.slice(0,n)}}function g(e){if(typeof e==="string")return e;let t=e.children.map(g).join(""),r=e.scope??e.kind,n=r?a(r):void 0;return n?n(t):t}function u(e,t){let r=t?.language;if(!r)return e;try{let n=fB(r);if(!n)return e;let o=sst().highlight(e,{language:n,ignoreIllegals:!0}),s=o._emitter??o.emitter,i=s?.rootNode??s?.root;if(!i||typeof i==="string")return e;return i.children.map(g).join("")}catch{return e}}function c(e){return fB(e)!==null}var d={highlight:u,supportsLanguage:c};function BR(){return d}
export{BR};
