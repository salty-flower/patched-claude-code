// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{S}from"./chunk-6qjhsn35.js";import{e}from"./chunk-437ab22y.js";import{Jt,Ne,d,Ct,L}from"./chunk-cf8g1269.js";import{Qs}from"./chunk-fr2yty3r.js";L();function h(){let p=Qs(V);let b=new a;return p.subscribe(()=>{if(p.getState().voiceState!=="recording")b.reset()}),{store:p,levelSmoother:b}}var V={voiceState:"idle",voiceError:null,voiceInterimTranscript:"",voiceAudioLevels:[],voiceWarmingUp:!1,awaitingVoiceSubmitDoubleTap:!1};class a{#e=0;next(t,o){return this.#e=this.#e*o+t*(1-o),this.#e}reset(){this.#e=0}}var n=Jt(null);function D4t(P){let R=S(3),{children:s}=P,[l]=d(h),m;if(R[0]!==s||R[1]!==l)m=e(n.Provider,{value:l,children:s}),R[0]=s,R[1]=l,R[2]=m;else m=R[2];return m}function i(){let f=Ne(n);if(!f){throw Error("useVoiceState must be used within a VoiceProvider")}return f}function Qhe(){return i().store}function $En(){return i().levelSmoother}function Tf(v){let C=S(3),c=Qhe(),g;if(C[0]!==v||C[1]!==c)g=()=>v(c.getState()),C[0]=v,C[1]=c,C[2]=g;else g=C[2];let x=g;return Ct(c.subscribe,x,x)}function Lvt(){return Qhe().setState}function wae(){return Qhe().getState}
export{D4t,Qhe,$En,Tf,Lvt,wae};
