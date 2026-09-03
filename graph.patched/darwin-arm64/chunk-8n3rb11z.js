// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{_}from"./chunk-0jrfbepr.js";import{e}from"./chunk-v5r13aq1.js";import{hn,Ge,d,Ht,j}from"./chunk-xyxaqzpf.js";import{Ja}from"./chunk-he4p48dc.js";j();function x(){let p=Ja(S);let m=new a;return p.subscribe(()=>{if(p.getState().voiceState!=="recording")m.reset()}),{store:p,levelSmoother:m}}var S={voiceState:"idle",voiceError:null,voiceInterimTranscript:"",voiceAudioLevels:[],voiceWarmingUp:!1,awaitingVoiceSubmitDoubleTap:!1};class a{#e=0;next(t,o){return this.#e=this.#e*o+t*(1-o),this.#e}reset(){this.#e=0}}var n=hn(null);function xPt(y){let P=_(3),{children:s}=y,[l]=d(x),V;if(P[0]!==s||P[1]!==l)V=e(n.Provider,{value:l,children:s}),P[0]=s,P[1]=l,P[2]=V;else V=P[2];return V}function i(){let b=Ge(n);if(!b){throw Error("useVoiceState must be used within a VoiceProvider")}return b}function lle(){return i().store}function een(){return i().levelSmoother}function Zd(v){let R=_(3),c=lle(),f;if(R[0]!==v||R[1]!==c)f=()=>v(c.getState()),R[0]=v,R[1]=c,R[2]=f;else f=R[2];let g=f;return Ht(c.subscribe,g,g)}function pst(){return lle().setState}function cee(){return lle().getState}
export{xPt,lle,een,Zd,pst,cee};
