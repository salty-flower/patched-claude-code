// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{at,j,Mf}from"./chunk-dxktn51d.js";import{pre,Zde}from"./chunk-qaefbavh.js";import{sG}from"./chunk-98hkyvxb.js";class r{#e;get(){return this.#e}replace(e){this.#e=e}}var u=new at(()=>new r);function MHr(){return u.peek(j())?.get()}function c4n(){return(pre()&&!Zde()?void 0:MHr())??(Mf()?"UTC":void 0)}function POo(){let e=new Date,n=MHr();if(n!==void 0){let t=new Map(sG("en-US",{timeZone:n,year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(e).map((o)=>[o.type,o.value]));return`${t.get("year")}-${t.get("month")}-${t.get("day")}`}let i=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),d=String(e.getDate()).padStart(2,"0");return`${i}-${a}-${d}`}class s{#e;get(){return this.#e??=POo(),this.#e}clear(){this.#e=void 0}get captured(){return this.#e!==void 0}}var Wan=new at(()=>new s);function IOo(e){return Wan.of(e).get()}function FUs(){return IOo(j())}function UUs(){return new Date().toLocaleString("en-US",{month:"long",year:"numeric"})}
export{MHr,c4n,POo,Wan,IOo,FUs,UUs};
