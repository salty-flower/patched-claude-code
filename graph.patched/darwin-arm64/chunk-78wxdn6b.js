// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{t}from"./chunk-tdxkq523.js";import{Ty}from"./chunk-kmk705pn.js";import{aNo}from"./chunk-csk09wf4.js";import{g,p}from"./chunk-53e7d9dh.js";import{R,Be}from"./chunk-8xa87pyw.js";var c=R(function(E,s){var w=Be("path"),n=aNo();s.exports=n.computerUse});function cG(){return Ty().swiftModule??=c()}function y(e){e._drainMainRunLoop()}function m(){let e=Ty();if(e.runLoopPumpRetainCount++,e.runLoopPump===void 0)e.runLoopPump=setInterval(y,1,cG()),t("[drainRunLoop] pump started",{level:"verbose"})}function a(){let e=Ty();if(e.runLoopPumpRetainCount--,e.runLoopPumpRetainCount<=0&&e.runLoopPump!==void 0)clearInterval(e.runLoopPump),e.runLoopPump=void 0,t("[drainRunLoop] pump stopped",{level:"verbose"}),e.runLoopPumpRetainCount=0}var P=30000;class f extends Error{constructor(e){super(`computer-use native call exceeded ${e}ms`)}}function v(e,r){e(new f(r))}var d=m,l=a;async function dbe(e,r=P){m();let o;try{let u=e();u.catch(()=>{});let i=Promise.withResolvers();return o=setTimeout(v,r,i.reject,r),await Promise.race([u,i.promise])}finally{clearTimeout(o),a()}}function Tms(e){if(Ty().escHotkeyRegistered)return!0;if(!cG().hotkey.registerEscape(e))return t("[cu-esc] registerEscape returned false",{level:"warn"}),p("computeruse_esc_register","tap_create_failed"),!1;return d(),Ty().escHotkeyRegistered=!0,t("[cu-esc] registered"),g("computeruse_esc_register"),!0}function Ams(){if(!Ty().escHotkeyRegistered)return;try{cG().hotkey.unregister()}finally{l(),Ty().escHotkeyRegistered=!1,t("[cu-esc] unregistered")}}function fao(){if(!Ty().escHotkeyRegistered)return;cG().hotkey.notifyExpectedEscape()}
export{cG,dbe,Tms,Ams,fao};
