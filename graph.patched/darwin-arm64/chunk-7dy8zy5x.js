// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{w}from"./chunk-1qj92kzv.js";import{e}from"./chunk-srmsc891.js";import{Vt,Ie,g,Tt,L}from"./chunk-1cnhgfv0.js";import{zs}from"./chunk-pqg61fxq.js";L();function x(){let u=zs(v);let V=new l;return u.subscribe(()=>{if(u.getState().voiceState!=="recording")V.reset()}),{store:u,levelSmoother:V}}var v={voiceState:"idle",voiceError:null,voiceInterimTranscript:"",voiceAudioLevels:[],voiceWarmingUp:!1,awaitingVoiceSubmitDoubleTap:!1};class l{#e=0;next(o,t){return this.#e=this.#e*t+o*(1-t),this.#e}reset(){this.#e=0}}var i=Vt(null);function Kgn(o){let s=w(3),{children:t}=o,[n]=g(x),c;if(s[0]!==t||s[1]!==n)c=e(i.Provider,{value:n,children:t}),s[0]=t,s[1]=n,s[2]=c;else c=s[2];return c}function r(){let o=Ie(i);if(!o){throw Error("useVoiceState must be used within a VoiceProvider")}return o}function BTe(){return r().store}function D9n(){return r().levelSmoother}function Ym(o){let n=w(3),t=BTe(),s;if(n[0]!==o||n[1]!==t)s=()=>o(t.getState()),n[0]=o,n[1]=t,n[2]=s;else s=n[2];let c=s;return Tt(t.subscribe,c,c)}function UBt(){return BTe().setState}function Jhe(){return BTe().getState}
export{Kgn,BTe,D9n,Ym,UBt,Jhe};
