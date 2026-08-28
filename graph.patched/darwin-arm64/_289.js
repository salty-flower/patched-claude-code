// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{ieb as S,jeb as x}from"./_496.js";import{leb as p,neb as g}from"./_497.js";import{TIb as T,_Ib as u,iJb as s,jJb as l,lJb as D}from"./_577.js";import{r5b as a,s5b as A}from"./_637.js";import{Exd as E}from"./_839.js";function k(){let b=a(h);let y=new v;return b.subscribe(()=>{if(b.getState().voiceState!=="recording")y.reset()}),{store:b,levelSmoother:y}}class v{#e=0;next(e,t){return this.#e=this.#e*t+e*(1-t),this.#e}reset(){this.#e=0}}function I(G){let H=S(3),{children:d}=G,[m]=s(k),w;if(H[0]!==d||H[1]!==m)w=p(n.Provider,{value:m,children:d}),H[0]=d,H[1]=m,H[2]=w;else w=H[2];return w}function i(){let P=u(n);if(!P){throw Error("useVoiceState must be used within a VoiceProvider")}return P}function o(){return i().store}function L(){return i().levelSmoother}function N(f){let J=S(3),c=o(),R;if(J[0]!==f||J[1]!==c)R=()=>f(c.getState()),J[0]=f,J[1]=c,J[2]=R;else R=J[2];let C=R;return l(c.subscribe,C,C)}function U(){return o().setState}function W(){return o().getState}var h,n;var q=E(()=>{D();A();g();x();h={voiceState:"idle",voiceError:null,voiceInterimTranscript:"",voiceAudioLevels:[],voiceWarmingUp:!1,awaitingVoiceSubmitDoubleTap:!1};n=T(null)});
export{I as uE,o as vE,L as wE,N as xE,U as yE,W as zE,q as AE};
