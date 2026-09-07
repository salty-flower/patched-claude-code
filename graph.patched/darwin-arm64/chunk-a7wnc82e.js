// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{_}from"./chunk-c8ey99v5.js";import{e}from"./chunk-smtaex5n.js";import{Jt,De,d,Et,N}from"./chunk-jegfnmzv.js";import{ja}from"./chunk-rpg2kszv.js";N();function x(){let p=ja(S);let m=new a;return p.subscribe(()=>{if(p.getState().voiceState!=="recording")m.reset()}),{store:p,levelSmoother:m}}var S={voiceState:"idle",voiceError:null,voiceInterimTranscript:"",voiceAudioLevels:[],voiceWarmingUp:!1,awaitingVoiceSubmitDoubleTap:!1};class a{#e=0;next(t,o){return this.#e=this.#e*o+t*(1-o),this.#e}reset(){this.#e=0}}var n=Jt(null);function GIt(y){let P=_(3),{children:s}=y,[l]=d(x),V;if(P[0]!==s||P[1]!==l)V=e(n.Provider,{value:l,children:s}),P[0]=s,P[1]=l,P[2]=V;else V=P[2];return V}function i(){let b=De(n);if(!b){throw Error("useVoiceState must be used within a VoiceProvider")}return b}function Nae(){return i().store}function oZt(){return i().levelSmoother}function Kd(v){let R=_(3),c=Nae(),f;if(R[0]!==v||R[1]!==c)f=()=>v(c.getState()),R[0]=v,R[1]=c,R[2]=f;else f=R[2];let g=f;return Et(c.subscribe,g,g)}function Ust(){return Nae().setState}function TZ(){return Nae().getState}
export{GIt,Nae,oZt,Kd,Ust,TZ};
