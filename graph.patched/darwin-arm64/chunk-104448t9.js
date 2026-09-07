// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
var s=null,l=null,m=null;function Uir(){if(!m)m=new Intl.DisplayNames(["en"],{type:"language"});return m}function Ks(){if(!s)s=new Intl.Segmenter(void 0,{granularity:"grapheme"});return s}function qRe(e){if(!e)return"";return Ks().segment(e)[Symbol.iterator]().next().value?.segment??""}function c1(e){if(!e)return"";let t="";for(let{segment:r}of Ks().segment(e))t=r;return t}function IU(e){if(!e)return 0;let t=0;for(let r of Ks().segment(e))t++;return t}function wq(e){if(!e)return[];return Array.from(Ks().segment(e),(t)=>t.segment)}function MHn(){if(!l)l=new Intl.Segmenter(void 0,{granularity:"word"});return l}function Bir(e){let t=e.trim();if(t==="")return 0;let r=t.split(/\s+/).length,n=0;for(let i of MHn().segment(t))if(i.isWordLike)n++;return Math.max(r,n)}var g=new Map;function NHn(e,t){let r=`${e}:${t}`,n=g.get(r);if(!n)n=new Intl.RelativeTimeFormat("en",{style:e,numeric:t}),g.set(r,n);return n}var u=null;function FHn(){if(!u)u=Intl.DateTimeFormat().resolvedOptions().timeZone;return u}var a=null;function jir(){if(a===null)try{let e=Intl.DateTimeFormat().resolvedOptions().locale;a=new Intl.Locale(e).language}catch{a=void 0}return a}var f=new WeakMap;function d(e){if(!e)return"";let t=f.get(e);if(t!==void 0)return t;let r=Object.entries(e).sort(([i],[o])=>i<o?-1:i>o?1:0),n="";for(let[i,o]of r)n+=`${i}=${String(o)};`;return f.set(e,n),n}var c=new Map;function dQ(e,t){return t?{...e,timeZone:t}:e}function Tq(e,t){let r=`${e??""}|${d(t)}`,n=c.get(r);if(!n)n=new Intl.DateTimeFormat(e,t),c.set(r,n);return n}var p=new Map;function Wir(e,t){let r=`${e??""}|${d(t)}`,n=p.get(r);if(!n)n=new Intl.NumberFormat(e,t),p.set(r,n);return n}
export{Uir,Ks,qRe,c1,IU,wq,MHn,Bir,NHn,FHn,jir,dQ,Tq,Wir};
