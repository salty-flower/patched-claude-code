// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{ly}from"./chunk-h6t453jw.js";import{mZr}from"./chunk-4s8s8309.js";import{t}from"./chunk-f8eqwxpt.js";import{y,p}from"./chunk-e3gw32ew.js";import{C,Pe}from"./chunk-rnxw3wwn.js";var c=C(function(w,s){var R=Pe("path"),n=mZr();s.exports=n.computerUse});function wU(){return ly().swiftModule??=c()}function g(e){e._drainMainRunLoop()}function m(){let e=ly();if(e.runLoopPumpRetainCount++,e.runLoopPump===void 0)e.runLoopPump=setInterval(g,1,wU()),t("[drainRunLoop] pump started",{level:"verbose"})}function a(){let e=ly();if(e.runLoopPumpRetainCount--,e.runLoopPumpRetainCount<=0&&e.runLoopPump!==void 0)clearInterval(e.runLoopPump),e.runLoopPump=void 0,t("[drainRunLoop] pump stopped",{level:"verbose"}),e.runLoopPumpRetainCount=0}var P=30000;class f extends Error{constructor(e){super(`computer-use native call exceeded ${e}ms`)}}function v(e,r){e(new f(r))}var d=m,l=a;async function dde(e,r=P){m();let o;try{let u=e();u.catch(()=>{});let i=Promise.withResolvers();return o=setTimeout(v,r,i.reject,r),await Promise.race([u,i.promise])}finally{clearTimeout(o),a()}}function JRo(e){if(ly().escHotkeyRegistered)return!0;if(!wU().hotkey.registerEscape(e))return t("[cu-esc] registerEscape returned false",{level:"warn"}),p("computeruse_esc_register","tap_create_failed"),!1;return d(),ly().escHotkeyRegistered=!0,t("[cu-esc] registered"),y("computeruse_esc_register"),!0}function QRo(){if(!ly().escHotkeyRegistered)return;try{wU().hotkey.unregister()}finally{l(),ly().escHotkeyRegistered=!1,t("[cu-esc] unregistered")}}function jRr(){if(!ly().escHotkeyRegistered)return;wU().hotkey.notifyExpectedEscape()}
export{wU,dde,JRo,QRo,jRr};
