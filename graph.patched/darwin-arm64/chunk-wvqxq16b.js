// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{Ie}from"./chunk-29aedz4e.js";import{yt}from"./chunk-8mvda08c.js";import{t}from"./chunk-f8eqwxpt.js";function u(){let r=Ie(),e=new Map,o=0;return{emit(i,s){if(o===0){e.set(i,s);return}r.emit(i,s)},subscribe(i){o++;let s=[...e];e.clear();for(let[g,l]of s)i(g,l);let c=r.subscribe(i),n=!0;return()=>{if(n)n=!1,o--,c()}}}}var mNn=new yt(u);function KJt(r){return(e,o)=>{t(`[remote-tools] ${e}: ${o}`),mNn.of(r).emit(e,o)}}
export{mNn,KJt};
