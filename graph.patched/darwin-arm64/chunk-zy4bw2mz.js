// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{_}from"./chunk-rykc5fv4.js";import{e}from"./chunk-wk3xnwvn.js";import{yn,We,u,Lt,F}from"./chunk-w6mhhrt2.js";import{Ma}from"./chunk-wf49g251.js";F();function x(){let v=Ma(V);let m=new a;return v.subscribe(()=>{if(v.getState().voiceState!=="recording")m.reset()}),{store:v,levelSmoother:m}}var V={voiceState:"idle",voiceError:null,voiceInterimTranscript:"",voiceAudioLevels:[],voiceWarmingUp:!1,awaitingVoiceSubmitDoubleTap:!1};class a{#e=0;next(t,o){return this.#e=this.#e*o+t*(1-o),this.#e}reset(){this.#e=0}}var n=yn(null);function _Ht(y){let P=_(3),{children:l}=y,[p]=u(x),d;if(P[0]!==l||P[1]!==p)d=e(n.Provider,{value:p,children:l}),P[0]=l,P[1]=p,P[2]=d;else d=P[2];return d}function i(){let b=We(n);if(!b){throw Error("useVoiceState must be used within a VoiceProvider")}return b}function pse(){return i().store}function TYt(){return i().levelSmoother}function vp(S){let R=_(3),c=pse(),f;if(R[0]!==S||R[1]!==c)f=()=>S(c.getState()),R[0]=S,R[1]=c,R[2]=f;else f=R[2];let g=f;return Lt(c.subscribe,g,g)}function $nt(){return pse().setState}function DQ(){return pse().getState}
export{_Ht,pse,TYt,vp,$nt,DQ};
