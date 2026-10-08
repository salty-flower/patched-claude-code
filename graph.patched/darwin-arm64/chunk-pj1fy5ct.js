// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{xy}from"./chunk-abk10gvz.js";import{Eao}from"./chunk-595qs6j6.js";import{t}from"./chunk-b5feae42.js";import{y,p}from"./chunk-hz0a4zf6.js";import{k,Me}from"./chunk-8drz5tx3.js";var c=k(function(w,s){var R=Me("path"),n=Eao();s.exports=n.computerUse});function _B(){return xy().swiftModule??=c()}function g(e){e._drainMainRunLoop()}function m(){let e=xy();if(e.runLoopPumpRetainCount++,e.runLoopPump===void 0)e.runLoopPump=setInterval(g,1,_B()),t("[drainRunLoop] pump started",{level:"verbose"})}function a(){let e=xy();if(e.runLoopPumpRetainCount--,e.runLoopPumpRetainCount<=0&&e.runLoopPump!==void 0)clearInterval(e.runLoopPump),e.runLoopPump=void 0,t("[drainRunLoop] pump stopped",{level:"verbose"}),e.runLoopPumpRetainCount=0}var P=30000;class f extends Error{constructor(e){super(`computer-use native call exceeded ${e}ms`)}}function v(e,r){e(new f(r))}var d=m,l=a;async function Kue(e,r=P){m();let o;try{let u=e();u.catch(()=>{});let i=Promise.withResolvers();return o=setTimeout(v,r,i.reject,r),await Promise.race([u,i.promise])}finally{clearTimeout(o),a()}}function LLo(e){if(xy().escHotkeyRegistered)return!0;if(!_B().hotkey.registerEscape(e))return t("[cu-esc] registerEscape returned false",{level:"warn"}),p("computeruse_esc_register","tap_create_failed"),!1;return d(),xy().escHotkeyRegistered=!0,t("[cu-esc] registered"),y("computeruse_esc_register"),!0}function NLo(){if(!xy().escHotkeyRegistered)return;try{_B().hotkey.unregister()}finally{l(),xy().escHotkeyRegistered=!1,t("[cu-esc] unregistered")}}function mDr(){if(!xy().escHotkeyRegistered)return;_B().hotkey.notifyExpectedEscape()}
export{_B,Kue,LLo,NLo,mDr};
