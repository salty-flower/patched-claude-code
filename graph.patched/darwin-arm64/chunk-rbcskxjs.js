// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{IU,CTe}from"./chunk-g4zaymy2.js";import{c}from"./chunk-jqgad8sa.js";import{b}from"./chunk-w2hwjymv.js";import{ae}from"./chunk-q9edv607.js";import{Y4}from"./chunk-c5jf7pfc.js";import{$N,wE,FSe,Yc,CI,jSe,Xee,st,Nv,Ye,Ot}from"./chunk-ghnc2x4f.js";import{s}from"./chunk-3jdapt8v.js";import{Or,ol}from"./chunk-j2rn06t5.js";import{zt}from"./chunk-jz0pchtb.js";import{go}from"./chunk-qwt7krt5.js";import{Sfe}from"./chunk-hn1qz2ka.js";import{ct}from"./chunk-8q7ay08v.js";import{s9}from"./chunk-gxw4t49p.js";import{nm,MIe,NIe}from"./chunk-tyqr7kx9.js";function WG(o=!0,r=!1){if(!o)return Y4;let t=s9(go("theme","dark").value);if(r)return ae.dim(ct("promptBorder",t)(Y4));return ct("fastMode",t)(Y4)}function d2e(o,r,t=!0,a){if(CI(),!t)CTe({...IU()??{},fastMode:o});if(ol())Or()?.sendControlRequest({subtype:"apply_flag_settings",settings:{fastMode:o?!0:null,...o&&{model:FSe()}}}).catch(b);else if(t)zt("userSettings",{fastMode:o?!0:void 0},void 0,a);if(Sfe({fastMode:o},r),o)r((e)=>{if(Yc(e.mainLoopModel))return e;let n=FSe(),i=Ot(n)===Ot(Nv());return{...e,mainLoopModel:i?null:n,mainLoopModelForSession:null}})}async function Yet(o,r,t,a,e=!0,n){let i=$N();if(i)return`Fast mode unavailable: ${i}`;let{mainLoopModel:m}=r();if(d2e(o,t,e,n),s("tengu_fast_mode_toggled",{enabled:o,source:c(a),remote:ol()}),o){let d=WG(!0),f=!Yc(m)?`${NIe}${nm(wE())}`:"",l=st(),g=Yc(l)?Ye(l):"claude-opus-5",p=Xee(jSe(g));return`${d} ${MIe}${f} \xB7 ${p}${e?"":" (this session only)"}`}else return`Fast mode OFF${e?"":" (this session only)"}`}
export{WG,d2e,Yet};
