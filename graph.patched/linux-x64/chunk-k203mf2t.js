// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{n}from"./chunk-akz0cj0f.js";import{kp,JH}from"./chunk-c3npkkpj.js";import{TJt}from"./chunk-sfcdeekw.js";import{Let,iHt}from"./chunk-6kvmxqmb.js";import{LI}from"./chunk-c8dx8wrx.js";import{format as t}from"util";class s{silly(e,...r){n(t(e,...r),{level:"debug"})}debug(e,...r){n(t(e,...r),{level:"debug"})}info(e,...r){n(t(e,...r),{level:"info"})}warn(e,...r){n(t(e,...r),{level:"warn"})}error(e,...r){n(t(e,...r),{level:"error"})}}function Ret(){let e=kp();if(e.hostAdapter)return e.hostAdapter;return e.hostAdapter={serverName:LI,logger:new s,executor:TJt({getMouseAnimationEnabled:()=>iHt().mouseAnimation,getHideBeforeActionEnabled:()=>iHt().hideBeforeAction}),ensureOsPermissions:async()=>{let r=JH(),o=r.tcc.checkAccessibility(),i=r.tcc.checkScreenRecording();return o&&i?{granted:!0}:{granted:!1,accessibility:o,screenRecording:i}},isDisabled:()=>!Let(),getSubGates:iHt,getAutoUnhideEnabled:()=>!0,cropRawPatch:()=>null},e.hostAdapter}
export{Ret};
