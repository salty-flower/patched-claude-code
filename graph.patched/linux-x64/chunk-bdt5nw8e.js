// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{$n}from"./chunk-30zk17wm.js";import{Be}from"./chunk-7s3c5qqq.js";import{n}from"./chunk-d0cr5d2v.js";function Ccr(){let i=Be(),e=new Map,o=0;return{emit(t,r){if(o===0){e.set(t,r);return}i.emit(t,r)},subscribe(t){o++;let r=[...e];e.clear();for(let[g,l]of r)t(g,l);let c=i.subscribe(t),s=!0;return()=>{if(s)s=!1,o--,c()}}}}var eTt=new $n(Ccr);function tTt(i){return(e,o)=>{n(`[remote-tools] ${e}: ${o}`),eTt.of(i).emit(e,o)}}
export{Ccr,eTt,tTt};
