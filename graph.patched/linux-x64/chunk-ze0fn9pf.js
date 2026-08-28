// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{A2,yEe}from"./chunk-2vv5hpw3.js";import{c}from"./chunk-gt4btdxr.js";import{_}from"./chunk-6ce4s97h.js";import{ae}from"./chunk-8ba2x98b.js";import{q4}from"./chunk-yyzqa5fj.js";import{$1,SA,Ove,Yc,SI,Bve,qee,st,$S,Ye,Lt}from"./chunk-ns0ekkj0.js";import{s}from"./chunk-cvykgfry.js";import{Lr,il}from"./chunk-fa374z64.js";import{Gt}from"./chunk-bcez0qfh.js";import{go}from"./chunk-se5a0ehn.js";import{yfe}from"./chunk-r6mz4peg.js";import{ct}from"./chunk-9y73b7gk.js";import{r5}from"./chunk-amhr0yrx.js";import{tm,MIe,OIe}from"./chunk-7800t9yc.js";function F6(o=!0,r=!1){if(!o)return q4;let t=r5(go("theme","dark").value);if(r)return ae.dim(ct("promptBorder",t)(q4));return ct("fastMode",t)(q4)}function _Be(o,r,t=!0,a){if(SI(),!t)yEe({...A2()??{},fastMode:o});if(il())Lr()?.sendControlRequest({subtype:"apply_flag_settings",settings:{fastMode:o?!0:null,...o&&{model:Ove()}}}).catch(_);else if(t)Gt("userSettings",{fastMode:o?!0:void 0},void 0,a);if(yfe({fastMode:o},r),o)r((e)=>{if(Yc(e.mainLoopModel))return e;let n=Ove(),i=Lt(n)===Lt($S());return{...e,mainLoopModel:i?null:n,mainLoopModelForSession:null}})}async function Jet(o,r,t,a,e=!0,n){let i=$1();if(i)return`Fast mode unavailable: ${i}`;let{mainLoopModel:m}=r();if(_Be(o,t,e,n),s("tengu_fast_mode_toggled",{enabled:o,source:c(a),remote:il()}),o){let d=F6(!0),f=!Yc(m)?`${OIe}${tm(SA())}`:"",l=st(),g=Yc(l)?Ye(l):"claude-opus-5",p=qee(Bve(g));return`${d} ${MIe}${f} \xB7 ${p}${e?"":" (this session only)"}`}else return`Fast mode OFF${e?"":" (this session only)"}`}
export{F6,_Be,Jet};
