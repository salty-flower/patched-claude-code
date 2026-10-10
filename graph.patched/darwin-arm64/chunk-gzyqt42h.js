// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{w}from"./chunk-2mxgft48.js";import{e}from"./chunk-d5st5fww.js";import{qt,Ae,y,Rt,N}from"./chunk-kexg5hxg.js";import{gs}from"./chunk-tavdbgyw.js";N();function h(){let u=gs(v);let V=new l;return u.subscribe(()=>{if(u.getState().voiceState!=="recording")V.reset()}),{store:u,levelSmoother:V}}var v={voiceState:"idle",voiceError:null,voiceInterimTranscript:"",voiceAudioLevels:[],voiceWarmingUp:!1,awaitingVoiceSubmitDoubleTap:!1};class l{#e=0;next(o,t){return this.#e=this.#e*t+o*(1-t),this.#e}reset(){this.#e=0}}var i=qt(null);function s4n(o){let s=w(3),{children:t}=o,[n]=y(h),c;if(s[0]!==t||s[1]!==n)c=e(i.Provider,{value:n,children:t}),s[0]=t,s[1]=n,s[2]=c;else c=s[2];return c}function r(){let o=Ae(i);if(!o){throw Error("useVoiceState must be used within a VoiceProvider")}return o}function wje(){return r().store}function YDr(){return r().levelSmoother}function vy(o){let n=w(3),t=wje(),s;if(n[0]!==o||n[1]!==t)s=()=>o(t.getState()),n[0]=o,n[1]=t,n[2]=s;else s=n[2];let c=s;return Rt(t.subscribe,c,c)}function Gdn(){return wje().setState}function OIe(){return wje().getState}
export{s4n,wje,YDr,vy,Gdn,OIe};
