// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{_h}from"./chunk-5q1mqj6a.js";import{ygo}from"./chunk-6e0m1pge.js";import{t}from"./chunk-gyf58rwf.js";import{g,f}from"./chunk-2hb5361r.js";import{T,Le}from"./chunk-txt1tvjz.js";var p=T(function(w,s){var R=Le("path"),n=ygo();s.exports=n.computerUse});function Oj(){return _h().swiftModule??=p()}function y(e){e._drainMainRunLoop()}function c(){let e=_h();if(e.runLoopPumpRetainCount++,e.runLoopPump===void 0)e.runLoopPump=setInterval(y,1,Oj()),t("[drainRunLoop] pump started",{level:"verbose"})}function m(){let e=_h();if(e.runLoopPumpRetainCount--,e.runLoopPumpRetainCount<=0&&e.runLoopPump!==void 0)clearInterval(e.runLoopPump),e.runLoopPump=void 0,t("[drainRunLoop] pump stopped",{level:"verbose"}),e.runLoopPumpRetainCount=0}var P=30000;class a extends Error{constructor(e){super(`computer-use native call exceeded ${e}ms`)}}function v(e,r){e(new a(r))}var d=c,l=m;async function mme(e,r=P){c();let o;try{let u=e();u.catch(()=>{});let i=Promise.withResolvers();return o=setTimeout(v,r,i.reject,r),await Promise.race([u,i.promise])}finally{clearTimeout(o),m()}}function VWo(e){if(_h().escHotkeyRegistered)return!0;if(!Oj().hotkey.registerEscape(e))return t("[cu-esc] registerEscape returned false",{level:"warn"}),f("computeruse_esc_register","tap_create_failed"),!1;return d(),_h().escHotkeyRegistered=!0,t("[cu-esc] registered"),g("computeruse_esc_register"),!0}function qWo(){if(!_h().escHotkeyRegistered)return;try{Oj().hotkey.unregister()}finally{l(),_h().escHotkeyRegistered=!1,t("[cu-esc] unregistered")}}function PBr(){if(!_h().escHotkeyRegistered)return;Oj().hotkey.notifyExpectedEscape()}
export{Oj,mme,VWo,qWo,PBr};
