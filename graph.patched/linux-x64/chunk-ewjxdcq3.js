// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{y}from"./chunk-a5ahs27a.js";import{e}from"./chunk-ys8dsnqt.js";import{_n,ze,u,$t,F}from"./chunk-v59pjxqq.js";import{Ma}from"./chunk-bgkp1vh7.js";F();function x(){let v=Ma(V);let m=new a;return v.subscribe(()=>{if(v.getState().voiceState!=="recording")m.reset()}),{store:v,levelSmoother:m}}var V={voiceState:"idle",voiceError:null,voiceInterimTranscript:"",voiceAudioLevels:[],voiceWarmingUp:!1,awaitingVoiceSubmitDoubleTap:!1};class a{#e=0;next(t,o){return this.#e=this.#e*o+t*(1-o),this.#e}reset(){this.#e=0}}var n=_n(null);function yRt(P){let R=y(3),{children:l}=P,[p]=u(x),d;if(R[0]!==l||R[1]!==p)d=e(n.Provider,{value:p,children:l}),R[0]=l,R[1]=p,R[2]=d;else d=R[2];return d}function i(){let b=ze(n);if(!b){throw Error("useVoiceState must be used within a VoiceProvider")}return b}function lse(){return i().store}function SJt(){return i().levelSmoother}function kf(S){let C=y(3),c=lse(),f;if(C[0]!==S||C[1]!==c)f=()=>S(c.getState()),C[0]=S,C[1]=c,C[2]=f;else f=C[2];let g=f;return $t(c.subscribe,g,g)}function Mnt(){return lse().setState}function RQ(){return lse().getState}
export{yRt,lse,SJt,kf,Mnt,RQ};
