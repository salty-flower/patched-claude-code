// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{SK as G,TK as eo}from"./_357.js";import{SDb as l,TDb as K}from"./_564.js";import{B4b as J,z4b as F}from"./_632.js";import{Ccc as a,Csc as S,Esc as z,Jcc as N,Pdc as E,Vcc as A,Wec as j,_cc as O,hdc as T,jfc as f,kdc as oo,rfc as to,wcc as R,xcc as C,xec as U,ycc as m}from"./_668.js";import{Gzc as M,Jzc as w}from"./_685.js";import{WFc as _,uGc as Z}from"./_701.js";import{GJc as i,lKc as D}from"./_708.js";import{Q8c as k,T8c as g,W8c as Y}from"./_786.js";import{$ad as W,Zad as B}from"./_800.js";import{Qcd as I,Ycd as X}from"./_802.js";import{jnd as v,knd as x,krd as V}from"./_812.js";import{Bwd as Q,twd as h}from"./_836.js";import{Exd as u}from"./_839.js";function y(o=!0,r=!1){if(!o)return i;let t=F(S("theme","dark").value);if(r)return M.dim(l("promptBorder",t)(i));return l("fastMode",t)(i)}var L=u(()=>{w();D();z();J();K()});function ro(o,r,t=!0,d){if(N(),!t)x({...v()??{},fastMode:o});if(g())k()?.sendControlRequest({subtype:"apply_flag_settings",settings:{fastMode:o?!0:null,...o&&{model:m()}}}).catch(I);else if(t)_("userSettings",{fastMode:o?!0:void 0},void 0,d);if(G({fastMode:o},r),o)r((e)=>{if(a(e.mainLoopModel))return e;let n=m(),s=f(n)===f(U());return{...e,mainLoopModel:s?null:n,mainLoopModelForSession:null}})}async function Bo(o,r,t,d,e=!0,n){let s=R();if(s)return`Fast mode unavailable: ${s}`;let{mainLoopModel:H}=r();if(ro(o,t,e,n),B("tengu_fast_mode_toggled",{enabled:o,source:h(d),remote:g()}),o){let c=y(!0),P=!a(H)?` \xB7 model set to ${C()}`:"",p=E(),b=a(p)?j(p):"claude-opus-5",q=T(O(b));return`${c} Fast mode ON${P} \xB7 ${q}${e?"":" (this session only)"}`}else return`Fast mode OFF${e?"":" (this session only)"}`}var no=u(()=>{V();L();Y();W();Q();eo();A();X();to();oo();Z()});
export{y as NK,L as OK,ro as PK,Bo as QK,no as RK};
