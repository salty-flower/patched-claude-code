// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{t}from"./chunk-bnfhb7sj.js";import{Zh}from"./chunk-vdfx3rm8.js";import{Gxo}from"./chunk-xgjqvxf8.js";import{g,p}from"./chunk-n1esck2w.js";import{T,Le}from"./chunk-71kjn9x8.js";var c=T(function(w,s){var R=Le("path"),n=Gxo();s.exports=n.computerUse});function c2(){return Zh().swiftModule??=c()}function y(e){e._drainMainRunLoop()}function m(){let e=Zh();if(e.runLoopPumpRetainCount++,e.runLoopPump===void 0)e.runLoopPump=setInterval(y,1,c2()),t("[drainRunLoop] pump started",{level:"verbose"})}function a(){let e=Zh();if(e.runLoopPumpRetainCount--,e.runLoopPumpRetainCount<=0&&e.runLoopPump!==void 0)clearInterval(e.runLoopPump),e.runLoopPump=void 0,t("[drainRunLoop] pump stopped",{level:"verbose"}),e.runLoopPumpRetainCount=0}var P=30000;class f extends Error{constructor(e){super(`computer-use native call exceeded ${e}ms`)}}function v(e,r){e(new f(r))}var d=m,l=a;async function r_e(e,r=P){m();let o;try{let u=e();u.catch(()=>{});let i=Promise.withResolvers();return o=setTimeout(v,r,i.reject,r),await Promise.race([u,i.promise])}finally{clearTimeout(o),a()}}function cQo(e){if(Zh().escHotkeyRegistered)return!0;if(!c2().hotkey.registerEscape(e))return t("[cu-esc] registerEscape returned false",{level:"warn"}),p("computeruse_esc_register","tap_create_failed"),!1;return d(),Zh().escHotkeyRegistered=!0,t("[cu-esc] registered"),g("computeruse_esc_register"),!0}function uQo(){if(!Zh().escHotkeyRegistered)return;try{c2().hotkey.unregister()}finally{l(),Zh().escHotkeyRegistered=!1,t("[cu-esc] unregistered")}}function S9r(){if(!Zh().escHotkeyRegistered)return;c2().hotkey.notifyExpectedEscape()}
export{c2,r_e,cQo,uQo,S9r};
