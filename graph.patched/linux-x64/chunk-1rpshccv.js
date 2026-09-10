// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{y}from"./chunk-spjasdq6.js";import{e}from"./chunk-qs39f0kj.js";import{Vt,De,d,kt,L}from"./chunk-kt4npzgg.js";import{Ei}from"./chunk-cxhjnr5a.js";L();function x(){let p=Ei(S);let m=new a;return p.subscribe(()=>{if(p.getState().voiceState!=="recording")m.reset()}),{store:p,levelSmoother:m}}var S={voiceState:"idle",voiceError:null,voiceInterimTranscript:"",voiceAudioLevels:[],voiceWarmingUp:!1,awaitingVoiceSubmitDoubleTap:!1};class a{#e=0;next(t,o){return this.#e=this.#e*o+t*(1-o),this.#e}reset(){this.#e=0}}var n=Vt(null);function RNt(P){let R=y(3),{children:s}=P,[l]=d(x),V;if(R[0]!==s||R[1]!==l)V=e(n.Provider,{value:l,children:s}),R[0]=s,R[1]=l,R[2]=V;else V=R[2];return V}function i(){let b=De(n);if(!b){throw Error("useVoiceState must be used within a VoiceProvider")}return b}function Wue(){return i().store}function Min(){return i().levelSmoother}function fp(v){let C=y(3),c=Wue(),f;if(C[0]!==v||C[1]!==c)f=()=>v(c.getState()),C[0]=v,C[1]=c,C[2]=f;else f=C[2];let g=f;return kt(c.subscribe,g,g)}function _dt(){return Wue().setState}function Vte(){return Wue().getState}
export{RNt,Wue,Min,fp,_dt,Vte};
