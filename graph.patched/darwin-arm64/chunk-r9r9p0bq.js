// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{nt,U,cm}from"./chunk-ersar6wn.js";import{Wse,Gpe}from"./chunk-923em3jx.js";import{Sz}from"./chunk-380qngfk.js";class r{#e;get(){return this.#e}replace(e){this.#e=e}}var u=new nt(()=>new r);function MWr(){return u.peek(U())?.get()}function aJn(){return(Wse()&&!Gpe()?void 0:MWr())??(cm()?"UTC":void 0)}function vWo(){let e=new Date,n=MWr();if(n!==void 0){let t=new Map(Sz("en-US",{timeZone:n,year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(e).map((o)=>[o.type,o.value]));return`${t.get("year")}-${t.get("month")}-${t.get("day")}`}let i=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),d=String(e.getDate()).padStart(2,"0");return`${i}-${a}-${d}`}class s{#e;get(){return this.#e??=vWo(),this.#e}clear(){this.#e=void 0}get captured(){return this.#e!==void 0}}var qmn=new nt(()=>new s);function kWo(e){return qmn.of(e).get()}function K8s(){return kWo(U())}function q8s(){return new Date().toLocaleString("en-US",{month:"long",year:"numeric"})}
export{MWr,aJn,vWo,qmn,kWo,K8s,q8s};
