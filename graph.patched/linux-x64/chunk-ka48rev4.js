// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{g}from"./chunk-yhctzac5.js";import{e}from"./chunk-azctepqx.js";import{fn,ze,u,Rt,N}from"./chunk-q0z49y3j.js";import{Ca}from"./chunk-3ebcpkcn.js";N();function h(){let v=Ca(V);let m=new a;return v.subscribe(()=>{if(v.getState().voiceState!=="recording")m.reset()}),{store:v,levelSmoother:m}}var V={voiceState:"idle",voiceError:null,voiceInterimTranscript:"",voiceAudioLevels:[],voiceWarmingUp:!1,awaitingVoiceSubmitDoubleTap:!1};class a{#e=0;next(t,o){return this.#e=this.#e*o+t*(1-o),this.#e}reset(){this.#e=0}}var n=fn(null);function eTt(P){let R=g(3),{children:l}=P,[p]=u(h),d;if(R[0]!==l||R[1]!==p)d=e(n.Provider,{value:p,children:l}),R[0]=l,R[1]=p,R[2]=d;else d=R[2];return d}function i(){let b=ze(n);if(!b){throw Error("useVoiceState must be used within a VoiceProvider")}return b}function jre(){return i().store}function t8t(){return i().levelSmoother}function ep(S){let C=g(3),c=jre(),f;if(C[0]!==S||C[1]!==c)f=()=>S(c.getState()),C[0]=S,C[1]=c,C[2]=f;else f=C[2];let x=f;return Rt(c.subscribe,x,x)}function hZe(){return jre().setState}function nX(){return jre().getState}
export{eTt,jre,t8t,ep,hZe,nX};
