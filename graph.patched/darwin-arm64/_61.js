// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{G3b as T,m3b as s,o3b as m,q3b as l,r3b as _}from"./_630.js";import{Lvc as L,luc as d,puc as g}from"./_668.js";import{GFc as p,XFc as c,uGc as U}from"./_701.js";import{$$c as F,T$c as a,V$c as f}from"./_796.js";import{$ad as C,Zad as o}from"./_800.js";import{Qcd as u,Ycd as h}from"./_802.js";import{tfd as n,yfd as I}from"./_806.js";F();C();L();I();T();h();U();var M={CLAUDE_CODE_TUI_TRIAL:"fullscreen"};function S(r,t){d((e)=>(e.fullscreenUpsellSeenCount??0)>=r?e:{...e,fullscreenUpsellSeenCount:r},t)}function b(r){S(l,r)}function R(r){let t=s();if(t.upsellImpression!==void 0)return t.upsellImpression;let e=Math.min((g().fullscreenUpsellSeenCount??0)+1,l);return t.upsellImpression=e,S(e,r),e}async function D(r){let t=s();if(t.persisted||m()!=="fullscreen")return!1;if(p().tui!==void 0)return n("fullscreen trial: settings.tui was set explicitly during the trial \u2014 not persisting"),!1;if(!_())return n("fullscreen trial: renderer is not fullscreen this session (auto-off) \u2014 not persisting"),!1;let e=!1,{error:i}=await c("userSettings",(E)=>(e=E?.tui!==void 0,e?null:{tui:"fullscreen"}),void 0,r);if(i)return u(i),f("tui_fullscreen_upsell_trial","settings_write_failed"),!1;if(e)return n("fullscreen trial: settings.tui was set explicitly during the trial (seen inside the queued write) \u2014 not persisting"),!1;return b(r),t.persisted=!0,a("tui_fullscreen_upsell_trial"),o("tengu_fullscreen_upsell_trial_persisted",{session_age_ms:Math.round(process.uptime()*1000)}),n("fullscreen trial: healthy \u2014 persisted settings.tui=fullscreen"),!0}
export{M as ih,b as jh,R as kh,D as lh};
