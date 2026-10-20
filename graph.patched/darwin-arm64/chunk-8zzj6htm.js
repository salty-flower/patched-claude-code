// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{at,j,Mf}from"./chunk-kpqr86hf.js";import{Sre,ice}from"./chunk-vtp7mn0a.js";import{m2}from"./chunk-qd2qdtqa.js";class r{#e;get(){return this.#e}replace(e){this.#e=e}}var u=new at(()=>new r);function tHr(){return u.peek(j())?.get()}function Rqn(){return(Sre()&&!ice()?void 0:tHr())??(Mf()?"UTC":void 0)}function sMo(){let e=new Date,n=tHr();if(n!==void 0){let t=new Map(m2("en-US",{timeZone:n,year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(e).map((o)=>[o.type,o.value]));return`${t.get("year")}-${t.get("month")}-${t.get("day")}`}let i=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),d=String(e.getDate()).padStart(2,"0");return`${i}-${a}-${d}`}class s{#e;get(){return this.#e??=sMo(),this.#e}clear(){this.#e=void 0}get captured(){return this.#e!==void 0}}var oln=new at(()=>new s);function iMo(e){return oln.of(e).get()}function k1s(){return iMo(j())}function C1s(){return new Date().toLocaleString("en-US",{month:"long",year:"numeric"})}
export{tHr,Rqn,sMo,oln,iMo,k1s,C1s};
