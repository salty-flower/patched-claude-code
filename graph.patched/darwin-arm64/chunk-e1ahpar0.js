// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{n}from"./chunk-cmkfpkth.js";import{Cp,tR}from"./chunk-mf69et6t.js";import{MJt}from"./chunk-5npty3hf.js";import{Pet,tkt}from"./chunk-5jz9ztgy.js";import{MI}from"./chunk-5h9w4q7y.js";import{format as t}from"util";class s{silly(e,...r){n(t(e,...r),{level:"debug"})}debug(e,...r){n(t(e,...r),{level:"debug"})}info(e,...r){n(t(e,...r),{level:"info"})}warn(e,...r){n(t(e,...r),{level:"warn"})}error(e,...r){n(t(e,...r),{level:"error"})}}function Iet(){let e=Cp();if(e.hostAdapter)return e.hostAdapter;return e.hostAdapter={serverName:MI,logger:new s,executor:MJt({getMouseAnimationEnabled:()=>tkt().mouseAnimation,getHideBeforeActionEnabled:()=>tkt().hideBeforeAction}),ensureOsPermissions:async()=>{let r=tR(),o=r.tcc.checkAccessibility(),i=r.tcc.checkScreenRecording();return o&&i?{granted:!0}:{granted:!1,accessibility:o,screenRecording:i}},isDisabled:()=>!Pet(),getSubGates:tkt,getAutoUnhideEnabled:()=>!0,cropRawPatch:()=>null},e.hostAdapter}
export{Iet};
