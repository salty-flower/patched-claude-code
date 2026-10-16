// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{lt,j,Rw}from"./chunk-xzypj06m.js";import{jae,EOe}from"./chunk-1901fdh6.js";import{OW}from"./chunk-kc7vd1v6.js";class r{#e;get(){return this.#e}replace(e){this.#e=e}}var u=new lt(()=>new r);function $Rr(){return u.peek(j())?.get()}function EGn(){return(jae()&&!EOe()?void 0:$Rr())??(Rw()?"UTC":void 0)}function $ko(){let e=new Date,n=$Rr();if(n!==void 0){let t=new Map(OW("en-US",{timeZone:n,year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(e).map((o)=>[o.type,o.value]));return`${t.get("year")}-${t.get("month")}-${t.get("day")}`}let i=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),d=String(e.getDate()).padStart(2,"0");return`${i}-${a}-${d}`}class s{#e;get(){return this.#e??=$ko(),this.#e}clear(){this.#e=void 0}get captured(){return this.#e!==void 0}}var zrn=new lt(()=>new s);function Uko(e){return zrn.of(e).get()}function UIs(){return Uko(j())}function BIs(){return new Date().toLocaleString("en-US",{month:"long",year:"numeric"})}
export{$Rr,EGn,$ko,zrn,Uko,UIs,BIs};
