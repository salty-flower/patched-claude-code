// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{J8b as c,K8b as i,R8b as y}from"./_657.js";import{Lvc as v,muc as _,puc as s}from"./_668.js";import{XGc as l,aHc as E}from"./_705.js";import{sMc as S,xMc as w}from"./_709.js";import{$$c as b,T$c as f,U$c as g,V$c as p}from"./_796.js";import{$ad as h,Zad as r}from"./_800.js";import{jmd as a,krd as R}from"./_812.js";import{Bwd as H,twd as n}from"./_836.js";import{Exd as M}from"./_839.js";function m(e){return S.includes(e)?e:void 0}function C(){if(!i())return"unspecified";return T()??"unspecified"}function T(){return m(s().remoteHomeSettingsMode)}async function N(e,t){if(e==="forward"&&!await c())return g("remote_home_settings_mode","flag_off"),"refused";let o={previous:"unspecified"},d=await _((u)=>(o.previous=m(u.remoteHomeSettingsMode)??"unspecified",{...u,remoteHomeSettingsMode:e}),t);if(o.previous!==e)r("tengu_home_settings_mode_set",{mode:n(e),previous:n(o.previous),persisted:d});if(!d)return p("remote_home_settings_mode","unconfirmed"),"unconfirmed";return f("remote_home_settings_mode"),"written"}function W(e){return e.settingsToCloudEnabled&&e.launchMayForward&&(e.hostConsent??C())==="forward"}function j(e){if(!i())return!1;let t=k(e);if(t!==null)return r("tengu_home_settings_mode_prompt_skipped",{reason:n(t)}),!1;return!0}function k({staysAttached:e,launchMayForward:t,hostConsent:o}){if(a())return"non_interactive";if(!e)return"not_attached";if(!t)return"launch_flag";if(o!=null)return"host";if(!l().includes("userSettings"))return"user_settings_disabled";if(m(s().remoteHomeSettingsMode)!==void 0)return"answered";return null}var x=M(()=>{R();v();w();E();y();b();h();H()});
export{C as J4a,T as K4a,N as L4a,W as M4a,j as N4a,x as O4a};
