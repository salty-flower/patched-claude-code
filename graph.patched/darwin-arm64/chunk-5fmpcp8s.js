// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{b}from"./chunk-mvpw0rjp.js";import{e}from"./chunk-437ab22y.js";import{Qt,Ne,d,kt,M}from"./chunk-ncc6kxz8.js";import{Qs}from"./chunk-p2dc4my5.js";M();function h(){let p=Qs(S);let m=new a;return p.subscribe(()=>{if(p.getState().voiceState!=="recording")m.reset()}),{store:p,levelSmoother:m}}var S={voiceState:"idle",voiceError:null,voiceInterimTranscript:"",voiceAudioLevels:[],voiceWarmingUp:!1,awaitingVoiceSubmitDoubleTap:!1};class a{#e=0;next(t,o){return this.#e=this.#e*o+t*(1-o),this.#e}reset(){this.#e=0}}var n=Qt(null);function Aqt(P){let R=b(3),{children:s}=P,[l]=d(h),V;if(R[0]!==s||R[1]!==l)V=e(n.Provider,{value:l,children:s}),R[0]=s,R[1]=l,R[2]=V;else V=R[2];return V}function i(){let f=Ne(n);if(!f){throw Error("useVoiceState must be used within a VoiceProvider")}return f}function uye(){return i().store}function OAn(){return i().levelSmoother}function Tf(v){let C=b(3),c=uye(),g;if(C[0]!==v||C[1]!==c)g=()=>v(c.getState()),C[0]=v,C[1]=c,C[2]=g;else g=C[2];let x=g;return kt(c.subscribe,x,x)}function Svt(){return uye().setState}function xae(){return uye().getState}
export{Aqt,uye,OAn,Tf,Svt,xae};
