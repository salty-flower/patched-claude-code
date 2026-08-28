// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{g}from"./chunk-8mr77ghb.js";import{e}from"./chunk-80eepr01.js";import{fn,We,u,Pt,N}from"./chunk-5752v0zq.js";import{Ra}from"./chunk-xc5hdwza.js";N();function h(){let v=Ra(V);let m=new a;return v.subscribe(()=>{if(v.getState().voiceState!=="recording")m.reset()}),{store:v,levelSmoother:m}}var V={voiceState:"idle",voiceError:null,voiceInterimTranscript:"",voiceAudioLevels:[],voiceWarmingUp:!1,awaitingVoiceSubmitDoubleTap:!1};class a{#e=0;next(t,o){return this.#e=this.#e*o+t*(1-o),this.#e}reset(){this.#e=0}}var n=fn(null);function eAt(P){let R=g(3),{children:l}=P,[p]=u(h),d;if(R[0]!==l||R[1]!==p)d=e(n.Provider,{value:p,children:l}),R[0]=l,R[1]=p,R[2]=d;else d=R[2];return d}function i(){let b=We(n);if(!b){throw Error("useVoiceState must be used within a VoiceProvider")}return b}function qre(){return i().store}function r8t(){return i().levelSmoother}function tp(S){let C=g(3),c=qre(),f;if(C[0]!==S||C[1]!==c)f=()=>S(c.getState()),C[0]=S,C[1]=c,C[2]=f;else f=C[2];let x=f;return Pt(c.subscribe,x,x)}function hZe(){return qre().setState}function sX(){return qre().getState}
export{eAt,qre,r8t,tp,hZe,sX};
