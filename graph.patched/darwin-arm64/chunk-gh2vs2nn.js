// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{rh}from"./chunk-qs3tm9d2.js";import{R$r}from"./chunk-ztwa178z.js";import{t}from"./chunk-3wz0srxw.js";import{y,f}from"./chunk-sc069zjc.js";import{E,Ie}from"./chunk-pj3wn6z3.js";var p=E(function(w,s){var R=Ie("path"),n=R$r();s.exports=n.computerUse});function RF(){return rh().swiftModule??=p()}function g(e){e._drainMainRunLoop()}function c(){let e=rh();if(e.runLoopPumpRetainCount++,e.runLoopPump===void 0)e.runLoopPump=setInterval(g,1,RF()),t("[drainRunLoop] pump started",{level:"verbose"})}function m(){let e=rh();if(e.runLoopPumpRetainCount--,e.runLoopPumpRetainCount<=0&&e.runLoopPump!==void 0)clearInterval(e.runLoopPump),e.runLoopPump=void 0,t("[drainRunLoop] pump stopped",{level:"verbose"}),e.runLoopPumpRetainCount=0}var P=30000;class a extends Error{constructor(e){super(`computer-use native call exceeded ${e}ms`)}}function v(e,r){e(new a(r))}var d=c,l=m;async function lie(e,r=P){c();let o;try{let u=e();u.catch(()=>{});let i=Promise.withResolvers();return o=setTimeout(v,r,i.reject,r),await Promise.race([u,i.promise])}finally{clearTimeout(o),m()}}function duo(e){if(rh().escHotkeyRegistered)return!0;if(!RF().hotkey.registerEscape(e))return t("[cu-esc] registerEscape returned false",{level:"warn"}),f("computeruse_esc_register","tap_create_failed"),!1;return d(),rh().escHotkeyRegistered=!0,t("[cu-esc] registered"),y("computeruse_esc_register"),!0}function uuo(){if(!rh().escHotkeyRegistered)return;try{RF().hotkey.unregister()}finally{l(),rh().escHotkeyRegistered=!1,t("[cu-esc] unregistered")}}function Ogr(){if(!rh().escHotkeyRegistered)return;RF().hotkey.notifyExpectedEscape()}
export{RF,lie,duo,uuo,Ogr};
