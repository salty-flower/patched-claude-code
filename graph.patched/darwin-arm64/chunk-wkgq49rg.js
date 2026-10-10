// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{lt,B,Rb}from"./chunk-4bw62nzm.js";import{m8,Zde}from"./chunk-bk5ct2gw.js";import{zB}from"./chunk-eb9r2hbv.js";class r{#e;get(){return this.#e}replace(e){this.#e=e}}var u=new lt(()=>new r);function Syr(){return u.peek(B())?.get()}function wLn(){return(m8()&&!Zde()?void 0:Syr())??(Rb()?"UTC":void 0)}function Tdo(){let e=new Date,n=Syr();if(n!==void 0){let t=new Map(zB("en-US",{timeZone:n,year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(e).map((o)=>[o.type,o.value]));return`${t.get("year")}-${t.get("month")}-${t.get("day")}`}let i=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),d=String(e.getDate()).padStart(2,"0");return`${i}-${a}-${d}`}class s{#e;get(){return this.#e??=Tdo(),this.#e}clear(){this.#e=void 0}get captured(){return this.#e!==void 0}}var LXt=new lt(()=>new s);function Rdo(e){return LXt.of(e).get()}function Fms(){return Rdo(B())}function $ms(){return new Date().toLocaleString("en-US",{month:"long",year:"numeric"})}
export{Syr,wLn,Tdo,LXt,Rdo,Fms,$ms};
