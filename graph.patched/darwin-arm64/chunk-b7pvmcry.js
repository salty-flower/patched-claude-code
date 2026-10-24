// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{w}from"./chunk-zqxc4qtb.js";import{e}from"./chunk-f790ajz4.js";import{Gt,Se,y,kt,j}from"./chunk-s8vmszp2.js";import{Ps}from"./chunk-bkvejkkf.js";j();function h(){let u=Ps(v);let V=new l;return u.subscribe(()=>{if(u.getState().voiceState!=="recording")V.reset()}),{store:u,levelSmoother:V}}var v={voiceState:"idle",voiceError:null,voiceInterimTranscript:"",voiceAudioLevels:[],voiceWarmingUp:!1,awaitingVoiceSubmitDoubleTap:!1};class l{#e=0;next(o,t){return this.#e=this.#e*t+o*(1-t),this.#e}reset(){this.#e=0}}var i=Gt(null);function Bgr(o){let s=w(3),{children:t}=o,[n]=y(h),c;if(s[0]!==t||s[1]!==n)c=e(i.Provider,{value:n,children:t}),s[0]=t,s[1]=n,s[2]=c;else c=s[2];return c}function r(){let o=Se(i);if(!o){throw Error("useVoiceState must be used within a VoiceProvider")}return o}function C5e(){return r().store}function wro(){return r().levelSmoother}function Vh(o){let n=w(3),t=C5e(),s;if(n[0]!==o||n[1]!==t)s=()=>o(t.getState()),n[0]=o,n[1]=t,n[2]=s;else s=n[2];let c=s;return kt(t.subscribe,c,c)}function OIn(){return C5e().setState}function bUe(){return C5e().getState}
export{Bgr,C5e,wro,Vh,OIn,bUe};
