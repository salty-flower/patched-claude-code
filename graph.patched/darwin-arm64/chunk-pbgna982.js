// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{t}from"./chunk-d7b0m8qy.js";import{o_}from"./chunk-4yx6r993.js";import{cVo}from"./chunk-rrrrq3eh.js";import{g,p}from"./chunk-wn8xtaqg.js";import{x,$e}from"./chunk-meds60nn.js";var c=x(function(w,s){var R=$e("path"),n=cVo();s.exports=n.computerUse});function y6(){return o_().swiftModule??=c()}function y(e){e._drainMainRunLoop()}function m(){let e=o_();if(e.runLoopPumpRetainCount++,e.runLoopPump===void 0)e.runLoopPump=setInterval(y,1,y6()),t("[drainRunLoop] pump started",{level:"verbose"})}function a(){let e=o_();if(e.runLoopPumpRetainCount--,e.runLoopPumpRetainCount<=0&&e.runLoopPump!==void 0)clearInterval(e.runLoopPump),e.runLoopPump=void 0,t("[drainRunLoop] pump stopped",{level:"verbose"}),e.runLoopPumpRetainCount=0}var P=30000;class f extends Error{constructor(e){super(`computer-use native call exceeded ${e}ms`)}}function v(e,r){e(new f(r))}var d=m,l=a;async function sve(e,r=P){m();let o;try{let u=e();u.catch(()=>{});let i=Promise.withResolvers();return o=setTimeout(v,r,i.reject,r),await Promise.race([u,i.promise])}finally{clearTimeout(o),a()}}function fRs(e){if(o_().escHotkeyRegistered)return!0;if(!y6().hotkey.registerEscape(e))return t("[cu-esc] registerEscape returned false",{level:"warn"}),p("computeruse_esc_register","tap_create_failed"),!1;return d(),o_().escHotkeyRegistered=!0,t("[cu-esc] registered"),g("computeruse_esc_register"),!0}function mRs(){if(!o_().escHotkeyRegistered)return;try{y6().hotkey.unregister()}finally{l(),o_().escHotkeyRegistered=!1,t("[cu-esc] unregistered")}}function A_o(){if(!o_().escHotkeyRegistered)return;y6().hotkey.notifyExpectedEscape()}
export{y6,sve,fRs,mRs,A_o};
