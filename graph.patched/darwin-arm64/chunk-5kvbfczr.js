// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{y}from"./chunk-pqa42v56.js";import{e}from"./chunk-6ccz96s4.js";import{yn,qe,p,kt,j}from"./chunk-8wk5q2vw.js";import{rl}from"./chunk-19ykvtp4.js";j();function x(){let v=rl(V);let m=new a;return v.subscribe(()=>{if(v.getState().voiceState!=="recording")m.reset()}),{store:v,levelSmoother:m}}var V={voiceState:"idle",voiceError:null,voiceInterimTranscript:"",voiceAudioLevels:[],voiceWarmingUp:!1,awaitingVoiceSubmitDoubleTap:!1};class a{#e=0;next(t,o){return this.#e=this.#e*o+t*(1-o),this.#e}reset(){this.#e=0}}var n=yn(null);function RDt(P){let R=y(3),{children:s}=P,[l]=p(x),d;if(R[0]!==s||R[1]!==l)d=e(n.Provider,{value:l,children:s}),R[0]=s,R[1]=l,R[2]=d;else d=R[2];return d}function i(){let b=qe(n);if(!b){throw Error("useVoiceState must be used within a VoiceProvider")}return b}function nce(){return i().store}function Tnn(){return i().levelSmoother}function up(S){let C=y(3),c=nce(),f;if(C[0]!==S||C[1]!==c)f=()=>S(c.getState()),C[0]=S,C[1]=c,C[2]=f;else f=C[2];let g=f;return kt(c.subscribe,g,g)}function Fat(){return nce().setState}function Vee(){return nce().getState}
export{RDt,nce,Tnn,up,Fat,Vee};
